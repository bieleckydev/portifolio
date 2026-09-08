import React, { useEffect, useRef } from 'react';

export default function ScrollProgressHUD() {
  const barRef = useRef(null);

  useEffect(() => {
    let animId;
    let targetWidth = 0;
    let currentWidth = 0;
    let isMounted = true;

    const onScroll = () => {
      const winScroll = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      targetWidth = height > 0 ? (winScroll / height) * 100 : 0;
    };

    const tick = () => {
      if (!isMounted) return;
      const diff = targetWidth - currentWidth;
      if (Math.abs(diff) > 0.05) {
        currentWidth += diff * 0.15;
      } else {
        currentWidth = targetWidth;
      }

      if (barRef.current) {
        barRef.current.style.width = `${currentWidth.toFixed(2)}%`;
      }
      animId = requestAnimationFrame(tick);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    animId = requestAnimationFrame(tick);

    return () => {
      isMounted = false;
      window.removeEventListener('scroll', onScroll);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="scroll-progress-track" aria-hidden="true">
      <div
        ref={barRef}
        className="scroll-progress-bar"
        style={{ width: '0%' }}
      >
        <span className="scroll-progress-glow"></span>
      </div>
    </div>
  );
}
