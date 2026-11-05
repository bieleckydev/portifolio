import React, { useState, useEffect, useRef } from 'react';
import { usePinnedHorizontalScroll } from '../hooks/usePinnedHorizontalScroll';
import { useLanguage } from '../context/LanguageContext';

export default function Experience() {
  const { t } = useLanguage();
  const timelineRef = useRef(null);
  const [verticalProgress, setVerticalProgress] = useState(0);
  const [viewMode, setViewMode] = useState('horizontal'); // 'horizontal' or 'vertical'

  const experiences = t.experience.items;

  // Pinned horizontal scroll hook: page pins and vertical mouse scroll slides track horizontally
  const {
    containerRef,
    trackRef,
    containerHeight,
    translateX,
    scrollProgress,
    currentIndex,
    scrollToNext,
    scrollToPrev
  } = usePinnedHorizontalScroll({
    itemCount: experiences.length,
    speedFactor: 1.1,
    enabled: viewMode === 'horizontal'
  });

  // Vertical fallback progress tracker
  useEffect(() => {
    if (viewMode !== 'vertical') return;

    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.7;
      const end = windowHeight * 0.2;
      const total = rect.height;
      const current = start - rect.top;

      let progress = (current / (total + (start - end))) * 100;
      progress = Math.max(0, Math.min(100, progress));
      setVerticalProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [viewMode]);

  return (
    <section
      id="experiencia"
      ref={containerRef}
      className={`section experience ${viewMode === 'horizontal' ? 'pinned-scroll-wrapper' : ''}`}
      style={viewMode === 'horizontal' ? { height: containerHeight, padding: 0 } : {}}
    >
      {viewMode === 'horizontal' ? (
        /* =======================================================
           MODO PINNED: SCROLL DO MOUSE DESLIZA A CARREIRA HORIZONTALMENTE
           ======================================================= */
        <div className="pinned-sticky-stage" id="experience-pinned-stage">
          {/* Véus Sutis de Transição Atmosférica Superior e Inferior */}
          <div className="pinned-stage-veil-top" aria-hidden="true"></div>
          <div className="pinned-stage-veil-bottom" aria-hidden="true"></div>

          {/* Header Fixo no Topo */}
          <div className="pinned-stage-header">
            <div className="pinned-stage-titles">
              <h2 className="pinned-stage-h2">{t.experience.title}</h2>
            </div>

            <div className="pinned-stage-controls">
              <div className="pinned-mouse-hud" title={t.experience.scrollHint}>
                <i className="fas fa-arrow-down-up-across-line pinned-mouse-icon"></i>
                <span className="hud-desktop-label">{t.experience.scrollHint || 'Scroll do mouse desliza na horizontal'}</span>
                <span className="hud-mobile-label">Deslize ou role</span>
              </div>

              <div className="pinned-counter-badge" id="experience-counter">
                <span className="current">
                  {String(Math.min(experiences.length, currentIndex + 1)).padStart(2, '0')}
                </span>{' '}
                / <span>{String(experiences.length).padStart(2, '0')}</span>
              </div>

              <button
                type="button"
                className="pinned-mode-toggle"
                onClick={() => setViewMode('vertical')}
                title="Mudar para visualização em lista vertical"
              >
                <i className="fas fa-bars-staggered"></i>
                <span>{t.experience.viewVertical || 'Lista'}</span>
              </button>
            </div>
          </div>

          {/* Viewport da Pista Horizontal de Experiência */}
          <div className="pinned-stage-viewport" id="experience-horizontal-viewport">
            {/* Vinhetas Laterais com Desfoque Suave e Cross-Fade */}
            <div
              className="pinned-edge-vignette pinned-edge-vignette-left"
              style={{ opacity: scrollProgress > 1 ? String(Math.min(1, scrollProgress / 8).toFixed(2)) : '0' }}
              aria-hidden="true"
            ></div>

            <div
              ref={trackRef}
              className="pinned-stage-track pinned-timeline-track"
              id="experience-pinned-track"
            >
              {/* Cabo Dinâmico Conector do Circuito */}
              <div className="pinned-circuit-cable" aria-hidden="true">
                <div
                  className="pinned-circuit-cable-fill"
                  style={{ width: `${Math.max(5, scrollProgress)}%` }}
                ></div>
              </div>

              {experiences.map((exp, index) => {
                const isFocused = index === currentIndex;
                const distance = Math.abs(index - currentIndex);
                return (
                  <div
                    key={exp.id}
                    className={`pinned-exp-card ${isFocused ? 'is-focused' : 'is-peripheral'}`}
                    id={`pinned-exp-${exp.id}`}
                    data-distance={distance}
                  >
                    <div className="pinned-exp-node" aria-hidden="true">
                      <div className="pinned-exp-node-dot"></div>
                    </div>

                    <div className="pinned-exp-header">
                      <span className="pinned-exp-index">
                        0{index + 1} // CARREIRA
                      </span>
                      <span className="pinned-exp-date">{exp.date}</span>
                    </div>

                    <h3 className="pinned-exp-title">{exp.title}</h3>
                    <h4 className="pinned-exp-company">{exp.company}</h4>

                    <ul className="pinned-exp-details">
                      {exp.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>

                    {exp.tags && exp.tags.length > 0 && (
                      <div className="skill-tags mt-2">
                        {exp.tags.map((tag, idx) => (
                          <span key={idx} className="tag">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <div
              className="pinned-edge-vignette pinned-edge-vignette-right"
              style={{ opacity: scrollProgress < 99 ? String(Math.min(1, (100 - scrollProgress) / 8).toFixed(2)) : '0' }}
              aria-hidden="true"
            ></div>
          </div>

          {/* Rodapé com Barra de Progresso e Setas */}
          <div className="pinned-stage-footer">
            <div className="pinned-progress-scrubber" title="Progresso da trajetória profissional">
              <div
                className="pinned-progress-fill"
                style={{ width: `${Math.max(5, scrollProgress)}%` }}
              ></div>
            </div>

            <div className="pinned-footer-meta">
              <span>
                {Math.round(scrollProgress)}% // TRAJETÓRIA PROFISSIONAL
              </span>

              <div className="pinned-nav-arrows">
                <button
                  type="button"
                  className="pinned-arrow-btn"
                  onClick={scrollToPrev}
                  aria-label="Anterior"
                  title="Marco anterior"
                >
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button
                  type="button"
                  className="pinned-arrow-btn"
                  onClick={scrollToNext}
                  aria-label="Próximo"
                  title="Próximo marco"
                >
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* =======================================================
           MODO LISTA CLÁSSICA VERTICAL
           ======================================================= */
        <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem' }}>
          <div className="section-header reveal">
            <h2 className="section-title" id="experience-heading">
              {t.experience.title}
            </h2>

            <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
              <button
                type="button"
                className="pinned-mode-toggle active"
                onClick={() => setViewMode('horizontal')}
              >
                <i className="fas fa-arrows-left-right"></i>
                <span>Voltar para Trilha Horizontal</span>
              </button>
            </div>
          </div>

          <div className="timeline reveal" id="experience-timeline" ref={timelineRef}>
            {/* Linha Dinâmica de Progresso de Scroll */}
            <div
              className="timeline-progress-line"
              style={{ height: `${verticalProgress}%` }}
              aria-hidden="true"
            ></div>

            {experiences.map((exp, index) => {
              const isReached = verticalProgress > (index / experiences.length) * 80;
              return (
                <div
                  key={exp.id}
                  id={exp.id}
                  className={`timeline-item minimal-card ${isReached ? 'timeline-active' : ''}`}
                >
                  <div className="timeline-dot"></div>
                  <div className="timeline-date">{exp.date}</div>
                  <h3 className="timeline-title">{exp.title}</h3>
                  <h4 className="timeline-company">{exp.company}</h4>
                  <ul className="timeline-details">
                    {exp.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                  {exp.tags.length > 0 && (
                    <div className="skill-tags mt-2">
                      {exp.tags.map((tag, idx) => (
                        <span key={idx} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

