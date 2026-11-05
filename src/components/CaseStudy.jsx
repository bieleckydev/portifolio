import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './CaseStudy.css';

export default function CaseStudy() {
  const { t } = useLanguage();
  const c = t.caseStudy;

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

      </div>

      <div className="split__stage case__stage">
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
      </div>
    </section>
  );
}
