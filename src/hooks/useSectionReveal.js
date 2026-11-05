import { useEffect } from 'react';

/**
 * Marca cada [data-section] com .is-in na primeira vez que ela entra na tela.
 * O CSS em styles/base.css usa essa classe para escalonar título, texto e imagem.
 * Sem IntersectionObserver, tudo aparece de uma vez.
 */
export function useSectionReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('[data-section]'));
    if (!('IntersectionObserver' in window)) {
      sections.forEach((el) => el.classList.add('is-in'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );

    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
