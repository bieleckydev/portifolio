import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function LanguageSwitcher({ className = '', id = 'lang-switcher' }) {
  const { language, setLanguage, supportedLanguages } = useLanguage();

  return (
    <div
      className={`lang-switcher ${className}`}
      id={id}
      role="group"
      aria-label="Idioma / Language / 语言"
    >
      {supportedLanguages.map((lang) => (
        <button
          key={lang.code}
          type="button"
          className="lang-btn"
          lang={lang.code === 'zh' ? 'zh-CN' : lang.code}
          onClick={() => setLanguage(lang.code)}
          aria-pressed={language === lang.code}
          title={lang.name}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
}
