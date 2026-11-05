import React, { useEffect, useMemo, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getLocalizedProjects, PROJECTS } from '../data/projects';
import { fetchProjectsGitHubActivity, formatRelativeTime } from '../services/githubService';
import './Projects.css';

// Só mostra "atualizado há…" com dado vindo da API agora, de repositório público
function useRepoUpdates() {
  const [byProject, setByProject] = useState({});

  useEffect(() => {
    let alive = true;
    fetchProjectsGitHubActivity(PROJECTS)
      .then((data) => alive && setByProject(data?.byProject || {}))
      .catch(() => {});
    return () => {
      alive = false;
    };
  }, []);

  return byProject;
}

function ProjectMedia({ project }) {
  if (!project.img) {
    return (
      <div className="work__plate">
        <span className="t-heading">{project.title}</span>
        <span className="t-small">{project.kind}</span>
      </div>
    );
  }
  return (
    <img
      className="work__img"
      src={project.img}
      alt={project.imageAlt}
      width={project.imgW}
      height={project.imgH}
      loading="lazy"
      decoding="async"
    />
  );
}

function ProjectLinks({ project, labels }) {
  if (!project.liveUrl && !project.codeUrl) {
    return <p className="t-small muted work__private">{labels.privateCode}</p>;
  }
  return (
    <p className="work__links">
      {project.liveUrl && (
        <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">
          {labels.live}
        </a>
      )}
      {project.codeUrl && (
        <a className="text-link" href={project.codeUrl} target="_blank" rel="noreferrer">
          {labels.code}
        </a>
      )}
    </p>
  );
}

export default function Projects() {
  const { t, language } = useLanguage();
  const w = t.projects;
  const items = useMemo(
    () => getLocalizedProjects(w.items).filter((p) => !p.caseStudy),
    [w.items]
  );
  const [activeId, setActiveId] = useState(items[0]?.id);
  const updates = useRepoUpdates();

  const updatedLabel = (project) => {
    const repo = updates[project.id];
    if (!repo || !repo.isLive || repo.isPrivate || !repo.lastCommit?.date) return null;
    return w.updated.replace('{when}', formatRelativeTime(repo.lastCommit.date, language));
  };

  return (
    <section id="outros-projetos" className="split work" data-section aria-labelledby="work-title">
      <div className="split__read work__read">
        <h2 id="work-title" className="t-lead work__title" data-reveal style={{ '--i': 0 }}>
          {w.title}
        </h2>

        <ul className="work__list" data-reveal style={{ '--i': 1 }}>
          {items.map((project) => {
            const active = project.id === activeId;
            const updated = updatedLabel(project);
            const href = project.liveUrl || project.codeUrl;
            // Projeto privado: sem link, a linha vira botão que só mostra o projeto no palco
            const Row = href ? 'a' : 'button';
            const rowProps = href
              ? { href, target: '_blank', rel: 'noreferrer' }
              : { type: 'button', onClick: () => setActiveId(project.id) };
            return (
              <li key={project.id} className={`work__item${active ? ' is-active' : ''}`}>
                <Row
                  className="work__row"
                  {...rowProps}
                  onMouseEnter={() => setActiveId(project.id)}
                  onFocus={() => setActiveId(project.id)}
                  aria-describedby={`${project.id}-desc`}
                >
                  <span className="t-heading work__name">{project.title}</span>
                  <span className="t-small work__meta">
                    {project.kind}
                    {updated && <span className="work__updated"> · {updated}</span>}
                  </span>
                </Row>

                {/* No celular cada projeto mostra a tela e o texto na própria lista */}
                <div className="work__inline">
                  <ProjectMedia project={project} />
                  <p id={`${project.id}-desc`} className="work__desc">
                    {project.desc}
                  </p>
                  <p className="t-small muted">{project.stack}</p>
                  <ProjectLinks project={project} labels={w} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="split__stage work__stage">
        {items.map((project) => (
          <article
            key={project.id}
            className={`work__panel${project.id === activeId ? ' is-active' : ''}`}
            aria-hidden={project.id !== activeId}
          >
            <div className="work__media">
              <ProjectMedia project={project} />
            </div>
            <div className="work__caption">
              <h3 className="t-lead">{project.title}</h3>
              <p className="work__desc">{project.desc}</p>
              <p className="t-small muted">{project.stack}</p>
              {project.id === activeId && <ProjectLinks project={project} labels={w} />}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
