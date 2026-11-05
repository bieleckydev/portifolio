import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function WhatsAppButton() {
  const { t } = useLanguage();

  return (
    <a
      href="https://wa.me/5511961485534"
      className="whatsapp-btn"
      target="_blank"
      rel="noreferrer"
      aria-label={t.nav.whatsapp}
      id="whatsapp-floating-btn"
    >
      <i className="fab fa-whatsapp"></i>
    </a>
  );
}
