import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const roles = t.hero.roles;

  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Reset indices if role index goes out of bounds when language changes
  useEffect(() => {
    setRoleIndex(0);
    setCharIndex(0);
    setIsDeleting(false);
  }, [roles]);

  useEffect(() => {
    const currentRole = roles[roleIndex] || roles[0];
    let timer;

    if (!isDeleting && charIndex === currentRole.length) {
      // Pause at full word
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && charIndex === 0) {
      // Switch to next word
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      timer = setTimeout(() => {}, 500);
    } else {
      // Type or delete character
      const speed = isDeleting ? 45 : 90;
      timer = setTimeout(() => {
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }, speed);
    }

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const displayedText = (roles[roleIndex] || roles[0]).substring(0, charIndex);

  return (
    <section id="hero" className="hero">
      <div className="container hero-container fade-in">
        <div className="hero-content" id="hero-content-block">
          <h1 className="name" id="hero-main-name">
            {t.hero.nameFirst} <br />
            {t.hero.nameLast}
          </h1>
          <h2 className="role" id="hero-role-display">
            <span className="typewriter">{displayedText}</span>
            <span className="cursor" aria-hidden="true"></span>
          </h2>

          <p className="summary" id="hero-summary">
            {t.hero.summary}
          </p>

          <div className="cta-group" id="hero-cta-group">
            <a href="#contato" className="btn btn-primary" id="btn-hero-contact">
              <i className="fas fa-paper-plane"></i> {t.hero.contactBtn}
            </a>
            <a href="#projetos" className="btn btn-secondary" id="btn-hero-projects">
              <i className="fas fa-code"></i> {t.hero.projectsBtn}
            </a>
          </div>

          <div className="social-links-hero" id="hero-social-links">
            <span className="social-label">{t.hero.connect}</span>
            <a
              href="https://www.linkedin.com/in/bielecky/"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
              className="social-link-item"
              id="hero-link-linkedin"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a
              href="https://github.com/edubielecky"
              aria-label="GitHub"
              target="_blank"
              rel="noreferrer"
              className="social-link-item"
              id="hero-link-github"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>

        <div className="hero-image" id="hero-image-wrapper">
          <div className="image-frame" id="hero-image-frame">
            <img
              src="/img/perfil.jpg"
              alt="Eduardo Mota"
              className="profile-img"
              id="hero-profile-picture"
            />
            <span className="image-caption">{t.hero.caption}</span>
          </div>
        </div>
      </div>

      {/* Indicador Arquitetural de Scroll (Charles Leclerc Inspired) */}
      <a href="#sobre" className="hero-scroll-cue" aria-label={t.hero.explore}>
        <span className="scroll-cue-text">{t.hero.explore}</span>
        <div className="scroll-cue-indicator">
          <span className="scroll-cue-runner"></span>
        </div>
      </a>
    </section>
  );
}
