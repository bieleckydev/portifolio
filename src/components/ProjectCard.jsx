import React, { useRef, useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { formatRelativeTime } from '../services/githubService';

export default function ProjectCard({
  project,
  t,
  idx,
  repoActivity,
  isNearViewport = true,
  isPriority = false,
  viewMode = 'horizontal'
}) {
  const cardRef = useRef(null);
  const imgContainerRef = useRef(null);
  const parallaxImgRef = useRef(null);
  const { language } = useLanguage();

  // Lazy-loading and virtualization states
  const [shouldLoadImg, setShouldLoadImg] = useState(() => Boolean(isPriority || isNearViewport));
  const [isImgLoaded, setIsImgLoaded] = useState(false);
  const [hasImgError, setHasImgError] = useState(false);

  // When proximity flips to near-viewport or priority, ensure image loading starts immediately
  useEffect(() => {
    if ((isPriority || isNearViewport) && !shouldLoadImg) {
      setShouldLoadImg(true);
    }
  }, [isPriority, isNearViewport, shouldLoadImg]);

  // Dual-strategy IntersectionObserver for robust horizontal and vertical viewport detection
  useEffect(() => {
    if (shouldLoadImg) return;
    const container = imgContainerRef.current;
    if (!container || typeof IntersectionObserver === 'undefined') {
      setShouldLoadImg(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShouldLoadImg(true);
            observer.disconnect();
          }
        });
      },
      {
        root: null,
        rootMargin: '200px 450px 200px 450px',
        threshold: 0.01
      }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, [shouldLoadImg]);

  // Optimized parallax calculation: only execute in vertical grid mode to avoid horizontal scrub layout thrashing
  useEffect(() => {
    if (viewMode === 'horizontal') return;

    let animId = null;

    const calculateParallax = () => {
      if (!cardRef.current || !parallaxImgRef.current) return;
      const rect = cardRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Only calculate if in or adjacent to viewport
      if (rect.top < windowHeight + 120 && rect.bottom > -120) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        const offset = (0.5 - progress) * 46;
        parallaxImgRef.current.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0) scale(1.04)`;
      }
    };

    const handleScroll = () => {
      if (!animId) {
        animId = window.requestAnimationFrame(() => {
          calculateParallax();
          animId = null;
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    calculateParallax();

    return () => {
      if (animId) window.cancelAnimationFrame(animId);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [viewMode]);

  // Subtle 3D tilt on desktop cursor hover without state re-renders
  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    // Micro tilt angle for clean elegance
    const rotateX = ((y - centerY) / centerY) * -3.5;
    const rotateY = ((x - centerX) / centerX) * 3.5;
    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px)`;
  };

  const handleMouseEnter = () => {
    if (parallaxImgRef.current) {
      parallaxImgRef.current.style.filter = 'brightness(1.06) contrast(1.03)';
    }
  };

  const handleMouseLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    }
    if (parallaxImgRef.current) {
      parallaxImgRef.current.style.filter = 'brightness(1) contrast(1)';
    }
  };

  return (
    <article
      ref={cardRef}
      id={project.id}
      className={`project-card ${project.featured ? 'project-featured' : ''}`}
      style={{
        animationDelay: `${(idx % 4) * 0.08}s`
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Visual Image Showcase with Smooth Scroll Parallax & Lazy Loading */}
      <div
        ref={imgContainerRef}
        className="project-img-container"
        id={`${project.id}-img-container`}
      >
        {project.img && !hasImgError ? (
          <div
            ref={parallaxImgRef}
            className="project-img-parallax-wrapper"
          >
            {/* Shimmering Skeleton Loader while awaiting load or fetching */}
            {!isImgLoaded && (
              <div className="project-img-skeleton" aria-hidden="true">
                <div className="skeleton-shimmer"></div>
                <i className={`${project.icon || 'fas fa-laptop-code'} skeleton-icon`}></i>
              </div>
            )}

            {shouldLoadImg && (
              <img
                src={project.img}
                alt={project.title}
                className={`project-img ${isImgLoaded ? 'is-loaded' : 'is-loading'}`}
                loading={isPriority ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={isPriority ? 'high' : 'auto'}
                onLoad={() => setIsImgLoaded(true)}
                onError={() => setHasImgError(true)}
                referrerPolicy="no-referrer"
              />
            )}
          </div>
        ) : (
          <div className="project-placeholder-wrapper">
            <i className={`${project.icon} project-placeholder-icon`}></i>
          </div>
        )}

        {/* Gradient Overlay for visual depth */}
        <div className="project-img-overlay" aria-hidden="true"></div>

        {/* Top Badges: Category & Status */}
        <div className="project-badges-header">
          {project.category && (
            <span className="project-category-badge">
              <i className="fas fa-folder-open"></i> {project.category}
            </span>
          )}
          {project.statusBadge && (
            <span className="project-status-pill">
              {project.statusBadge}
            </span>
          )}
        </div>
      </div>

      {/* Main Content Details */}
      <div className="project-content">
        <div className="project-title-row">
          <h3 className="project-title">{project.title}</h3>
          {project.featured && (
            <span
              className="featured-indicator"
              title="Projeto em Destaque Técnico"
            >
              <i className="fas fa-star"></i>
            </span>
          )}
        </div>

        {/* Architecture Note if available */}
        {project.architecture && (
          <div className="project-architecture-bar">
            <span className="arch-label">
              <i className="fas fa-layer-group"></i> {t.projects.architectureLabel || 'Arquitetura'}:
            </span>
            <span className="arch-text">{project.architecture}</span>
          </div>
        )}

        <p className="project-desc">{project.desc}</p>

        {/* Highlighted Key Technologies Section */}
        {project.keyTech && project.keyTech.length > 0 && (
          <div className="project-key-tech-box">
            <div className="key-tech-header">
              <i className="fas fa-microchip"></i>
              <span>{t.projects.keyTechLabel || 'Tecnologias-Chave'}</span>
            </div>
            <div className="key-tech-grid">
              {project.keyTech.map((tech, tIdx) => (
                <div key={tIdx} className="key-tech-pill" title={`${tech.name} • ${tech.role}`}>
                  <i className={`${tech.icon} key-tech-icon`}></i>
                  <div className="key-tech-info">
                    <span className="key-tech-name">{tech.name}</span>
                    <span className="key-tech-role">{tech.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Additional Tags */}
        <div className="skill-tags project-tags-row">
          {project.tags.map((tag, tIdx) => (
            <span key={tIdx} className="tag tag-subtle">
              #{tag}
            </span>
          ))}
        </div>

        {/* Live GitHub Telemetry Strip */}
        {project.codeUrl && (
          <div className="project-github-live-strip">
            <div className="strip-item strip-stars" title="GitHub Stars">
              <i className="fas fa-star text-gold"></i>
              <span>{repoActivity ? repoActivity.stars : 0}</span>
            </div>
            {repoActivity?.lastCommit?.date ? (
              <div
                className="strip-item strip-commit"
                title={
                  repoActivity.lastCommit.message
                    ? `Último commit: "${repoActivity.lastCommit.message}"`
                    : 'Último commit'
                }
              >
                <i className="fas fa-clock-rotate-left"></i>
                <span>{formatRelativeTime(repoActivity.lastCommit.date, language)}</span>
              </div>
            ) : (
              <div className="strip-item strip-commit">
                <i className="fas fa-code-branch"></i>
                <span>main</span>
              </div>
            )}
            {repoActivity?.lastCommit?.sha && (
              <a
                href={repoActivity.lastCommit.url}
                target="_blank"
                rel="noreferrer"
                className="strip-item strip-sha"
                title="Ver commit no GitHub"
              >
                <code>#{repoActivity.lastCommit.sha}</code>
              </a>
            )}
          </div>
        )}

        {/* Project Links / CTAs */}
        {(project.liveUrl || project.codeUrl) && (
          <div className="project-actions">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary btn-sm project-cta-primary"
                id={`btn-live-${project.id}`}
              >
                <i className="fas fa-arrow-up-right-from-square"></i> {t.projects.accessBtn}
              </a>
            )}
            {project.codeUrl && (
              <a
                href={project.codeUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-secondary btn-sm project-cta-code"
                id={`btn-code-${project.id}`}
              >
                <i className="fab fa-github"></i> {t.projects.codeBtn}
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}
