import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '', id = 'lang-switcher' }) {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div
      className={`lang-switcher ${className}`}
      id={id}
      role="group"
      aria-label="Language selector / Seletor de idioma / 语言切换"
    >
      {supportedLanguages.map((lang) => {
        const isActive = language === lang.code;
        return (
          <button
            key={lang.code}
            type="button"
            className={`lang-btn ${isActive ? 'active' : ''}`}
            id={`${id}-btn-${lang.code}`}
            onClick={() => setLanguage(lang.code)}
            aria-pressed={isActive}
            title={lang.name}
          >
            <span className="lang-label">{lang.label}</span>
          </button>
        );
      })}
    </div>
  );
}
