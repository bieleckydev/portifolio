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
    lead: 'Engenheiro de software em formação. Faço sistemas web e mobile para a indústria, do banco de dados ao deploy.',
    facts: 'Desenvolvedor júnior na Softcomp Sistemas, onde uso IA no dia a dia. Estudo Engenharia de Software em São Bernardo do Campo, SP.',
    cta: 'Falar comigo',
    projects: 'Ver projetos',
    card: {
      title: 'FICHA DO DESENVOLVEDOR',
      role: 'Cargo',
      roleValue: 'Dev júnior',
      company: 'Empresa',
      since: 'Desde',
      sinceValue: 'jun. de 2026',
      projects: 'Projetos',
      courses: 'Certificados',
      stack: 'Stack',
      stackValue: 'TS, React, Node, Java',
      city: 'São Bernardo do Campo, SP'
    }
  },
  caseStudy: {
    title: 'Calculadora de Peso Teórico de Metais',
    lead: 'Calcula na hora o peso de uma peça de metal ou polímero e entrega a descrição comercial pronta para colar no pedido do ERP. Criei para a equipe de suporte da Softcomp e para cotação, vendas e PCP.',
    rows: [
      { label: 'Geometrias', value: '14 formas industriais: chapas, bobinas, barras, tubos, buchas e perfis L, T, U e I/H' },
      { label: 'Materiais', value: 'Mais de 30, entre aços, inox, alumínio, cobre, latão, titânio e polímeros' },
      { label: 'Entrada', value: 'Aceita vírgula ou ponto e converte polegadas, como 1/2" ou 1 1/2, para milímetros' },
      { label: 'Validação', value: 'Bloqueia peças impossíveis, como diâmetro interno maior que o externo' },
      { label: 'Visualizador 3D', value: 'Feito do zero em SVG, sem bibliotecas: gira, dá zoom e desenha cada quadro em menos de 0,25 ms' },
      { label: 'Testes', value: '35 testes das fórmulas, do conversor de polegadas e do motor 3D' },
      { label: 'Tecnologia', value: 'React, Vite, JavaScript, CSS com design tokens e SVG' }
    ],
    live: 'Abrir a calculadora',
    code: 'Ver código',
    imageAlt: 'Calculadora de peso teórico com os perfis de metal, o esquema técnico em 3D e os campos de dimensão',
    caption: 'Tela da calculadora publicada.'
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
            detail: 'Desenvolvo com IA no dia a dia ferramentas para a empresa e seus clientes: painel executivo, monitor da SEFAZ, changelog dos sistemas, calculadora de metais, guia da Reforma Tributária, SoftcompCRM, app de expedição e o fluxo de caixa integrado ao Protheus.',
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
          { name: 'TypeScript', value: 'Sistema de caixa, Painel Softcomp, Monitor SEFAZ, Changelog e heavy.io' },
          { name: 'JavaScript', value: 'Calculadora, cardápio, OTIS e Feira' },
          { name: 'Java', value: 'Merlin Route Finder, Aurum Banking e faculdade' },
          { name: 'Python', value: 'Painel Softcomp, Ready 2 Work e automações' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'SQL', value: 'SQL Server, PostgreSQL, SQLite e Oracle' }
        ]
      },
      {
        label: 'Front-end, back-end e mobile',
        rows: [
          { name: 'React e Next.js', value: 'Painel, Monitor SEFAZ, Changelog, Portal e Almoxarifado' },
          { name: 'Node.js com Express e Fastify', value: 'Painel Softcomp, Monitor SEFAZ e App de Expedição' },
          { name: 'PWA para coletores Android', value: 'App de Expedição' },
          { name: 'React Native com Expo', value: 'heavy.io e Portal do Colaborador' },
          { name: 'Java com JAX-RS e JDBC', value: 'Merlin Route Finder' },
          { name: 'IA com Gemini e function calling', value: 'Merlin Route Finder e heavy.io' },
          { name: 'Tailwind e CSS', value: 'Painel Softcomp e sites' },
          { name: 'Chart.js, MapLibre e Leaflet', value: 'Painel Softcomp e Monitor SEFAZ' },
          { name: 'SVG e 3D sem bibliotecas', value: 'Calculadora de Metais' },
          { name: 'Supabase e Firebase', value: 'Sistema de caixa, SoftcompCRM, Portal, Almoxarifado, Changelog e heavy.io' },
          { name: 'Arquitetura de software', value: 'Almoxarifado: domínio separado da camada web' },
          { name: 'Acessibilidade (WCAG 2.1 AA)', value: 'Guia da Reforma Tributária' }
        ]
      },
      {
        label: 'Infraestrutura e integrações',
        rows: [
          { name: 'Nginx, systemd, Redis e GitHub Actions', value: 'Deploy do Painel e do Monitor' },
          { name: 'Segurança no banco (Row Level Security)', value: 'Portal do Colaborador' },
          { name: 'Monorepo com pnpm e Turborepo', value: 'Portal do Colaborador' },
          { name: 'Vercel', value: 'Changelog, cardápio, OTIS e Feira' },
          { name: 'Impressão térmica (cupom 80 mm e ZPL)', value: 'Sistema de caixa e App de Expedição' },
          { name: 'APIs REST, OpenAPI e integração com ERP', value: 'SoftcompCRM, Painel, Monitor SEFAZ e Protheus no Fluxo de Caixa' },
          { name: 'Segurança web (RSA-OAEP, bcrypt, JWT, rate limit)', value: 'Fluxo de Caixa e Painel Softcomp' },
          { name: 'WhatsApp (WAHA) e telefonia com Asterisk', value: 'SoftcompCRM' },
          { name: 'Docker e Caddy', value: 'Deploy do Fluxo de Caixa e imagens do SoftcompCRM' },
          { name: 'Tributação do consumo (IBS, CBS e NF-e)', value: 'Guia da Reforma e Monitor SEFAZ' }
        ]
      },
      {
        label: 'Ferramentas',
        rows: [
          { name: 'Git e GitHub', value: 'Todos os projetos' },
          { name: 'Testes com Vitest, Playwright e Node', value: 'Almoxarifado (553 testes), CRM, Expedição e Calculadora' },
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
        id: 'proj-softcomp-painel',
        title: 'Painel Softcomp',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Gestão comercial e produção de uma indústria de corte de aço num só sistema, integrado ao ERP legado: vendas contra meta, mapa de clientes e análise regional, e programação automática do corte por máquina, galpão e turno. Fui o responsável de ponta a ponta, do banco ao deploy.',
        stack: 'TypeScript, React, Vite, Tailwind, Chart.js, MapLibre, Node.js com Express e Fastify, SQLite, Redis, Zod, Nginx, systemd e GitHub Actions'
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
        desc: 'Portal público de notas de versão do ERP, que substituiu uma planilha interna: linha do tempo com busca e filtros por módulo, painel com rascunho, publicação e histórico de edições, e 181 registros migrados da planilha.',
        stack: 'TypeScript, Next.js, React, Supabase (PostgreSQL com RLS, Auth e Storage), GitHub Actions e Vercel',
        imageAlt: 'Página pública do changelog da Softcomp com a linha do tempo e a nota mais recente'
      },
      {
        id: 'proj-calculadora-metais',
        title: 'Calculadora de Metais',
        kind: 'Front-end, Softcomp Sistemas',
        desc: 'Calcula na hora o peso teórico de 14 geometrias em mais de 30 materiais para cotação e vendas no ERP, aceita polegadas, bloqueia peças impossíveis e mostra a peça num visualizador 3D feito do zero em SVG, sem bibliotecas.',
        stack: 'React, Vite, JavaScript, CSS com design tokens, SVG e Node test runner',
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
        id: 'proj-softcomp-crm',
        title: 'SoftcompCRM',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Fork de um CRM open source com IA e WhatsApp, adaptado aos clientes da Softcomp: funil de várias empresas do mesmo dono numa tela, função SDR, API REST para o ERP documentada em OpenAPI e IA que atende ligações pelo Asterisk.',
        stack: 'TypeScript, Next.js, React, Supabase com PostgreSQL e RLS, WhatsApp via WAHA, Asterisk, Zod, Vitest, Playwright, Docker e GitHub Actions'
      },
      {
        id: 'proj-expedicao',
        title: 'App de Expedição',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Reconstrução do módulo de expedição de um ERP para coletores Android com leitor de código de barras: 9 módulos, retorno com toast, vibração e bip a cada leitura, regras no servidor e etiquetas em ZPL enviadas direto à impressora Zebra.',
        stack: 'TypeScript, React, Vite, TanStack Query, PWA, Node.js com Fastify, SQL Server, PDFKit, ZPL e Vitest',
        imageAlt: 'Tela inicial do app no coletor com os módulos de monitor de pedidos, recebimento, volumes, etiquetas e faturamento'
      },
      {
        id: 'proj-fluxo-caixa',
        title: 'Fluxo de Caixa',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Fluxo de caixa diário integrado ao TOTVS Protheus, com visão analítica, sintética e previsto x realizado, saldos bancários e exportação para Excel. Um BFF esconde as credenciais do ERP, e o login tem senha cifrada no navegador, JWT em cookie HttpOnly e auditoria.',
        stack: 'TypeScript, React, Vite, Tailwind, Chart.js, TanStack Virtual, Node.js com Express, Docker, Caddy e APIs REST do Protheus'
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
        id: 'proj-merlin',
        title: 'Merlin Route Finder',
        kind: 'Full stack, FIAP Challenge com a Leroy Merlin',
        desc: 'App para lojas grandes, aberto por QR Code no corredor: busca tolerante a erros, planta da loja com rota até a gôndola e um assistente com Gemini que só cita produtos que existem e sugere substituto quando a prateleira está vazia. Feito em equipe de cinco; cuidei do back-end, da arquitetura e da interface.',
        stack: 'Java 21, JAX-RS com Jersey, JDBC, Oracle, React, Vite, Google Gemini e Docker',
        imageAlt: 'Planta interativa da loja no celular, com a rota até os itens do roteiro de compras'
      },
      {
        id: 'proj-caixa-adega',
        title: 'Sistema de caixa e comandas',
        kind: 'Full stack, restaurante e adega',
        desc: 'PDV com comandas em tempo real: o garçom lança o pedido no celular, na mesa, e o caixa recebe na hora, fecha a conta e imprime o cupom na térmica de 80 mm. Sou o único desenvolvedor.',
        stack: 'React, TypeScript, Vite, Firebase, Chart.js e Vitest',
        imageAlt: 'Tela de entrada do sistema de caixa com os perfis Caixa, Garçom e Estatísticas'
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
