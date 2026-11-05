import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

export default function About() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <section id="sobre" className="full about" data-section aria-labelledby="about-title">
      <article className="about__sheet" data-reveal>
        <header className="about__head">
          <img
            className="about__photo"
            src="/img/perfil.jpg"
            alt={a.photoAlt}
            width="200"
            height="200"
            loading="lazy"
            decoding="async"
          />
          <h2 id="about-title" className="t-heading">
            {a.title}
          </h2>
        </header>

        <div className="about__letter">
          {a.paragraphs.map((text) => (
            <p key={text}>{text}</p>
          ))}
        </div>

        <footer className="about__sign">
          <p className="t-lead about__name">Eduardo Mota Bielecky da Silva Mello</p>
          <p className="t-small muted">{a.signRole}</p>
        </footer>
      </article>
    </section>
  );
}
