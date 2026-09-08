import React, { useEffect, useRef } from 'react';

export default function VelocityMarquee({
  text = 'EDUARDO MOTA • ENGENHARIA DE SOFTWARE • DESENVOLVEDOR JAVA • HIGH PERFORMANCE COMPUTING •',
  reverse = false,
  speed = 1.2
}) {
  const containerRef = useRef(null);
  const posRef = useRef(0);
  const lastScrollY = useRef(0);
  const velocityRef = useRef(0);

  useEffect(() => {
    let animFrameId;

    const onScroll = () => {
      const currentScrollY = window.scrollY || document.documentElement.scrollTop;
      const delta = currentScrollY - lastScrollY.current;
      lastScrollY.current = currentScrollY;
      // Boost velocity on scroll
      velocityRef.current = delta * 0.15;
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    const animate = () => {
      // Natural base movement + scroll velocity
      const baseDirection = reverse ? 1 : -1;
      const currentSpeed = (baseDirection * speed) + velocityRef.current;
      
      // Decay velocity gradually back to 0
      velocityRef.current *= 0.92;

      posRef.current += currentSpeed;

      if (containerRef.current) {
        // Reset when it wraps half the track
        const wrapWidth = containerRef.current.scrollWidth / 2;
        if (posRef.current <= -wrapWidth) {
          posRef.current = 0;
        } else if (posRef.current >= 0 && reverse) {
          posRef.current = -wrapWidth;
        }
        containerRef.current.style.transform = `translate3d(${posRef.current}px, 0, 0)`;
      }

      animFrameId = requestAnimationFrame(animate);
    };

    animFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(animFrameId);
    };
  }, [reverse, speed]);

  const repeatedText = `${text} `.repeat(4);

  return (
    <div className="velocity-marquee-wrapper" aria-hidden="true">
      <div className="velocity-marquee-inner" ref={containerRef}>
        <span className="marquee-content">{repeatedText}</span>
        <span className="marquee-content">{repeatedText}</span>
      </div>
    </div>
  );
}
