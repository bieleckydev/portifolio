import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

export default function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <ul className="site-footer__links">
          <li><a href="#projetos">{t.nav.projects}</a></li>
          <li><a href="#sobre">{t.nav.about}</a></li>
          <li><a href="#experiencia">{t.nav.experience}</a></li>
          <li><a href="#contato">{t.nav.contact}</a></li>
        </ul>
        <ul className="site-footer__links site-footer__links--end">
          <li><a href="mailto:eduardombielecky@gmail.com">eduardombielecky@gmail.com</a></li>
          <li><a href="https://github.com/edubielecky" target="_blank" rel="noreferrer">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/bielecky/" target="_blank" rel="noreferrer">LinkedIn</a></li>
        </ul>
      </div>

      <p className="site-footer__name" aria-hidden="true">
        Eduardo Mota Bielecky
        <br />
        da Silva Mello
      </p>

      <p className="t-small site-footer__legal">
        © {year} Eduardo Mota Bielecky da Silva Mello. {t.footer.made}
      </p>
    </footer>
  );
}
