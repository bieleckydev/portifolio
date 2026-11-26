/**
 * Dados fixos dos projetos (iguais em todos os idiomas).
 * Os textos traduzidos ficam em src/i18n, em projects.items, ligados pelo id.
 * A ordem deste array define a ordem da lista "Outros projetos".
 * caseStudy: o projeto que ganha seção própria e sai da lista.
 * O sistema de caixa está em produção num restaurante: nunca publique o link dele aqui.
 * codeUrl só para repositórios públicos; sem link, a lista mostra "Código privado".
 * img/imgW/imgH: tela real do projeto; sem imagem, o painel mostra o nome em texto.
 */
export const PROJECTS = [
  // Softcomp Sistemas: repositórios privados e ferramentas internas, sem link público
  { id: 'proj-softcomp-painel' },
  { id: 'proj-monitor-sefaz' },
  {
    id: 'proj-softcomp-changelog',
    img: '/img/changelog.png',
    imgW: 1440,
    imgH: 720
  },
  {
    id: 'proj-calculadora-metais',
    caseStudy: true,
    img: '/img/calculadora.jpg',
    imgW: 1440,
    imgH: 900,
    liveUrl: 'https://calculadora-metais.vercel.app/',
    codeUrl: 'https://github.com/bieleckydev/calculadora_metais'
  },
  {
    id: 'proj-guia-reforma',
    img: '/img/guia-reforma.png',
    imgW: 480,
    imgH: 300
  },
  { id: 'proj-softcomp-crm' },
  {
    id: 'proj-expedicao',
    img: '/img/expedicao.png',
    imgW: 224,
    imgH: 480
  },
  { id: 'proj-fluxo-caixa' },
  {
    id: 'proj-portal-colaborador',
    img: '/img/portal-colaborador.png',
    imgW: 221,
    imgH: 480
  },
  { id: 'proj-almoxarifado' },
  {
    id: 'proj-merlin',
    img: '/img/merlin.png',
    imgW: 221,
    imgH: 480,
    codeUrl: 'https://github.com/bieleckydev/merlin-route-finder'
  },
  {
    id: 'proj-caixa-adega',
    img: '/img/caixa-adega.jpg',
    imgW: 860,
    imgH: 1864
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
