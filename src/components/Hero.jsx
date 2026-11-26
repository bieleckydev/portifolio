import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS } from '../data/projects';
import { COURSE_GROUPS } from '../data/courses';
import './Hero.css';

// Contados dos próprios dados, para o cupom nunca ficar desatualizado
const PROJECT_COUNT = PROJECTS.length;
const COURSE_COUNT = COURSE_GROUPS.reduce((sum, group) => sum + group.items.length, 0);

export default function Hero() {
  const { t } = useLanguage();
  const h = t.hero;
  const card = h.card;

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
            <a className="text-link" href="https://github.com/bieleckydev" target="_blank" rel="noreferrer">
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

      <div className="split__stage hero__stage">
        {/* Ficha do desenvolvedor impressa como cupom */}
        <div className="ticket hero__ticket" data-ui data-reveal style={{ '--i': 2 }}>
          <div className="ticket__slot" aria-hidden="true" />
          <div className="ticket__paper">
            <p className="ticket__center ticket__strong">{card.title}</p>
            <p className="ticket__center">Eduardo Bielecky</p>
            <div className="ticket__rule" aria-hidden="true" />
            <div className="ticket__row">
              <span>{card.role}</span>
              <span>{card.roleValue}</span>
            </div>
            <div className="ticket__row">
              <span>{card.company}</span>
              <span>Softcomp Sistemas</span>
            </div>
            <div className="ticket__row">
              <span>{card.since}</span>
              <span>{card.sinceValue}</span>
            </div>
            <div className="ticket__rule" aria-hidden="true" />
            <div className="ticket__row">
              <span>{card.projects}</span>
              <span>{PROJECT_COUNT}</span>
            </div>
            <div className="ticket__row">
              <span>{card.courses}</span>
              <span>{COURSE_COUNT}</span>
            </div>
            <div className="ticket__row">
              <span>{card.stack}</span>
              <span>{card.stackValue}</span>
            </div>
            <div className="ticket__rule" aria-hidden="true" />
            <p className="ticket__center">{card.city}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
