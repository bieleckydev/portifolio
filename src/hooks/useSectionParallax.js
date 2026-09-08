import { useEffect, useRef } from 'react';

/**
 * High-performance parallax hook for background watermarks.
 * Uses continuous RAF LERP to ensure buttery-smooth floating momentum.
 */
export function useSectionParallax(speed = 0.2) {
  const sectionRef = useRef(null);
  const watermarkRef = useRef(null);
  const currentYRef = useRef(0);
  const targetYRef = useRef(0);

  useEffect(() => {
    let animFrameId;
    let isMounted = true;
    const lerpDamping = 0.08;

    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if within or near viewport
      if (rect.top < windowHeight + 100 && rect.bottom > -100) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        targetYRef.current = (progress - 0.5) * (160 * speed);
      }
    };

    const tick = () => {
      if (!isMounted) return;

      const diff = targetYRef.current - currentYRef.current;
      if (Math.abs(diff) > 0.02) {
        currentYRef.current += diff * lerpDamping;
      } else {
        currentYRef.current = targetYRef.current;
      }

      if (watermarkRef.current) {
        watermarkRef.current.style.transform = `translate3d(0, ${currentYRef.current.toFixed(2)}px, 0)`;
      }

      animFrameId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    animFrameId = requestAnimationFrame(tick);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      if (animFrameId) cancelAnimationFrame(animFrameId);
    };
  }, [speed]);

  return { sectionRef, watermarkRef };
}
