import React, { createContext, useContext, useState, useEffect } from 'react';
import { TRANSLATIONS } from '../i18n/translations';

const LanguageContext = createContext();

export const SUPPORTED_LANGUAGES = [
  { code: 'pt', label: 'PT', name: 'Português', flag: 'BR' },
  { code: 'en', label: 'EN', name: 'English', flag: 'US' },
  { code: 'zh', label: '中文', name: '中文 (Chinese)', flag: 'CN' }
];

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try {
      const saved = localStorage.getItem('user_lang');
      if (saved && ['pt', 'en', 'zh'].includes(saved)) {
        return saved;
      }
      const browserLang = navigator.language || navigator.userLanguage || '';
      if (browserLang.startsWith('zh')) return 'zh';
      if (browserLang.startsWith('en')) return 'en';
      return 'pt';
    } catch {
      return 'pt';
    }
  });

  const setLanguage = (newLang) => {
    if (['pt', 'en', 'zh'].includes(newLang)) {
      setLanguageState(newLang);
      try {
        localStorage.setItem('user_lang', newLang);
      } catch (err) {
        console.error('Failed to save language preference', err);
      }
    }
  };

  useEffect(() => {
    const htmlLang = language === 'zh' ? 'zh-CN' : language === 'en' ? 'en' : 'pt-BR';
    document.documentElement.setAttribute('lang', htmlLang);
  }, [language]);

  const t = TRANSLATIONS[language] || TRANSLATIONS.pt;

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, supportedLanguages: SUPPORTED_LANGUAGES }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
