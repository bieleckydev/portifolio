import React, { useState, useEffect, useCallback, useMemo } from 'react';
import {
  fetchProjectsGitHubActivity,
  formatRelativeTime,
  formatCommitDate
} from '../services/githubService';
import { useLanguage } from '../context/LanguageContext';

// Language indicator colors matching standard GitHub accents
const LANGUAGE_COLORS = {
  Java: '#b07219',
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Python: '#3572A5'
};

export default function GitHubActivity({ projects = [], onDataLoaded }) {
  const { t, language } = useLanguage();
  const [activity, setActivity] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [filterLang, setFilterLang] = useState('ALL');

  const tActivity = useMemo(() => {
    return (
      t.projects?.githubActivity || {
        badge: 'Telemetria GitHub',
        title: 'Atividade Recente nos Repositórios',
        subtitle:
          'Sincronização em tempo real via GitHub REST API com contagem de estrelas, forks e histórico do último commit.',
        liveStatus: 'API Sincronizada',
        reposTracked: 'Repositórios Conectados',
        totalStars: 'Estrelas no GitHub',
        totalForks: 'Forks Registrados',
        latestCommit: 'Último Commit Global',
        refreshBtn: 'Atualizar Dados',
        refreshing: 'Sincronizando...',
        viewRepo: 'Repositório',
        viewCommit: 'Ver Commit',
        lastCommitLabel: 'Último Commit',
        starsLabel: 'Estrelas',
        branchLabel: 'Branch',
        privateBadge: 'Repositório Privado',
        syncedJustNow: 'Sincronizado agora mesmo',
        cachedNotice: 'Cache local ativo para economia de requisições'
      }
    );
  }, [t.projects]);

  const loadData = useCallback(
    async (force = false) => {
      if (force) {
        setIsRefreshing(true);
      } else {
        setLoading(true);
      }

      try {
        const data = await fetchProjectsGitHubActivity(projects, force);
        setActivity(data);
        if (onDataLoaded) {
          onDataLoaded(data);
        }
      } catch (err) {
        console.error('Failed to load GitHub activity', err);
      } finally {
        setLoading(false);
        setIsRefreshing(false);
      }
    },
    [projects, onDataLoaded]
  );

  useEffect(() => {
    loadData(false);
  }, [loadData]);

  // Filter items by language
  const displayedItems = useMemo(() => {
    if (!activity || !activity.items) return [];
    if (filterLang === 'ALL') return activity.items;
    return activity.items.filter((item) => item.language === filterLang);
  }, [activity, filterLang]);

  // Unique languages for filter tabs
  const availableLanguages = useMemo(() => {
    if (!activity || !activity.items) return [];
    const langs = new Set();
    activity.items.forEach((item) => {
      if (item.language) langs.add(item.language);
    });
    return Array.from(langs);
  }, [activity]);

  return (
    <div className="github-activity-container" id="github-activity-section">
      {/* Top Header & Telemetry Status */}
      <div className="github-activity-header">
        <div className="github-header-info">
          <div className="github-badge-row">
            <span className="github-live-badge">
              <span className="live-pulse-dot" aria-hidden="true"></span>
              {tActivity.liveStatus}
            </span>
            <span className="github-cache-pill" title={tActivity.cachedNotice}>
              <i className="fas fa-shield-halved"></i> REST v3
            </span>
          </div>
          <h3 className="github-activity-title">
            <i className="fab fa-github github-title-icon"></i>
            {tActivity.title}
          </h3>
          <p className="github-activity-subtitle">{tActivity.subtitle}</p>
        </div>

        <button
          type="button"
          onClick={() => loadData(true)}
          disabled={loading || isRefreshing}
          className={`github-refresh-btn ${isRefreshing ? 'is-spinning' : ''}`}
          id="btn-refresh-github-activity"
          aria-label={tActivity.refreshBtn}
        >
          <i
            className={`fas fa-arrows-rotate ${isRefreshing ? 'fa-spin' : ''}`}
          ></i>
          <span>{isRefreshing ? tActivity.refreshing : tActivity.refreshBtn}</span>
        </button>
      </div>

      {/* KPI Stats Ribbon */}
      <div className="github-stats-hud">
        <div className="github-hud-card">
          <div className="hud-icon-wrap hud-icon-repos">
            <i className="fas fa-code-branch"></i>
          </div>
          <div className="hud-content">
            <span className="hud-value">
              {activity ? activity.reposTrackedCount : 6}
            </span>
            <span className="hud-label">{tActivity.reposTracked}</span>
          </div>
        </div>

        <div className="github-hud-card">
          <div className="hud-icon-wrap hud-icon-stars">
            <i className="fas fa-star"></i>
          </div>
          <div className="hud-content">
            <span className="hud-value">
              {activity ? activity.totalStars : 0}
            </span>
            <span className="hud-label">{tActivity.totalStars}</span>
          </div>
        </div>

        <div className="github-hud-card">
          <div className="hud-icon-wrap hud-icon-forks">
            <i className="fas fa-code-fork"></i>
          </div>
          <div className="hud-content">
            <span className="hud-value">
              {activity ? activity.totalForks : 0}
            </span>
            <span className="hud-label">{tActivity.totalForks}</span>
          </div>
        </div>

        <div className="github-hud-card hud-card-commit">
          <div className="hud-icon-wrap hud-icon-clock">
            <i className="fas fa-clock-rotate-left"></i>
          </div>
          <div className="hud-content">
            <span className="hud-value hud-commit-time">
              {activity?.latestOverallCommit?.date
                ? formatRelativeTime(activity.latestOverallCommit.date, language)
                : 'Recente'}
            </span>
            <span className="hud-label">{tActivity.latestCommit}</span>
          </div>
        </div>
      </div>

      {/* Language Filter Tabs */}
      {availableLanguages.length > 0 && (
        <div className="github-lang-filter-bar">
          <button
            type="button"
            className={`github-filter-chip ${filterLang === 'ALL' ? 'active' : ''}`}
            onClick={() => setFilterLang('ALL')}
          >
            Todos ({activity?.items?.length || 0})
          </button>
          {availableLanguages.map((lang) => (
            <button
              key={lang}
              type="button"
              className={`github-filter-chip ${filterLang === lang ? 'active' : ''}`}
              onClick={() => setFilterLang(lang)}
            >
              <span
                className="chip-lang-dot"
                style={{ backgroundColor: LANGUAGE_COLORS[lang] || '#8b93a0' }}
              ></span>
              {lang} (
              {activity?.items?.filter((i) => i.language === lang).length || 0})
            </button>
          ))}
        </div>
      )}

      {/* Loading Skeleton */}
      {loading && !activity && (
        <div className="github-cards-grid">
          {[1, 2, 3, 4, 5, 6].map((idx) => (
            <div key={idx} className="github-card github-skeleton-card">
              <div className="skeleton-line skeleton-title"></div>
              <div className="skeleton-line skeleton-pills"></div>
              <div className="skeleton-line skeleton-desc"></div>
              <div className="skeleton-line skeleton-footer"></div>
            </div>
          ))}
        </div>
      )}

      {/* Repositories Activity Grid */}
      {activity && (
        <div className="github-cards-grid">
          {displayedItems.map((item) => {
            const hasCommit = Boolean(item.lastCommit && item.lastCommit.date);
            const commitDate = item.lastCommit?.date;
            const langColor = LANGUAGE_COLORS[item.language] || '#8b93a0';

            return (
              <div
                key={item.fullName}
                className={`github-card ${item.isPrivate ? 'github-card-private' : ''}`}
                id={`github-repo-${item.repo}`}
              >
                {/* Top Info Row */}
                <div className="github-card-header">
                  <div className="github-card-title-group">
                    <a
                      href={item.htmlUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="github-repo-link"
                      title={item.fullName}
                    >
                      <i className="fab fa-github"></i>
                      <span className="github-repo-name">{item.fullName}</span>
                    </a>
                    {item.projectTitle && (
                      <span className="github-project-ref">
                        <i className="fas fa-folder"></i> {item.projectTitle}
                      </span>
                    )}
                  </div>

                  {item.isPrivate ? (
                    <span className="github-status-pill pill-private" title={tActivity.privateBadge}>
                      <i className="fas fa-lock"></i> {tActivity.privateBadge}
                    </span>
                  ) : (
                    <span className="github-status-pill pill-active">
                      <span className="status-mini-dot"></span> Online
                    </span>
                  )}
                </div>

                {/* Metrics Pill Row: Stars, Forks, Language, Branch */}
                <div className="github-card-metrics">
                  <div className="github-metric-pill" title={`${item.stars} ${tActivity.starsLabel}`}>
                    <i className="fas fa-star text-gold"></i>
                    <span>{item.stars}</span>
                  </div>

                  <div className="github-metric-pill" title={`${item.forks} forks`}>
                    <i className="fas fa-code-fork"></i>
                    <span>{item.forks}</span>
                  </div>

                  {item.language && (
                    <div className="github-metric-pill github-lang-pill">
                      <span
                        className="metric-lang-dot"
                        style={{ backgroundColor: langColor }}
                      ></span>
                      <span>{item.language}</span>
                    </div>
                  )}

                  {item.defaultBranch && (
                    <div className="github-metric-pill github-branch-pill">
                      <i className="fas fa-code-branch"></i>
                      <span>{item.defaultBranch}</span>
                    </div>
                  )}
                </div>

                {/* Latest Commit Details Box */}
                <div className="github-commit-box">
                  <div className="commit-box-header">
                    <span className="commit-box-label">
                      <i className="fas fa-clock"></i> {tActivity.lastCommitLabel}
                    </span>
                    {hasCommit && (
                      <span className="commit-relative-badge">
                        {formatRelativeTime(commitDate, language)}
                      </span>
                    )}
                  </div>

                  {hasCommit ? (
                    <>
                      <p
                        className="commit-message-text"
                        title={item.lastCommit.message}
                      >
                        <i className="fas fa-code-commit commit-msg-icon"></i>
                        <span>{item.lastCommit.message}</span>
                      </p>

                      <div className="commit-meta-footer">
                        <span
                          className="commit-exact-date"
                          title={new Date(commitDate).toLocaleString()}
                        >
                          <i className="fas fa-calendar-alt"></i>
                          {formatCommitDate(commitDate, language)}
                        </span>

                        {item.lastCommit.sha && (
                          <a
                            href={item.lastCommit.url}
                            target="_blank"
                            rel="noreferrer"
                            className="commit-sha-badge"
                            title={tActivity.viewCommit}
                          >
                            <code>#{item.lastCommit.sha}</code>
                            <i className="fas fa-arrow-up-right-from-square"></i>
                          </a>
                        )}
                      </div>
                    </>
                  ) : (
                    <p className="commit-message-text text-muted">
                      {item.isPrivate
                        ? 'Repositório corporativo privado • Histórico sob controle de acesso.'
                        : 'Repositório ativo sem commits recentes indexados.'}
                    </p>
                  )}
                </div>

                {/* Direct Action Link */}
                <div className="github-card-actions">
                  <a
                    href={item.htmlUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="github-action-link"
                    id={`link-repo-${item.repo}`}
                  >
                    <span>{tActivity.viewRepo}</span>
                    <i className="fas fa-arrow-right"></i>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
