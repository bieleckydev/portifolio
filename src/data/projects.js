/**
 * Dados fixos dos projetos (iguais em todos os idiomas).
 * Os textos traduzidos ficam em src/i18n, em projects.items, ligados pelo id.
 * A ordem deste array define a ordem da lista "Outros projetos".
 * caseStudy: o projeto que ganha seção própria e sai da lista.
 *   O sistema de caixa está em produção num restaurante: nunca publique o link dele aqui.
 * codeUrl só para repositórios públicos; sem link, a lista mostra "Código privado".
 * img/imgW/imgH: tela real do projeto; sem imagem, o painel mostra o nome em texto.
 */
export const PROJECTS = [
  {
    id: 'proj-caixa-adega',
    caseStudy: true,
    img: '/img/caixa-adega.jpg',
    imgW: 860,
    imgH: 1864
  },
  // Softcomp Sistemas: repositórios privados e ferramentas internas, sem link público
  { id: 'proj-softcomp-painel' },
  { id: 'proj-monitor-sefaz' },
  { id: 'proj-softcomp-changelog' },
  {
    id: 'proj-calculadora-metais',
    img: '/img/calculadora.jpg',
    imgW: 1440,
    imgH: 900,
    codeUrl: 'https://github.com/bieleckydev/calculadora_metais'
  },
  {
    id: 'proj-heavy',
    codeUrl: 'https://github.com/bieleckydev/heavy.io'
  },
  {
    id: 'proj-cardapio-digital',
    img: '/img/cardapio.jpg',
    imgW: 860,
    imgH: 1864,
    liveUrl: 'https://cardapio-one-ochre.vercel.app/',
    codeUrl: 'https://github.com/bieleckydev/cardapio'
  },
  {
    id: 'proj-cripto',
    codeUrl: 'https://github.com/JoaoRicardoSOC/aurum-banking'
  },
  {
    id: 'proj-otis',
    img: '/img/otis.jpg',
    imgW: 1280,
    imgH: 634,
    liveUrl: 'https://sistema-otis-puce.vercel.app/',
    codeUrl: 'https://github.com/bieleckydev/Sistema-OTIS'
  },
  {
    id: 'proj-kcal',
    img: '/img/kcal.jpg',
    imgW: 1440,
    imgH: 900,
    liveUrl: 'https://kcalio-amber.vercel.app/'
  },
  {
    id: 'proj-feira',
    img: '/img/feira.jpg',
    imgW: 1280,
    imgH: 634,
    liveUrl: 'https://feira-online-liart.vercel.app/',
    codeUrl: 'https://github.com/bieleckydev/FEIRA-ONLINE'
  },
  {
    id: 'proj-ready2work',
    codeUrl: 'https://github.com/bieleckydev/ready2work'
  },
  { id: 'proj-guia-cidadao' }
];

/**
 * Junta os dados fixos com os textos do idioma atual.
 * @param {Array<{id: string}>} translatedItems - t.projects.items
 */
export function getLocalizedProjects(translatedItems = []) {
  const textsById = new Map(translatedItems.map((item) => [item.id, item]));
  return PROJECTS.map((project) => ({ ...project, ...textsById.get(project.id) }));
}
