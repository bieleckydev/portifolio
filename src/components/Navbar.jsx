import React, { useEffect, useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import './Navbar.css';

export default function Navbar() {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  // Fecha o menu do celular com Esc e ao voltar para a largura de desktop
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    const wide = window.matchMedia('(min-width: 901px)');
    const onWide = () => wide.matches && setOpen(false);
    window.addEventListener('keydown', onKey);
    wide.addEventListener('change', onWide);
    return () => {
      window.removeEventListener('keydown', onKey);
      wide.removeEventListener('change', onWide);
    };
  }, [open]);

  const close = () => setOpen(false);

  const links = [
    { href: '#projetos', label: t.nav.projects },
    { href: '#sobre', label: t.nav.about },
    { href: '#experiencia', label: t.nav.experience },
    { href: '#cursos', label: t.nav.courses }
  ];

  return (
    <header className="site-header">
      <a href="#inicio" className="site-header__name" onClick={close} aria-label={t.nav.home}>
        Eduardo Bielecky
      </a>

      <nav className="site-header__nav" aria-label={t.nav.mainNav}>
        <ul className="site-header__links">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="site-header__end">
        <LanguageSwitcher className="site-header__langs" id="lang-desktop" />
        <a href="#contato" className="button site-header__cta">
          {t.nav.contact}
        </a>
        <button
          type="button"
          className="site-header__menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? t.nav.close : t.nav.menu}
        </button>
      </div>

      <div id="mobile-menu" className="mobile-menu" hidden={!open}>
        <ul>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={close}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contato" onClick={close}>
              {t.nav.contact}
            </a>
          </li>
        </ul>
        <LanguageSwitcher className="mobile-menu__langs" id="lang-mobile" />
      </div>
    </header>
  );
}
