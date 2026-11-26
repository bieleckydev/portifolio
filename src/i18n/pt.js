export const pt = {
  nav: {
    projects: 'Projetos',
    about: 'Sobre',
    experience: 'Experiência',
    courses: 'Cursos',
    contact: 'Contato',
    menu: 'Menu',
    close: 'Fechar',
    home: 'Eduardo Bielecky, voltar ao início',
    mainNav: 'Navegação principal',
    whatsapp: 'Conversar pelo WhatsApp'
  },
  hero: {
    lead: 'Engenheiro de software em formação. Construí o sistema de caixa que a Adega do Dino usa hoje.',
    facts: 'Desenvolvedor júnior na Softcomp Sistemas, onde uso IA no dia a dia. Estudo Engenharia de Software em São Bernardo do Campo, SP.',
    cta: 'Falar comigo',
    projects: 'Ver projetos'
  },
  pos: {
    label: 'Demonstração do sistema de caixa',
    keysLabel: 'Lançar item no pedido',
    add: 'Lançar',
    service: 'Cobrar serviço de 10%',
    clear: 'Limpar pedido',
    caption: 'Demonstração do cálculo do caixa. Itens e preços são de exemplo.',
    shop: 'ADEGA DO DINO',
    sub: 'Churrascaria',
    table: 'MESA 12',
    empty: 'Nenhum item lançado',
    subtotal: 'Subtotal',
    serviceLine: 'Serviço 10%',
    total: 'TOTAL',
    notFiscal: 'NÃO É DOCUMENTO FISCAL',
    thanks: 'Obrigado pela preferência',
    items: [
      { id: 'picanha', name: 'Picanha 400 g', price: 89.9 },
      { id: 'fraldinha', name: 'Fraldinha 400 g', price: 69.9 },
      { id: 'linguica', name: 'Linguiça toscana', price: 24.9 },
      { id: 'farofa', name: 'Farofa da casa', price: 12 },
      { id: 'cerveja', name: 'Cerveja 600 ml', price: 14.9 },
      { id: 'refri', name: 'Refrigerante lata', price: 7 }
    ]
  },
  caseStudy: {
    title: 'O sistema de caixa da Adega do Dino',
    lead: 'Um ponto de venda web que a casa usa para lançar pedidos, fechar contas e imprimir o cupom.',
    rows: [
      { label: 'Perfis', value: 'Caixa, garçom e estatísticas, cada um com a sua tela' },
      { label: 'Fechamento', value: 'Cálculo de taxas e fechamento rápido da conta' },
      { label: 'Impressão', value: 'Cupom e relatórios na impressora térmica, via ESC/POS' },
      { label: 'Tecnologia', value: 'JavaScript, WebSocket e comandos ESC/POS' },
      { label: 'Situação', value: 'Em produção no restaurante' }
    ],
    imageAlt: 'Tela de entrada do sistema de caixa da Adega do Dino com os perfis Caixa, Garçom e Estatísticas',
    caption: 'Tela de entrada do sistema, no celular.'
  },
  caseGame: {
    start: 'Assumir o caixa',
    quit: 'Sair do caixa',
    note: 'Feche cinco comandas no menor tempo. É uma simulação: nada vai para o sistema real.',
    progress: 'Comanda {n} de {total}',
    time: 'Tempo',
    table: 'Mesa {n}',
    counter: 'Balcão',
    tableRule: 'cobra serviço de 10%',
    counterRule: 'sem serviço',
    bill: 'Conta',
    empty: 'Lance os itens da comanda.',
    removeOne: 'Tirar um',
    closeWith: 'Fechar com 10%',
    closeWithout: 'Fechar sem serviço',
    right: 'Conta certa.',
    wrongItems: 'Os itens não batem com a comanda.',
    wrongService: 'A taxa de serviço ficou errada.',
    summaryTitle: 'FECHAMENTO DO TURNO',
    okMark: 'OK',
    badMark: 'ERRO',
    shiftTotal: 'TOTAL DO TURNO',
    summary: '{ok} de {total} contas certas em {time}.',
    again: 'Jogar de novo'
  },
  about: {
    title: 'Sobre mim',
    photoAlt: 'Retrato de Eduardo Bielecky',
    paragraphs: [
      'Sou estudante de Engenharia de Software e moro em São Bernardo do Campo, SP.',
      'Na Adega do Dino cuidei do atendimento num salão de muito movimento e das planilhas de estoque. O sistema de caixa que a casa usa hoje foi escrito para essa rotina.',
      'Trabalho do back-end ao app: TypeScript com React e Node.js, Java, Python, React Native e Kotlin no celular, e bancos SQL. Escolho a ferramenta pelo problema e aprendo a que faltar.',
      'Fora do código, monto e ajusto computadores. Gosto de testar estabilidade, cuidar da parte térmica e entender o que acontece por baixo dos panos.',
      'Procuro um estágio ou uma vaga júnior em que eu aprenda com um time e entregue software que alguém usa de verdade.'
    ],
    signRole: 'Estudante de Engenharia de Software'
  },
  experience: {
    title: 'Experiência',
    skillsTitle: 'Habilidades',
    groups: [
      {
        label: 'Trabalho',
        rows: [
          {
            name: 'Desenvolvedor júnior, Softcomp Sistemas',
            detail: 'Desenvolvo com IA no dia a dia ferramentas para a empresa e seus clientes: painel executivo, monitor da SEFAZ, changelog dos sistemas, calculadora de metais e o guia da Reforma Tributária.',
            value: 'Desde jun. de 2026'
          },
          {
            name: 'Atendimento e operações, Adega do Dino',
            detail: 'Atendimento num salão de muito movimento, planilhas de estoque e apoio nos anúncios da casa.',
            value: 'Recente'
          },
          {
            name: 'Montagem e ajuste de computadores',
            detail: 'Prática independente: montagem, testes de estabilidade e gestão térmica.',
            value: '2024 a 2025'
          }
        ]
      },
      {
        label: 'Formação',
        rows: [
          { name: 'Bacharelado em Engenharia de Software', value: 'Em andamento' },
          { name: 'Inglês técnico', detail: 'Leitura de documentação e especificações.' }
        ]
      }
    ],
    skills: [
      {
        label: 'Linguagens',
        rows: [
          { name: 'TypeScript', value: 'Painel Softcomp, Monitor SEFAZ, Changelog e heavy.io' },
          { name: 'JavaScript', value: 'Caixa, cardápio, OTIS e Feira' },
          { name: 'Java', value: 'Aurum Banking e faculdade' },
          { name: 'Python', value: 'Painel Softcomp, Ready 2 Work e automações' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'SQL', value: 'SQLite, PostgreSQL e Oracle' }
        ]
      },
      {
        label: 'Front-end, back-end e mobile',
        rows: [
          { name: 'React e Next.js', value: 'Painel, Monitor SEFAZ, Changelog, Portal e Almoxarifado' },
          { name: 'Node.js com Express e Fastify', value: 'Painel Softcomp e Monitor SEFAZ' },
          { name: 'React Native com Expo', value: 'heavy.io e Portal do Colaborador' },
          { name: 'Tailwind e CSS', value: 'Painel Softcomp e sites' },
          { name: 'Supabase e Firebase', value: 'Portal, Almoxarifado, Changelog e heavy.io' },
          { name: 'Arquitetura de software', value: 'Almoxarifado: domínio separado da camada web' },
          { name: 'Acessibilidade (WCAG 2.1 AA)', value: 'Guia da Reforma Tributária' }
        ]
      },
      {
        label: 'Infraestrutura e integrações',
        rows: [
          { name: 'Nginx, systemd e GitHub Actions', value: 'Deploy do Painel e do Monitor' },
          { name: 'Segurança no banco (Row Level Security)', value: 'Portal do Colaborador' },
          { name: 'Monorepo com pnpm e Turborepo', value: 'Portal do Colaborador' },
          { name: 'Vercel', value: 'Changelog, cardápio, OTIS e Feira' },
          { name: 'Impressão térmica ESC/POS', value: 'Sistema de caixa' },
          { name: 'Integração com ERP e APIs', value: 'Painel Softcomp e Monitor SEFAZ' },
          { name: 'Tributação do consumo (IBS, CBS e NF-e)', value: 'Guia da Reforma e Monitor SEFAZ' }
        ]
      },
      {
        label: 'Ferramentas',
        rows: [
          { name: 'Git e GitHub', value: 'Todos os projetos' },
          { name: 'Testes automatizados e Playwright', value: 'Almoxarifado, com 553 testes' },
          { name: 'VS Code e IntelliJ IDEA', value: 'Dia a dia' },
          { name: 'Trello', value: 'Organização de entregas' }
        ]
      }
    ]
  },
  courses: {
    title: 'Cursos e certificações',
    lead: '{total} certificados da Alura, da FIAP e da Santander Open Academy, quase todos de 2026.',
    link: 'Ver credenciais no LinkedIn',
    groups: {
      ai: 'Engenharia de software com IA',
      dev: 'Desenvolvimento e fundamentos',
      business: 'Gestão, produto e comunicação'
    }
  },
  projects: {
    title: 'Outros projetos',
    live: 'Ver online',
    code: 'Ver código',
    updated: 'atualizado {when}',
    privateCode: 'Código privado',
    items: [
      {
        id: 'proj-caixa-adega',
        title: 'Sistema de caixa'
      },
      {
        id: 'proj-softcomp-painel',
        title: 'Painel Softcomp',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Plataforma de gestão para a indústria de corte de aço: painel executivo de vendas, programação automática das máquinas de corte e fluxo de caixa, integrada ao ERP legado.',
        stack: 'TypeScript, React, Node.js com Express e Fastify, SQLite, Tailwind, Nginx e GitHub Actions'
      },
      {
        id: 'proj-monitor-sefaz',
        title: 'Monitor SEFAZ',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Vigia a cada 60 s os 12 autorizadores de NF-e da SEFAZ e diz qual contingência ativar quando um cai. Também recebe os erros do ERP de cada cliente e mostra em mapa quem está fora do ar. Dado que não foi lido nunca aparece como OK.',
        stack: 'TypeScript, React, Vite, Tailwind, Node.js com Fastify, SQLite, Leaflet e systemd'
      },
      {
        id: 'proj-softcomp-changelog',
        title: 'Softcomp Changelog',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Notas de versão dos módulos do ERP da Softcomp, com filtro por módulo e tipo, busca e painel administrativo com envio de imagens.',
        stack: 'Next.js, React, TypeScript e Supabase com PostgreSQL'
      },
      {
        id: 'proj-calculadora-metais',
        title: 'Calculadora de Metais',
        kind: 'Front-end, Softcomp Sistemas',
        desc: 'Calcula o peso teórico de 14 perfis em 30 materiais para cotações e vendas no ERP, aceita frações em polegadas e funciona inteira pelo teclado.',
        stack: 'React, Vite, JavaScript e Python',
        imageAlt: 'Calculadora de peso teórico com os perfis de metal, o esquema técnico em 3D e os campos de dimensão'
      },
      {
        id: 'proj-guia-reforma',
        title: 'Guia da Reforma Tributária',
        kind: 'Front-end, Softcomp Sistemas',
        desc: 'Guia para empresas do setor do aço entenderem IBS, CBS e a transição de 2026 a 2033, com simulador do ano de teste, exemplos de cálculo da cadeia do aço e cada afirmação ligada a uma fonte oficial.',
        stack: 'HTML, CSS e JavaScript puros, sem dependências; acessível no padrão WCAG 2.1 AA',
        imageAlt: 'Abertura do Guia Fácil da Reforma Tributária, com o menu de capítulos à esquerda'
      },
      {
        id: 'proj-portal-colaborador',
        title: 'Portal do Colaborador',
        kind: 'Full stack, site e app',
        desc: 'Site e app de RH para uma indústria de pequeno porte: cada pessoa entra com CPF e só vê o que é dela, como holerites, solicitações e comunicados, com a proteção feita no próprio banco por Row Level Security.',
        stack: 'TypeScript, Next.js, React Native com Expo, Supabase com PostgreSQL, Tailwind e Turborepo',
        imageAlt: 'Tela inicial do app no celular com atalhos para holerites, solicitações e comunicados e o holerite do mês'
      },
      {
        id: 'proj-almoxarifado',
        title: 'Sistema de Almoxarifado',
        kind: 'Full stack, indústria metalúrgica',
        desc: 'Troca as planilhas de estoque de uma metalúrgica por uma plataforma com saldo confiável: entradas, baixas, requisições e pedidos gravados em transações atômicas, acesso por perfil com auditoria e 553 testes automatizados.',
        stack: 'TypeScript, Next.js, React, Tailwind, Zod, Zustand, TanStack Query, Firebase (Auth e Firestore), Playwright e Vercel'
      },
      {
        id: 'proj-heavy',
        title: 'heavy.io',
        kind: 'Mobile, React Native',
        desc: 'App de treino de força que funciona sem internet: guarda séries e cargas no aparelho, estima a carga máxima, sincroniza com o Health Connect e sugere troca de exercício com IA.',
        stack: 'TypeScript, React Native com Expo, SQLite, Firebase e Gemini'
      },
      {
        id: 'proj-cardapio-digital',
        title: 'Cardápio Digital',
        kind: 'Front-end, Adega do Dino',
        desc: 'O cardápio que os clientes da Adega do Dino abrem no celular, com os cortes da casa e o pedido.',
        stack: 'JavaScript, HTML e CSS',
        imageAlt: 'Abertura do cardápio digital da Adega e Churrascaria do Dino'
      },
      {
        id: 'proj-cripto',
        title: 'Aurum Banking',
        kind: 'Java, em equipe',
        desc: 'Simulador de corretora de criptomoedas: carteira, casamento de ordens e validação de saldo.',
        stack: 'Java, orientação a objetos e Oracle'
      },
      {
        id: 'proj-otis',
        title: 'Sistema OTIS',
        kind: 'Front-end, painel',
        desc: 'Painel de indicadores com prazos, custos e chamados por área, publicado na Vercel.',
        stack: 'JavaScript e CSS',
        imageAlt: 'Painel de indicadores do Sistema OTIS com gráficos de prazo e custo'
      },
      {
        id: 'proj-kcal',
        title: 'kcal.io',
        kind: 'Android, Kotlin',
        desc: 'App gratuito que recalcula o déficit ou superávit calórico com o gasto real medido pelo Health Connect.',
        stack: 'Kotlin e Health Connect',
        imageAlt: 'Página do kcal.io com a tela do app mostrando calorias ingeridas e macronutrientes'
      },
      {
        id: 'proj-feira',
        title: 'Feira Online',
        kind: 'Front-end, loja',
        desc: 'Loja que liga pequenos produtores a quem compra, com catálogo por categoria e carrinho.',
        stack: 'JavaScript, HTML e CSS',
        imageAlt: 'Página inicial da Feira Online com verduras e categorias de produtos'
      },
      {
        id: 'proj-ready2work',
        title: 'Ready 2 Work',
        kind: 'Carreira',
        desc: 'Preparação para o mercado de tecnologia, com simulados de avaliação técnica.',
        stack: 'JavaScript e Python'
      },
      {
        id: 'proj-guia-cidadao',
        title: 'GuiaCidadão',
        kind: 'Front-end, serviço público',
        desc: 'Triagem de um minuto, sem cadastro, que aponta os benefícios públicos a que a pessoa tem direito.',
        stack: 'JavaScript e CSS'
      }
    ]
  },
  contact: {
    promptA: 'Tem uma vaga de estágio ou júnior em desenvolvimento?',
    promptB: 'Deixe seu e-mail que eu respondo.',
    label: 'Seu e-mail',
    placeholder: 'nome@empresa.com',
    submit: 'Enviar',
    submitting: 'Enviando',
    hint: 'O endereço chega direto na minha caixa de entrada.',
    successTitle: 'Recebido.',
    successText: 'Vou responder em {email}.',
    reset: 'Enviar outro e-mail',
    emptyError: 'Escreva seu e-mail para eu poder responder.',
    invalidError: 'Esse e-mail parece incompleto. Confira o @ e o domínio, como nome@empresa.com.',
    networkError: 'Não consegui enviar agora. Escreva direto para eduardombielecky@gmail.com.',
    emailLabel: 'E-mail',
    copy: 'Copiar',
    copied: 'Copiado',
    subject: 'Contato pelo portfólio',
    ticket: {
      title: 'PEDIDO DE CONTATO',
      lines: [
        ['Procura', 'Estágio ou júnior'],
        ['Stack', 'Back, front e mobile'],
        ['Formação', 'Eng. de Software'],
        ['Cidade', 'S. B. do Campo, SP']
      ],
      thanks: 'Obrigado pela visita'
    }
  },
  footer: {
    made: 'Feito em São Bernardo do Campo, SP.'
  },
};
