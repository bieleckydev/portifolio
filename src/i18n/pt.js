export const pt = {
  nav: {
    projects: 'Projetos',
    about: 'Sobre',
    experience: 'Experiência',
    contact: 'Contato',
    menu: 'Menu',
    close: 'Fechar',
    home: 'Eduardo Bielecky, voltar ao início',
    mainNav: 'Navegação principal',
    whatsapp: 'Conversar pelo WhatsApp'
  },
  hero: {
    lead: 'Desenvolvedor Java em formação. Construí o sistema de caixa que a Adega do Dino usa hoje.',
    facts: 'Estudante de Engenharia de Software em São Bernardo do Campo, SP. Procuro estágio ou vaga júnior.',
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
    live: 'Abrir o sistema',
    imageAlt: 'Tela de entrada do sistema de caixa da Adega do Dino com os perfis Caixa, Garçom e Estatísticas',
    caption: 'Tela de entrada do sistema, no celular.'
  },
  about: {
    title: 'Sobre Mim',
    p1: 'Sou estudante de Bacharelado em <strong>Engenharia de Software</strong> e resido em São Bernardo do Campo, SP. Tenho um perfil pragmático, focado em metas e dedicação contínua ao aprendizado de padrões de arquitetura, boas práticas de código e desenvolvimento backend robusto.',
    p2: 'Além do ecossistema de programação Java, sou entusiasta de <strong>hardware de alta performance</strong> (montagem, gerenciamento térmico e otimização de sistemas computacionais) e engenharia automotiva. Gosto de compreender profundamente o funcionamento e o desempenho por baixo dos panos.',
    educationTitle: 'Formação',
    educationDegree: 'Engenharia de Software',
    educationSub: 'Bacharelado em andamento',
    locationTitle: 'Localização',
    locationPlace: 'São Bernardo do Campo, SP',
    locationSub: 'Região Metropolitana',
    focusTitle: 'Foco Profissional',
    focusTarget: 'Estágio / Dev Java Jr',
    focusSub: 'Backend & Soluções'
  },
  skills: {
    title: 'Habilidades Técnicas',
    subtitle:
      'Passe o cursor sobre as tags flutuantes para inspecionar o resumo da experiência prática em projetos.',
    inspectAria: 'Ver detalhes de',
    viewHorizontal: 'Carrossel Horizontal',
    viewGrid: 'Grade',
    scrollHint: 'Role na horizontal ou use as setas para explorar as categorias',
    categories: [
      {
        id: 'skills-linguagens',
        title: 'Linguagens & Lógica',
        icon: 'fas fa-code',
        skills: [
          {
            id: 'skill-java',
            name: 'Java',
            project: 'Corretora Cripto & Projetos Acadêmicos',
            summary:
              'Desenvolvimento backend robusto, modelagem orientada a objetos (POO), lógica de transações financeiras e algoritmos de alta integridade.',
            featured: true
          },
          {
            id: 'skill-sql',
            name: 'SQL & Modelagem',
            project: 'Sistema de Caixa POS Adega',
            summary:
              'Construção de consultas estruturadas, modelagem relacional de estoque, persistência de vendas e histórico financeiro com consistência transacional.',
            featured: true
          },
          {
            id: 'skill-python',
            name: 'Python',
            project: 'Automação & Scripts de Dados',
            summary:
              'Criação de rotinas para manipulação de arquivos, automação de tarefas acadêmicas e algoritmos iniciais de processamento numérico.',
          }
        ]
      },
      {
        id: 'skills-ferramentas',
        title: 'Ferramentas & Ambientes',
        icon: 'fas fa-tools',
        skills: [
          {
            id: 'skill-intellij',
            name: 'IntelliJ IDEA',
            project: 'Ecossistema Java & Backend',
            summary:
              'Ambiente primário de desenvolvimento para depuração minuciosa, refatoração de classes, execução de testes e monitoramento de memória.',
            featured: true
          },
          {
            id: 'skill-git',
            name: 'Git & GitHub',
            project: 'Controle de Versão dos Projetos',
            summary:
              'Versionamento semântico, fluxo de branches, documentação de repositórios públicos (Caixa Adega, OTIS, Feira Online) e colaboração.',
            featured: true
          },
          {
            id: 'skill-vscode',
            name: 'VS Code',
            project: 'Cardápio Digital & Frontends',
            summary:
              'Desenvolvimento ágil de interfaces mobile-first, prototipagem rápida de layouts e edição de componentes web.',
          }
        ]
      },
      {
        id: 'skills-web',
        title: 'Desenvolvimento Web & POS',
        icon: 'fas fa-laptop-code',
        skills: [
          {
            id: 'skill-pos',
            name: 'Sistemas POS / Caixa',
            project: 'Sistema Caixa Adega (Em Produção)',
            summary:
              'Solução completa para restaurante com cálculo dinâmico de taxas, conciliação e integração para impressão térmica de comprovantes e relatórios.',
            featured: true
          },
          {
            id: 'skill-mobile-first',
            name: 'Arquitetura Mobile-First',
            project: 'Cardápio Digital Dino & OTIS',
            summary:
              'Interfaces responsivas de carregamento instantâneo, adaptadas para operação tátil rápida sob alto volume de clientes e pedidos.',
            featured: true
          },
          {
            id: 'skill-apis',
            name: 'Integração de APIs',
            project: 'Formulários & Serviços Assíncronos',
            summary:
              'Comunicação HTTP assíncrona, validação rigorosa de payloads client-side e tratamento resiliente de respostas e erros.',
          }
        ]
      },
      {
        id: 'skills-hardware-metodologias',
        title: 'Hardware & Engenharia Operacional',
        icon: 'fas fa-microchip',
        skills: [
          {
            id: 'skill-hardware',
            name: 'Hardware de Alta Performance',
            project: 'Prática Independente 2024-2025',
            summary:
              'Dimensionamento térmico, montagem de setups computacionais avançados, overclocking seguro, análise de estabilidade e testes sob estresse severo.',
            featured: true
          },
          {
            id: 'skill-agile',
            name: 'Metodologias Ágeis (Trello)',
            project: 'Organização de Entregas & Sprints',
            summary:
              'Gestão de backlog, divisão de entregas em cartões kanban, acompanhamento de bloqueios e fluxo iterativo de desenvolvimento.',
          },
          {
            id: 'skill-office',
            name: 'Gestão de Dados & Estoque',
            project: 'Operações Adega do Dino',
            summary:
              'Estruturação de planilhas dinâmicas para controle de estoque, cálculo de custos operacionais e padronização de inventário.',
          },
          {
            id: 'skill-idiomas',
            name: 'Inglês Técnico',
            project: 'Documentações Oficiais & RFCs',
            summary:
              'Leitura fluente de documentações técnicas de APIs, manuais de arquitetura Java, padrões de projeto e comunidades globais de software.',
          }
        ]
      }
    ]
  },
  experience: {
    title: 'Experiência Profissional',
    viewHorizontal: 'Trilha Horizontal',
    viewVertical: 'Lista Vertical',
    scrollHint: 'Role na horizontal ou use as setas para navegar pela trajetória',
    items: [
      {
        id: 'exp-adega',
        date: 'Experiência Recente',
        title: 'Atendimento e Operações',
        company: 'Churrascaria Adega do Dino',
        details: [
          'Gestão de atendimento ao cliente em ambiente de alto volume, demonstrando grande capacidade de comunicação e trabalho sob pressão.',
          'Desenvolvimento e manutenção de planilhas para controle de estoque e organização de dados internos, aplicando raciocínio lógico e gestão de informações.',
          'Auxílio na comunicação digital e estruturação de anúncios da unidade.'
        ],
        tags: ['Comunicação', 'Trabalho em Equipe', 'Organização de Dados']
      },
      {
        id: 'exp-hardware',
        date: 'Nov 2024 - 2025',
        title: 'Especialista em Hardware',
        company: 'Prática Independente',
        details: [
          'Montagem, configuração e testes de sistemas computacionais avançados.',
          'Otimização de sistemas operacionais e gestão de componentes térmicos.',
          'Infraestrutura de hardware com foco em processamento intensivo e estabilidade.'
        ],
        tags: ['Otimização de Sistemas', 'Arquitetura de PCs', 'Diagnóstico']
      }
    ]
  },
  projects: {
    title: 'Projetos em Destaque',
    subtitle:
      'Soluções de software desenvolvidas com rigor técnico, arquitetura modular e aplicação prática no mundo real.',
    accessBtn: 'Acessar Projeto',
    codeBtn: 'Código Fonte',
    keyTechLabel: 'Tecnologias-Chave',
    architectureLabel: 'Arquitetura',
    filterAll: 'Todos',
    filterJava: 'Java & Backend',
    filterPos: 'POS & Automação',
    filterFrontend: 'Frontend & Mobile',
    viewHorizontal: 'Pista Horizontal',
    viewGrid: 'Grade',
    scrollHint: 'Navegue na horizontal arrastando, rolando o mouse ou pelas setas',
    prevBtn: 'Anterior',
    nextBtn: 'Próximo',
    githubActivity: {
      badge: 'Telemetria GitHub',
      title: 'Atividade Recente nos Repositórios',
      subtitle: 'Sincronização em tempo real via GitHub REST API com contagem de estrelas, forks e histórico do último commit.',
      refreshBtn: 'Atualizar Dados',
      refreshing: 'Sincronizando...',
      viewRepo: 'Repositório',
      viewCommit: 'Ver Commit',
      lastCommitLabel: 'Último Commit',
      starsLabel: 'Estrelas',
      branchLabel: 'Branch',
      privateBadge: 'Repositório Privado',
      syncedJustNow: 'Sincronizado agora mesmo',
      cachedNotice: 'Cache local ativo para economia de requisições'
    },
    items: [
      {
        id: 'proj-caixa-adega',
        title: 'Sistema de Caixa POS',
        category: 'Sistemas POS & Automação',
        architecture: 'Arquitetura Web • Impressão Térmica ESC/POS • WebSocket',
        desc: 'Sistema de Ponto de Venda web focado em acessibilidade e alta performance, desenvolvido para restaurante em operação real. Conta com cálculo dinâmico de taxas, fechamento ágil e integração direta para impressão térmica de recibos e relatórios.',
        statusBadge: 'Em Produção',
        keyTech: [
          { name: 'JavaScript ES6+', icon: 'fab fa-js', role: 'Motor de Caixa' },
          { name: 'Hardware ESC/POS', icon: 'fas fa-print', role: 'Impressão Térmica' },
          { name: 'REST & Webhooks', icon: 'fas fa-network-wired', role: 'Integrações' },
          { name: 'CSS3 Grid / Flex', icon: 'fab fa-css3-alt', role: 'Layout Tátil' }
        ],
        tags: ['Web App', 'Sistema POS', 'Impressão Térmica', 'JavaScript']
      },
      {
        id: 'proj-cardapio-digital',
        title: 'Cardápio Digital Premium',
        category: 'Frontend Mobile-First',
        architecture: 'SPA Leve • 60 FPS • Carregamento Instantâneo',
        desc: 'Cardápio digital mobile-first com design moderno, arquitetura leve e alta performance para a Adega e Churrascaria do Dino. Focado na experiência do cliente, incluindo visualização refinada de cortes nobres e fluxo de pedidos ágil.',
        statusBadge: 'Adega do Dino',
        keyTech: [
          { name: 'Mobile-First UX', icon: 'fas fa-mobile-alt', role: 'Interface Tátil' },
          { name: 'JavaScript Modular', icon: 'fab fa-js', role: 'Carrinho Reativo' },
          { name: 'CSS3 Custom Tokens', icon: 'fab fa-css3-alt', role: 'Design System' },
          { name: 'HTML5 Semântico', icon: 'fab fa-html5', role: 'Acessibilidade' }
        ],
        tags: ['Frontend', 'Mobile-first', 'UI / UX', 'JavaScript']
      },
      {
        id: 'proj-cripto',
        title: 'Simulador de Corretora Cripto (Aurum Banking)',
        category: 'Engenharia Backend & FinTech',
        architecture: 'Orientação a Objetos • Casamento de Ordens • Validações',
        desc: 'Plataforma para simulação e gestão de ativos digitais desenvolvida com rigor acadêmico em Engenharia de Software. Possui motor de simulação de carteira, validação transacional e interface funcional intuitiva.',
        statusBadge: 'Core Backend',
        keyTech: [
          { name: 'Java (JDK)', icon: 'fab fa-java', role: 'POO & Lógica Core' },
          { name: 'Estrutura de Dados', icon: 'fas fa-cubes', role: 'Livro de Ofertas' },
          { name: 'Casamento de Ordens', icon: 'fas fa-microchip', role: 'Algoritmos' },
          { name: 'Controle Transacional', icon: 'fas fa-shield-alt', role: 'Gestão de Saldo' }
        ],
        tags: ['Java', 'POO', 'FinTech', 'Estrutura de Dados']
      },
      {
        id: 'proj-otis',
        title: 'Sistema OTIS',
        category: 'Dashboard Corporativo',
        architecture: 'Dashboard Responsivo • Gestão de Status • Deploy Vercel',
        desc: 'Plataforma e sistema corporativo desenvolvidos com foco em interface de usuário amigável, arquitetura limpa e monitoramento operacional. Projeto completo hospedado e disponível para acesso online.',
        statusBadge: 'Deploy Ativo',
        keyTech: [
          { name: 'JavaScript', icon: 'fab fa-js', role: 'Interatividade' },
          { name: 'CSS3 Moderno', icon: 'fab fa-css3-alt', role: 'Layout Dashboard' },
          { name: 'UI / UX Design', icon: 'fas fa-desktop', role: 'Painel Intuitivo' },
          { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: 'CI / CD' }
        ],
        tags: ['Web App', 'Dashboard', 'Frontend', 'Vercel']
      },
      {
        id: 'proj-feira',
        title: 'Feira Online',
        category: 'Plataforma E-Commerce',
        architecture: 'Catálogo de Produtos • Carrinho Dinâmico • Checkout',
        desc: 'Plataforma digital para ambiente de feira online, permitindo interatividade ágil, seleção de produtos frescos e experiência de e-commerce aos usuários.',
        statusBadge: 'Deploy Ativo',
        keyTech: [
          { name: 'JavaScript Assíncrono', icon: 'fab fa-js', role: 'Lógica de Carrinho' },
          { name: 'HTML5 Semântico', icon: 'fab fa-html5', role: 'Catálogo Grid' },
          { name: 'CSS3 Responsivo', icon: 'fab fa-css3-alt', role: 'Interface' },
          { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: 'Hospedagem' }
        ],
        tags: ['E-commerce', 'Web', 'Carrinho de Compras']
      },
      {
        id: 'proj-ready2work',
        title: 'Ready 2 Work',
        category: 'Plataforma de Carreira Tech',
        architecture: 'Simulador de Entrevista • Match de Competências • Guias',
        desc: 'Aplicação focada no preparo para o mercado de tecnologia, oferecendo simuladores práticos de avaliação técnica e auxílio estruturado à empregabilidade de futuros engenheiros.',
        statusBadge: 'Open Source',
        keyTech: [
          { name: 'Java / Backend', icon: 'fab fa-java', role: 'Trilha Técnica' },
          { name: 'JavaScript Web', icon: 'fab fa-js', role: 'Interface' },
          { name: 'Git & Open Source', icon: 'fab fa-github', role: 'Repositório' },
          { name: 'Metodologias Ágeis', icon: 'fas fa-tasks', role: 'Planejamento' }
        ],
        tags: ['App', 'Mercado Tech', 'Java', 'Empregabilidade']
      },
      {
        id: 'proj-kcal',
        title: 'kcal.io',
        category: 'Nutrição & Saúde Digital',
        architecture: 'Rastreamento Calórico • Metas de Macros • Interface Reativa',
        desc: 'Aplicação web para monitoramento nutricional e déficit/superávit calórico diário. Permite aos usuários calcular necessidades energéticas basais, registrar refeições diárias, acompanhar metas personalizadas de macronutrientes (proteínas, carboidratos e gorduras) com visualização em tempo real.',
        statusBadge: 'Web App',
        keyTech: [
          { name: 'JavaScript ES6+', icon: 'fab fa-js', role: 'Motor Reativo' },
          { name: 'Cálculo de Macros', icon: 'fas fa-calculator', role: 'Balanço Energético' },
          { name: 'CSS3 Design System', icon: 'fab fa-css3-alt', role: 'UI / UX Telemetria' },
          { name: 'Deploy Vercel', icon: 'fas fa-cloud', role: 'Hospedagem & CI/CD' }
        ],
        tags: ['Web App', 'Nutrição', 'Fitness', 'Macronutrientes']
      },
      {
        id: 'proj-guia-cidadao',
        title: 'GuiaCidadão',
        category: 'Plataforma Cívica & Benefícios',
        architecture: 'Triagem Rápida • Motor de Elegibilidade • Acesso Institucional',
        desc: 'Plataforma digital voltada à inclusão social e cidadania ativa com ferramenta de Triagem Rápida em 1 minuto sem cadastro prévio. Analisa critérios socioeconômicos e identifica programas e benefícios públicos aos quais o cidadão tem direito, contando também com portal multiperfil de autenticação segura para cidadãos e colaboradores.',
        statusBadge: 'Repositório',
        keyTech: [
          { name: 'JavaScript Modular', icon: 'fab fa-js', role: 'Fluxo de Triagem' },
          { name: 'Regras de Elegibilidade', icon: 'fas fa-shield-alt', role: 'Motor de Decisão' },
          { name: 'Acesso Multiperfil', icon: 'fas fa-users-cog', role: 'Cidadão & Colaborador' },
          { name: 'CSS3 / Acessibilidade', icon: 'fab fa-css3-alt', role: 'Design Cívico Inclusivo' }
        ],
        tags: ['Cidadania', 'Benefícios Sociais', 'Triagem Rápida', 'Acessibilidade']
      }
    ]
  },
  contact: {
    title: 'Vamos Conversar?',
    description:
      'Estou disponível para oportunidades de estágio e projetos em Engenharia de Software e Java. Envie seu e-mail abaixo ou conecte-se diretamente através das minhas redes.',
    placeholder: 'Digite seu e-mail para contato...',
    submitBtn: 'Conectar',
    submittingBtn: 'Enviando',
    successTitle: 'Contato Enviado',
    successTextPrefix: 'Obrigado! Retornarei para ',
    successTextSuffix: ' com brevidade.',
    resetBtn: 'Enviar outro e-mail',
    emptyError: 'Por favor, informe seu endereço de e-mail.',
    invalidError: 'Por favor, informe um e-mail válido (ex: seu.nome@empresa.com).',
    networkError:
      'Houve uma oscilação na rede. Você também pode usar o botão "Enviar E-mail Direto" abaixo.',
    directDivider: 'OU CANAIS DIRETOS',
    directEmailBtn: 'Enviar E-mail Direto'
  },
  telemetry: {
    tag: 'TEL // HUD',
    coords: '23°41\'S 46°33\'W',
    scroll: 'SCROLL',
    sections: {
      hero: 'INÍCIO',
      sobre: 'SOBRE',
      habilidades: 'SKILLS',
      experiencia: 'HISTÓRICO',
      projetos: 'PROJETOS',
      contato: 'CONTATO'
    }
  },
  footer: {
    copyright: 'Eduardo Mota Bielecky da Silva Mello.',
    note: 'Engenharia de Software // Java & Backend'
  }
};
