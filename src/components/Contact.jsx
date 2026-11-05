import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import QuickContactForm from './QuickContactForm';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contato" className="section contact">

      <div className="container reveal" id="contact-container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact-box minimal-card" id="contact-card">
          <h2 className="section-title" id="contact-heading" style={{ marginBottom: '1.25rem' }}>
            {t.contact.title}
          </h2>
          <p className="contact-text" id="contact-description">
            {t.contact.description}
          </p>

          {/* Formulário limpo de entrada única com validação e confirmação sutil */}
          <QuickContactForm />

          <div className="contact-divider" aria-hidden="true">
            <span>{t.contact.directDivider}</span>
          </div>

          <div className="contact-links" id="contact-links-group">
            <a
              href="mailto:eduardombielecky@gmail.com?subject=Contato%20Profissional%20-%20Portf%C3%B3lio"
              className="btn btn-secondary"
              id="btn-contact-email"
            >
              <i className="fas fa-envelope"></i> {t.contact.directEmailBtn}
            </a>
            <a
              href="https://www.linkedin.com/in/bielecky/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
              id="btn-contact-linkedin"
            >
              <i className="fab fa-linkedin-in"></i> LinkedIn
            </a>
            <a
              href="https://github.com/edubielecky"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
              id="btn-contact-github"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
