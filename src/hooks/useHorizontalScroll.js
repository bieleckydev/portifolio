import { useRef, useState, useEffect, useCallback } from 'react';

export function useHorizontalScroll(itemCount = 0) {
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Drag state
  const dragInfo = useRef({
    startX: 0,
    scrollLeft: 0,
    isDown: false,
    moved: false
  });

  const updateScrollState = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;
    const maxScroll = Math.max(0, scrollWidth - clientWidth);

    const progress = maxScroll > 0 ? Math.min(100, Math.max(0, (scrollLeft / maxScroll) * 100)) : 0;
    setScrollProgress(progress);

    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < maxScroll - 10);

    if (itemCount > 0 && maxScroll > 0) {
      const approxItemWidth = scrollWidth / itemCount;
      const index = Math.min(itemCount - 1, Math.max(0, Math.round(scrollLeft / approxItemWidth)));
      setCurrentIndex(index);
    }
  }, [itemCount]);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    const onScroll = () => {
      updateScrollState();
    };

    // Wheel mapper: converts wheel deltaY to scrollLeft smoothly when hovering over the track
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
      const { scrollLeft, scrollWidth, clientWidth } = el;
      const maxScroll = scrollWidth - clientWidth;
      
      const atStart = scrollLeft <= 2 && e.deltaY < 0;
      const atEnd = scrollLeft >= maxScroll - 2 && e.deltaY > 0;

      if (!atStart && !atEnd && maxScroll > 0) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 0.95;
      }
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    el.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('resize', updateScrollState);
    updateScrollState();

    return () => {
      el.removeEventListener('scroll', onScroll);
      el.removeEventListener('wheel', onWheel);
      window.removeEventListener('resize', updateScrollState);
    };
  }, [updateScrollState]);

  // Drag handlers
  const handleMouseDown = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    dragInfo.current.isDown = true;
    dragInfo.current.startX = e.pageX - el.offsetLeft;
    dragInfo.current.scrollLeft = el.scrollLeft;
    dragInfo.current.moved = false;
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!dragInfo.current.isDown) return;
    e.preventDefault();
    const el = trackRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - dragInfo.current.startX) * 1.5;
    el.scrollLeft = dragInfo.current.scrollLeft - walk;
    dragInfo.current.moved = true;
  }, []);

  const handleMouseUpOrLeave = useCallback(() => {
    dragInfo.current.isDown = false;
    setIsDragging(false);
  }, []);

  const scrollNext = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollAmount = Math.max(340, el.clientWidth * 0.75);
    el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  }, []);

  const scrollPrev = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const scrollAmount = Math.max(340, el.clientWidth * 0.75);
    el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
  }, []);

  const handleScrubberClick = useCallback((e) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const percentage = Math.max(0, Math.min(1, clickX / rect.width));
    const maxScroll = el.scrollWidth - el.clientWidth;
    el.scrollTo({ left: percentage * maxScroll, behavior: 'smooth' });
  }, []);

  return {
    trackRef,
    scrollProgress,
    currentIndex,
    isDragging,
    canScrollLeft,
    canScrollRight,
    scrollNext,
    scrollPrev,
    handleMouseDown,
    handleMouseMove,
    handleMouseUpOrLeave,
    handleScrubberClick
  };
}
