import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar({
  isScrolled,
  mobileMenuOpen,
  onToggleMobileMenu,
  onCloseMobileMenu,
}) {
  const { t } = useLanguage();

  return (
    <header id="main-header" className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a href="#" className="logo" id="header-logo" onClick={onCloseMobileMenu}>
          bielecky<span>.dev</span>
        </a>
        <nav className="navbar" id="main-nav" aria-label={t.nav.mainNav}>
          <ul className={`nav-links ${mobileMenuOpen ? 'active' : ''}`} id="nav-links-list">
            <li>
              <a href="#sobre" onClick={onCloseMobileMenu}>
                {t.nav.about}
              </a>
            </li>
            <li>
              <a href="#habilidades" onClick={onCloseMobileMenu}>
                {t.nav.skills}
              </a>
            </li>
            <li>
              <a href="#experiencia" onClick={onCloseMobileMenu}>
                {t.nav.experience}
              </a>
            </li>
            <li>
              <a href="#projetos" onClick={onCloseMobileMenu}>
                {t.nav.projects}
              </a>
            </li>
            <li>
              <a href="#contato" onClick={onCloseMobileMenu}>
                {t.nav.contact}
              </a>
            </li>
            <li className="mobile-lang-item">
              <LanguageSwitcher id="mobile-lang-switcher" />
            </li>
          </ul>

          <div className="nav-controls" id="nav-controls-group">
            <LanguageSwitcher className="desktop-lang-switcher" id="desktop-lang-switcher" />

            <button
              id="hamburger-btn"
              className={`hamburger ${mobileMenuOpen ? 'toggle' : ''}`}
              aria-label={t.nav.menuToggle}
              onClick={onToggleMobileMenu}
              type="button"
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
