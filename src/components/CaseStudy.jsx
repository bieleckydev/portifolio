import React, { useRef, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import CaseGame from './CaseGame';
import './CaseStudy.css';

// O sistema real está em produção num restaurante: aqui só existe a simulação.
export default function CaseStudy() {
  const { t } = useLanguage();
  const c = t.caseStudy;
  const [playing, setPlaying] = useState(false);
  const stageRef = useRef(null);
  const startRef = useRef(null);

  const start = () => {
    setPlaying(true);
    // No celular o palco fica embaixo do texto: leva o jogo para a tela
    if (window.matchMedia('(max-width: 900px)').matches) {
      requestAnimationFrame(() => stageRef.current?.scrollIntoView({ block: 'start' }));
    }
  };

  const quit = () => {
    setPlaying(false);
    requestAnimationFrame(() => startRef.current?.focus());
  };

  return (
    <section id="projetos" className="split case" data-section aria-labelledby="case-title">
      <div className="split__read case__read">
        <h2 id="case-title" className="t-heading case__title" data-reveal style={{ '--i': 0 }}>
          {c.title}
        </h2>
        <p className="t-lead case__lead" data-reveal style={{ '--i': 1 }}>
          {c.lead}
        </p>

        <dl className="case__facts" data-reveal style={{ '--i': 2 }}>
          {c.rows.map((row) => (
            <div key={row.label} className="case__fact">
              <dt className="t-small muted">{row.label}</dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>

        <div className="case__actions" data-reveal style={{ '--i': 3 }}>
          <button
            ref={startRef}
            type="button"
            className="button"
            onClick={playing ? quit : start}
            aria-controls="case-stage"
            aria-expanded={playing}
          >
            {playing ? t.caseGame.quit : t.caseGame.start}
          </button>
          <p className="t-small muted case__game-note">{t.caseGame.note}</p>
        </div>
      </div>

      <div
        id="case-stage"
        ref={stageRef}
        className={`split__stage case__stage${playing ? ' is-playing' : ''}`}
      >
        {playing ? (
          <CaseGame onQuit={quit} />
        ) : (
          <figure className="case__shot" data-reveal style={{ '--i': 1 }}>
            <img
              src="/img/caixa-adega.jpg"
              alt={c.imageAlt}
              width="430"
              height="932"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="t-small muted">{c.caption}</figcaption>
          </figure>
        )}
      </div>
    </section>
  );
}
