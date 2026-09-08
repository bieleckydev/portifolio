import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer id="main-footer">
      <div className="container footer-content" id="footer-container">
        <p className="footer-copyright" id="footer-copyright">
          &copy; <span id="year">{currentYear}</span> {t.footer.copyright}
        </p>
        <p className="footer-note" id="footer-note">
          {t.footer.note}
        </p>
      </div>
    </footer>
  );
}
