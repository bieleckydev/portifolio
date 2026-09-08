import { useRef, useState, useEffect, useCallback } from 'react';

/**
 * Custom hook for ultra-fluid horizontal scrolling.
 * - On desktop: Pinned sticky stage driven by vertical mouse wheel scroll with RAF LERP physics.
 * - On mobile/touch: Supports both natural horizontal touch swiping/dragging AND vertical scroll continuity,
 *   with hardware-accelerated GPU transforms and touch inertia.
 */
export function usePinnedHorizontalScroll({
  itemCount = 0,
  speedFactor = 1,
  enabled = true
} = {}) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);

  // High-performance animation refs (independent of React render cycle)
  const targetXRef = useRef(0);
  const currentXRef = useRef(0);
  const maxScrollXRef = useRef(0);
  const animFrameIdRef = useRef(null);
  const lastIndexRef = useRef(0);
  const lastProgressRef = useRef(0);

  // Touch gesture refs
  const touchStartRef = useRef({ x: 0, y: 0, time: 0, startTargetX: 0, isHorizontalSwipe: false });

  // React state for UI counters and metadata
  const [scrollProgress, setScrollProgress] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerHeight, setContainerHeight] = useState('auto');
  const [isPinned, setIsPinned] = useState(false);

  // Measure track scroll width and calculate required virtual vertical height
  const updateDimensions = useCallback(() => {
    if (!enabled || !trackRef.current || !containerRef.current) return;
    const trackEl = trackRef.current;
    const trackWidth = trackEl.scrollWidth;
    const windowW = window.innerWidth;
    const windowH = window.innerHeight;

    // Mobile has tighter buffer, desktop has generous breathing room on the right
    const rightBuffer = windowW > 768 ? 220 : 36;
    const maxTravel = Math.max(0, trackWidth - windowW + rightBuffer);
    maxScrollXRef.current = maxTravel;

    if (maxTravel <= 0) {
      setContainerHeight('auto');
      targetXRef.current = 0;
      currentXRef.current = 0;
      if (trackRef.current) {
        trackRef.current.style.transform = 'translate3d(0, 0, 0)';
      }
      setTranslateX(0);
      setScrollProgress(0);
      return;
    }

    // Adapt speed factor for mobile screens so scrolling through cards is quick and effortless
    const effectiveSpeed = windowW <= 768 ? Math.max(speedFactor, 1.15) : speedFactor;
    const virtualHeight = windowH + (maxTravel / effectiveSpeed);
    setContainerHeight(`${Math.round(virtualHeight)}px`);
  }, [enabled, speedFactor]);

  // Main high-performance LERP physics loop (Butter-smooth 60fps/120fps)
  useEffect(() => {
    if (!enabled) return;

    let isMounted = true;
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    const lerpDamping = isMobile ? 0.12 : 0.088; // Slightly snappier response on mobile touch

    const tick = () => {
      if (!isMounted) return;

      const trackEl = trackRef.current;
      const containerEl = containerRef.current;
      const target = targetXRef.current;
      const current = currentXRef.current;
      const diff = target - current;

      // Interpolate with sub-pixel precision
      if (Math.abs(diff) > 0.04) {
        currentXRef.current += diff * lerpDamping;
      } else {
        currentXRef.current = target;
      }

      // 1. Direct GPU transform to the track element (zero React state re-render lag)
      if (trackEl) {
        trackEl.style.transform = `translate3d(-${currentXRef.current.toFixed(2)}px, 0, 0)`;
      }

      // 2. Direct style updates to progress indicators inside this container
      if (containerEl && maxScrollXRef.current > 0) {
        const percent = Math.min(100, Math.max(0, (currentXRef.current / maxScrollXRef.current) * 100));
        const fills = containerEl.querySelectorAll('.pinned-progress-fill, .pinned-circuit-cable-fill');
        fills.forEach((fill) => {
          fill.style.width = `${Math.max(4, percent).toFixed(1)}%`;
        });

        // Update frosted edge cross-fade vignettes
        const leftVignette = containerEl.querySelector('.pinned-edge-vignette-left');
        const rightVignette = containerEl.querySelector('.pinned-edge-vignette-right');
        if (leftVignette) {
          leftVignette.style.opacity = percent > 0.8 ? String(Math.min(1, percent / 8).toFixed(2)) : '0';
        }
        if (rightVignette) {
          rightVignette.style.opacity = percent < 99.2 ? String(Math.min(1, (100 - percent) / 8).toFixed(2)) : '0';
        }

        // Throttle React state updates to avoid unnecessary component re-renders
        if (Math.abs(percent - lastProgressRef.current) >= 0.8) {
          lastProgressRef.current = percent;
          setScrollProgress(percent);
          setTranslateX(currentXRef.current);
        }

        // Precise center-card index calculation
        if (itemCount > 0) {
          const centerRatio = itemCount > 1 ? (currentXRef.current / maxScrollXRef.current) * (itemCount - 1) : 0;
          const calculatedIndex = Math.min(itemCount - 1, Math.max(0, Math.round(centerRatio)));
          if (calculatedIndex !== lastIndexRef.current) {
            lastIndexRef.current = calculatedIndex;
            setCurrentIndex(calculatedIndex);
          }
        }
      }

      animFrameIdRef.current = requestAnimationFrame(tick);
    };

    animFrameIdRef.current = requestAnimationFrame(tick);

    return () => {
      isMounted = false;
      if (animFrameIdRef.current) {
        cancelAnimationFrame(animFrameIdRef.current);
      }
    };
  }, [enabled, itemCount]);

  // Compute horizontal target translation based on vertical scroll offset
  const handleScroll = useCallback(() => {
    if (!enabled || !containerRef.current) return;
    const containerEl = containerRef.current;
    const rect = containerEl.getBoundingClientRect();
    const windowH = window.innerHeight;
    const totalVerticalTravel = containerEl.offsetHeight - windowH;

    if (totalVerticalTravel <= 0) {
      targetXRef.current = 0;
      setIsPinned(false);
      return;
    }

    // Distance the container has scrolled from viewport top
    const scrolledFromTop = -rect.top;
    const rawProgress = scrolledFromTop / totalVerticalTravel;
    const progress = Math.min(1, Math.max(0, rawProgress));

    const currentTargetX = progress * maxScrollXRef.current;
    targetXRef.current = currentTargetX;

    const pinnedNow = rect.top <= 2 && rect.bottom >= windowH - 2;
    setIsPinned(pinnedNow);
  }, [enabled]);

  // Touch Drag & Swipe Support on Mobile Screens
  useEffect(() => {
    if (!enabled) return;
    const trackEl = trackRef.current;
    if (!trackEl) return;

    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      touchStartRef.current = {
        x: touch.clientX,
        y: touch.clientY,
        time: Date.now(),
        startTargetX: targetXRef.current,
        isHorizontalSwipe: false
      };
    };

    const onTouchMove = (e) => {
      if (e.touches.length !== 1) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartRef.current.x;
      const deltaY = touch.clientY - touchStartRef.current.y;

      // Disambiguate gesture: check if intentional horizontal swipe
      if (!touchStartRef.current.isHorizontalSwipe) {
        if (Math.abs(deltaX) > 8 && Math.abs(deltaX) > Math.abs(deltaY) * 1.2) {
          touchStartRef.current.isHorizontalSwipe = true;
        }
      }

      if (touchStartRef.current.isHorizontalSwipe) {
        // User is swiping horizontally on the carousel
        const newTarget = touchStartRef.current.startTargetX - (deltaX * 1.25);
        const clampedTarget = Math.max(0, Math.min(maxScrollXRef.current, newTarget));
        targetXRef.current = clampedTarget;

        // If stage is pinned in viewport, synchronize window scroll position so everything stays in sync
        if (containerRef.current && maxScrollXRef.current > 0) {
          const containerEl = containerRef.current;
          const rect = containerEl.getBoundingClientRect();
          if (rect.top <= 10 && rect.bottom >= window.innerHeight - 10) {
            const ratio = clampedTarget / maxScrollXRef.current;
            const totalVerticalTravel = containerEl.offsetHeight - window.innerHeight;
            const containerTop = window.scrollY + rect.top;
            const desiredScrollY = containerTop + (ratio * totalVerticalTravel);
            window.scrollTo({ top: desiredScrollY, behavior: 'auto' });
          }
        }
      }
    };

    trackEl.addEventListener('touchstart', onTouchStart, { passive: true });
    trackEl.addEventListener('touchmove', onTouchMove, { passive: true });

    return () => {
      trackEl.removeEventListener('touchstart', onTouchStart);
      trackEl.removeEventListener('touchmove', onTouchMove);
    };
  }, [enabled]);

  // Sync with scroll, resize and track dimensions
  useEffect(() => {
    if (!enabled) {
      setContainerHeight('auto');
      targetXRef.current = 0;
      currentXRef.current = 0;
      setScrollProgress(0);
      setTranslateX(0);
      return;
    }

    // Initial measurement
    const rafId = requestAnimationFrame(() => {
      updateDimensions();
      handleScroll();
    });

    const onScroll = () => {
      handleScroll();
    };

    const onResize = () => {
      updateDimensions();
      handleScroll();
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });

    // Observe size changes of the track (e.g. when filter changes or images load)
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined' && trackRef.current) {
      resizeObserver = new ResizeObserver(() => {
        updateDimensions();
        handleScroll();
      });
      resizeObserver.observe(trackRef.current);
    }

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (resizeObserver) resizeObserver.disconnect();
    };
  }, [enabled, updateDimensions, handleScroll]);

  // Programmatically jump or glide to a specific item index using Lenis momentum or smooth window scroll
  const scrollToItem = useCallback((targetIndex) => {
    if (!containerRef.current || itemCount <= 1) return;
    const clampedIndex = Math.max(0, Math.min(itemCount - 1, targetIndex));
    const targetProgress = clampedIndex / (itemCount - 1);

    const containerEl = containerRef.current;
    const containerTop = window.scrollY + containerEl.getBoundingClientRect().top;
    const totalVerticalTravel = containerEl.offsetHeight - window.innerHeight;
    const targetScrollY = containerTop + (targetProgress * totalVerticalTravel);

    if (window.__lenis) {
      window.__lenis.scrollTo(targetScrollY, {
        duration: 1.1,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
      });
    } else {
      window.scrollTo({
        top: targetScrollY,
        behavior: 'smooth'
      });
    }
  }, [itemCount]);

  const scrollToNext = useCallback(() => {
    scrollToItem(currentIndex + 1);
  }, [currentIndex, scrollToItem]);

  const scrollToPrev = useCallback(() => {
    scrollToItem(currentIndex - 1);
  }, [currentIndex, scrollToItem]);

  return {
    containerRef,
    trackRef,
    containerHeight,
    translateX,
    scrollProgress,
    currentIndex,
    isPinned,
    scrollToNext,
    scrollToPrev,
    scrollToItem,
    updateDimensions
  };
}
