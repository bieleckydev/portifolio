import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="sobre" className="section about">

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="section-header reveal">
          <span className="section-label">{t.about.label}</span>
          <h2 className="section-title" id="about-heading">
            {t.about.title}
          </h2>
        </div>
        <div className="about-grid reveal" id="about-grid-content">
          <div className="about-text minimal-card" id="about-card">
            <p dangerouslySetInnerHTML={{ __html: t.about.p1 }} />
            <p dangerouslySetInnerHTML={{ __html: t.about.p2 }} />

            <div className="personal-info" id="about-personal-info">
              <div className="info-item" id="info-formacao">
                <div className="info-item-header">
                  <i className="fas fa-graduation-cap"></i> {t.about.educationTitle}
                </div>
                <span>{t.about.educationDegree}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.about.educationSub}</span>
              </div>
              <div className="info-item" id="info-localizacao">
                <div className="info-item-header">
                  <i className="fas fa-map-marker-alt"></i> {t.about.locationTitle}
                </div>
                <span>{t.about.locationPlace}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.about.locationSub}</span>
              </div>
              <div className="info-item" id="info-objetivo">
                <div className="info-item-header">
                  <i className="fas fa-bullseye"></i> {t.about.focusTitle}
                </div>
                <span>{t.about.focusTarget}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{t.about.focusSub}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
