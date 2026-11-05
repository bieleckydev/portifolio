import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import PosDemo from './PosDemo';
import './Hero.css';

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;

  return (
    <section id="inicio" className="split hero" data-section>
      <div className="split__read hero__read">
        <h1 className="t-display hero__name" data-reveal style={{ '--i': 0 }}>
          Eduardo Bielecky
        </h1>
        <p className="t-lead hero__lead" data-reveal style={{ '--i': 1 }}>
          {h.lead}
        </p>
        <p className="hero__facts" data-reveal style={{ '--i': 2 }}>
          {h.facts}
        </p>
        <div className="hero__actions" data-reveal style={{ '--i': 3 }}>
          <a href="#contato" className="button button--accent">
            {h.cta}
          </a>
          <a href="#projetos" className="text-link">
            {h.projects}
          </a>
        </div>
        <ul className="hero__social" data-reveal style={{ '--i': 4 }}>
          <li>
            <a className="text-link" href="https://github.com/edubielecky" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </li>
          <li>
            <a className="text-link" href="https://www.linkedin.com/in/bielecky/" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>

      <div className="split__stage hero__stage" data-reveal style={{ '--i': 2 }}>
        <PosDemo />
      </div>
    </section>
  );
}
