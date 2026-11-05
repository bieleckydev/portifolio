/**
 * Dados fixos dos projetos (iguais em todos os idiomas).
 * Os textos traduzidos ficam em src/i18n, em projects.items, ligados pelo id.
 * A ordem deste array define a ordem de exibição.
 * categories: filtros em que o projeto aparece (JAVA, POS, FRONTEND).
 */
export const PROJECTS = [
  {
    id: 'proj-caixa-adega',
    categories: ['POS', 'FRONTEND'],
    icon: 'fas fa-cash-register',
    img: '/img/caixa-adega.svg',
    featured: true,
    liveUrl: 'https://caixa-adega-bay.vercel.app/',
    codeUrl: 'https://github.com/edubielecky/caixa_adega'
  },
  {
    id: 'proj-cardapio-digital',
    categories: ['FRONTEND'],
    icon: 'fas fa-utensils',
    img: '/img/cardapio.jpg',
    featured: true,
    liveUrl: 'https://cardapio-one-ochre.vercel.app/',
    codeUrl: 'https://github.com/edubielecky/cardapio'
  },
  {
    id: 'proj-cripto',
    categories: ['JAVA'],
    icon: 'fas fa-chart-line',
    img: '/img/cripto.svg',
    featured: true,
    codeUrl: 'https://github.com/JoaoRicardoSOC/aurum-banking'
  },
  {
    id: 'proj-otis',
    categories: ['FRONTEND'],
    img: '/img/otis.jpg',
    liveUrl: 'https://sistema-otis-puce.vercel.app/',
    codeUrl: 'https://github.com/edubielecky/Sistema-OTIS'
  },
  {
    id: 'proj-feira',
    categories: ['FRONTEND'],
    img: '/img/feira.jpg',
    liveUrl: 'https://feira-online-liart.vercel.app/',
    codeUrl: 'https://github.com/edubielecky/FEIRA-ONLINE'
  },
  {
    id: 'proj-ready2work',
    categories: ['JAVA'],
    icon: 'fas fa-briefcase',
    img: '/img/ready2work.svg',
    codeUrl: 'https://github.com/edubielecky/ready2work'
  },
  {
    id: 'proj-kcal',
    categories: ['FRONTEND'],
    icon: 'fas fa-fire-flame-curved',
    img: '/img/kcal.svg',
    featured: true,
    liveUrl: 'https://kcalio-amber.vercel.app/',
    codeUrl: 'https://github.com/edubielecky/kcal.io'
  },
  {
    id: 'proj-guia-cidadao',
    categories: ['FRONTEND'],
    icon: 'fas fa-id-card',
    img: '/img/guia-cidadao.svg',
    featured: true,
    codeUrl: 'https://github.com/edubielecky/guia_cidadao'
  }
];

/**
 * Junta os dados fixos com os textos do idioma atual.
 * @param {Array<{id: string}>} translatedItems - t.projects.items
 */
export function getLocalizedProjects(translatedItems = []) {
  const textsById = new Map(translatedItems.map((item) => [item.id, item]));
  return PROJECTS.map((project) => ({ ...project, ...textsById.get(project.id) }));
}
