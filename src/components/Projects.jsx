import React, { useState, useMemo } from 'react';
import { usePinnedHorizontalScroll } from '../hooks/usePinnedHorizontalScroll';
import { useLanguage } from '../context/LanguageContext';
import ProjectCard from './ProjectCard';
import GitHubActivity from './GitHubActivity';
import { getLocalizedProjects } from '../data/projects';

export default function Projects() {
  const { t } = useLanguage();
  const [selectedFilter, setSelectedFilter] = useState('ALL');
  const [viewMode, setViewMode] = useState('horizontal'); // 'horizontal' or 'grid'
  const [githubActivityData, setGithubActivityData] = useState(null);

  const allProjects = useMemo(() => getLocalizedProjects(t.projects?.items), [t.projects]);

  const isProjectInFilter = (project, filter) => {
    if (filter === 'ALL') return true;
    return (project.categories || []).includes(filter);
  };

  // Filtered projects list
  const filteredProjects = useMemo(() => {
    if (selectedFilter === 'ALL') return allProjects;
    return allProjects.filter((p) => isProjectInFilter(p, selectedFilter));
  }, [selectedFilter, allProjects]);

  // Pinned horizontal scroll hook: locks section and translates track on mouse wheel
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
    itemCount: filteredProjects.length,
    speedFactor: 1,
    enabled: viewMode === 'horizontal'
  });

  // Filter counts for accurate badges
  const counts = useMemo(() => {
    return {
      ALL: allProjects.length,
      JAVA: allProjects.filter((p) => isProjectInFilter(p, 'JAVA')).length,
      POS: allProjects.filter((p) => isProjectInFilter(p, 'POS')).length,
      FRONTEND: allProjects.filter((p) => isProjectInFilter(p, 'FRONTEND')).length
    };
  }, [allProjects]);

  return (
    <>
      <section
        id="outros-projetos"
        ref={containerRef}
        className={`section projects ${viewMode === 'horizontal' ? 'pinned-scroll-wrapper' : ''}`}
        style={viewMode === 'horizontal' ? { height: containerHeight, padding: 0 } : {}}
      >
        {viewMode === 'horizontal' ? (
          /* =======================================================
             MODO PINNED: SCROLL DO MOUSE CONTINUA NA HORIZONTAL
             ======================================================= */
          <div className="pinned-sticky-stage" id="projects-pinned-stage">
            {/* Véus Sutis de Transição Atmosférica Superior e Inferior */}
            <div className="pinned-stage-veil-top" aria-hidden="true"></div>
            <div className="pinned-stage-veil-bottom" aria-hidden="true"></div>

            {/* Header Fixo no Topo */}
            <div className="pinned-stage-header">
              <div className="pinned-stage-titles">
                <h2 className="pinned-stage-h2">{t.projects.title}</h2>
              </div>

              <div className="pinned-stage-controls">
                <div className="pinned-mouse-hud" title={t.projects.scrollHint}>
                  <i className="fas fa-arrow-down-up-across-line pinned-mouse-icon"></i>
                  <span className="hud-desktop-label">{t.projects.scrollHint || 'Scroll do mouse desliza na horizontal'}</span>
                  <span className="hud-mobile-label">Deslize ou role</span>
                </div>


                <button
                  type="button"
                  className="pinned-mode-toggle"
                  onClick={() => setViewMode('grid')}
                  title="Mudar para visualização em grade estática"
                >
                  <i className="fas fa-table-cells-large"></i>
                  <span>{t.projects.viewGrid || 'Grade'}</span>
                </button>
              </div>
            </div>

            {/* Barra de Filtros de Categoria */}
            <div className="pinned-filters-bar" role="tablist" aria-label="Filtro de Projetos">
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === 'ALL'}
                className={`project-filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('ALL')}
              >
                <i className="fas fa-cubes"></i> {t.projects.filterAll || 'Todos'} ({counts.ALL})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === 'JAVA'}
                className={`project-filter-btn ${selectedFilter === 'JAVA' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('JAVA')}
              >
                <i className="fab fa-java"></i> {t.projects.filterJava || 'Java'} ({counts.JAVA})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === 'POS'}
                className={`project-filter-btn ${selectedFilter === 'POS' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('POS')}
              >
                <i className="fas fa-cash-register"></i> {t.projects.filterPos || 'POS'} ({counts.POS})
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={selectedFilter === 'FRONTEND'}
                className={`project-filter-btn ${selectedFilter === 'FRONTEND' ? 'active' : ''}`}
                onClick={() => setSelectedFilter('FRONTEND')}
              >
                <i className="fas fa-mobile-alt"></i> {t.projects.filterFrontend || 'Frontend'} ({counts.FRONTEND})
              </button>
            </div>

            {/* Viewport da Pista Horizontal Deslizada pelo Mouse Wheel */}
            <div className="pinned-stage-viewport" id="projects-horizontal-viewport">
              {/* Vinhetas Laterais com Desfoque Suave e Cross-Fade */}
              <div
                className="pinned-edge-vignette pinned-edge-vignette-left"
                style={{ opacity: scrollProgress > 1 ? String(Math.min(1, scrollProgress / 8).toFixed(2)) : '0' }}
                aria-hidden="true"
              ></div>

              <div
                ref={trackRef}
                className="pinned-stage-track"
                id="projects-pinned-track"
              >
                {filteredProjects.map((project, idx) => {
                  const isFocused = idx === currentIndex;
                  const distance = Math.abs(idx - currentIndex);
                  // Virtual window: cards within distance <= 2 are in or near viewport buffer
                  const isNearViewport = distance <= 2;
                  const isPriority = idx === 0 || idx === 1;
                  return (
                    <div
                      key={project.id}
                      className={`pinned-card-item ${isFocused ? 'is-focused' : 'is-peripheral'}`}
                      data-distance={distance}
                    >
                      <ProjectCard
                        project={project}
                        t={t}
                        idx={idx}
                        repoActivity={githubActivityData?.byProject?.[project.id]}
                        isNearViewport={isNearViewport}
                        isPriority={isPriority}
                        viewMode="horizontal"
                      />
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

            {/* Rodapé com Scrubber de Progresso e Setas Opcionais */}
            <div className="pinned-stage-footer">
              <div className="pinned-progress-scrubber" title="Progresso da navegação horizontal">
                <div
                  className="pinned-progress-fill"
                  style={{ width: `${Math.max(5, scrollProgress)}%` }}
                ></div>
              </div>

              <div className="pinned-footer-meta">

                <div className="pinned-nav-arrows">
                  <button
                    type="button"
                    className="pinned-arrow-btn"
                    onClick={scrollToPrev}
                    aria-label={t.projects?.prevBtn || 'Anterior'}
                    title="Avançar para projeto anterior"
                  >
                    <i className="fas fa-chevron-left"></i>
                  </button>
                  <button
                    type="button"
                    className="pinned-arrow-btn"
                    onClick={scrollToNext}
                    aria-label={t.projects?.nextBtn || 'Próximo'}
                    title="Avançar para próximo projeto"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* =======================================================
             MODO GRADE CLÁSSICO VERTICAL (QUANDO SELECIONADO)
             ======================================================= */
          <div className="container" style={{ position: 'relative', zIndex: 1, padding: '4rem 1.5rem' }}>
            <div className="section-header reveal">
              <h2 className="section-title" id="projects-heading">
                {t.projects.title}
              </h2>
              {t.projects.subtitle && (
                <p className="section-subtitle projects-subtitle">
                  {t.projects.subtitle}
                </p>
              )}

              <div className="project-filter-nav" role="tablist">
                <button
                  type="button"
                  className={`project-filter-btn ${selectedFilter === 'ALL' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('ALL')}
                >
                  <i className="fas fa-cubes"></i> {t.projects.filterAll || 'Todos'} ({counts.ALL})
                </button>
                <button
                  type="button"
                  className={`project-filter-btn ${selectedFilter === 'JAVA' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('JAVA')}
                >
                  <i className="fab fa-java"></i> {t.projects.filterJava || 'Java'} ({counts.JAVA})
                </button>
                <button
                  type="button"
                  className={`project-filter-btn ${selectedFilter === 'POS' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('POS')}
                >
                  <i className="fas fa-cash-register"></i> {t.projects.filterPos || 'POS'} ({counts.POS})
                </button>
                <button
                  type="button"
                  className={`project-filter-btn ${selectedFilter === 'FRONTEND' ? 'active' : ''}`}
                  onClick={() => setSelectedFilter('FRONTEND')}
                >
                  <i className="fas fa-mobile-alt"></i> {t.projects.filterFrontend || 'Frontend'} ({counts.FRONTEND})
                </button>
              </div>

              <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'center' }}>
                <button
                  type="button"
                  className="pinned-mode-toggle active"
                  onClick={() => setViewMode('horizontal')}
                >
                  <i className="fas fa-arrows-left-right"></i>
                  <span>Voltar para Scroll Horizontal</span>
                </button>
              </div>
            </div>

            <div className="projects-grid" id="projects-grid-container">
              {filteredProjects.map((project, idx) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  t={t}
                  idx={idx}
                  repoActivity={githubActivityData?.byProject?.[project.id]}
                />
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Dynamic GitHub Repositories Activity Console Logo Abaixo dos Projetos */}
      <section className="section github-telemetry-section" style={{ paddingTop: '2rem' }}>
        <div className="container">
          <GitHubActivity
            projects={allProjects}
            onDataLoaded={setGithubActivityData}
          />
        </div>
      </section>
    </>
  );
}

