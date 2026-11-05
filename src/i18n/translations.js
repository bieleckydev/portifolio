export const TRANSLATIONS = {
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
      themeToggle: 'Alternar tema',
      menuToggle: 'Abrir menu de navegação'
    },
    hero: {
      tagline: 'Portfólio // Dev Java & Software',
      nameFirst: 'Eduardo Mota',
      nameLast: 'Bielecky da Silva Mello',
      roles: [
        'Estudante de Engenharia de Software',
        'Desenvolvedor Java',
        'Entusiasta de Hardware'
      ],
      summary:
        'Busco oportunidades como Estagiário ou Desenvolvedor Júnior com foco em Java. Compromisso com arquitetura limpa, alta performance e soluções eficientes.',
      contactBtn: 'Entrar em Contato',
      projectsBtn: 'Ver Projetos',
      connect: 'Conectar:',
      caption: 'SP // BRASIL',
      explore: 'EXPLORAR'
    },
    marquees: {
      m1: 'EDUARDO MOTA • ENGENHARIA DE SOFTWARE • DESENVOLVEDOR JAVA • HIGH PERFORMANCE COMPUTING • ARQUITETURA LIMPA •',
      m2: 'BACKEND ROBUSTO • RESILIÊNCIA • SPRING FRAMEWORK • SQL • ALGORITMOS & ESTRUTURAS • SÃO PAULO, BR •'
    },
    about: {
      watermark: '01',
      label: '01 // Trajetória',
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
      watermark: '02',
      label: '02 // Competências',
      title: 'Habilidades Técnicas',
      subtitle:
        'Passe o cursor sobre as tags flutuantes para inspecionar o resumo da experiência prática em projetos.',
      realAppBadge: 'Aplicação Real',
      inspectorTag: 'INSPEÇÃO DE EXPERIÊNCIA',
      inspectorContext: 'Projeto / Contexto:',
      inspectorBtn: 'Ver Projetos Relacionados',
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
              badge: 'Core Stack',
              featured: true
            },
            {
              id: 'skill-sql',
              name: 'SQL & Modelagem',
              project: 'Sistema de Caixa POS Adega',
              summary:
                'Construção de consultas estruturadas, modelagem relacional de estoque, persistência de vendas e histórico financeiro com consistência transacional.',
              badge: 'Banco de Dados',
              featured: true
            },
            {
              id: 'skill-python',
              name: 'Python',
              project: 'Automação & Scripts de Dados',
              summary:
                'Criação de rotinas para manipulação de arquivos, automação de tarefas acadêmicas e algoritmos iniciais de processamento numérico.',
              badge: 'Em Evolução'
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
              badge: 'IDE Principal',
              featured: true
            },
            {
              id: 'skill-git',
              name: 'Git & GitHub',
              project: 'Controle de Versão dos Projetos',
              summary:
                'Versionamento semântico, fluxo de branches, documentação de repositórios públicos (Caixa Adega, OTIS, Feira Online) e colaboração.',
              badge: 'Versionamento',
              featured: true
            },
            {
              id: 'skill-vscode',
              name: 'VS Code',
              project: 'Cardápio Digital & Frontends',
              summary:
                'Desenvolvimento ágil de interfaces mobile-first, prototipagem rápida de layouts e edição de componentes web.',
              badge: 'Produtividade'
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
              badge: 'Produção Real',
              featured: true
            },
            {
              id: 'skill-mobile-first',
              name: 'Arquitetura Mobile-First',
              project: 'Cardápio Digital Dino & OTIS',
              summary:
                'Interfaces responsivas de carregamento instantâneo, adaptadas para operação tátil rápida sob alto volume de clientes e pedidos.',
              badge: 'UX / UI',
              featured: true
            },
            {
              id: 'skill-apis',
              name: 'Integração de APIs',
              project: 'Formulários & Serviços Assíncronos',
              summary:
                'Comunicação HTTP assíncrona, validação rigorosa de payloads client-side e tratamento resiliente de respostas e erros.',
              badge: 'Integrações'
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
              badge: 'Especialista',
              featured: true
            },
            {
              id: 'skill-agile',
              name: 'Metodologias Ágeis (Trello)',
              project: 'Organização de Entregas & Sprints',
              summary:
                'Gestão de backlog, divisão de entregas em cartões kanban, acompanhamento de bloqueios e fluxo iterativo de desenvolvimento.',
              badge: 'Processos'
            },
            {
              id: 'skill-office',
              name: 'Gestão de Dados & Estoque',
              project: 'Operações Adega do Dino',
              summary:
                'Estruturação de planilhas dinâmicas para controle de estoque, cálculo de custos operacionais e padronização de inventário.',
              badge: 'Operações'
            },
            {
              id: 'skill-idiomas',
              name: 'Inglês Técnico',
              project: 'Documentações Oficiais & RFCs',
              summary:
                'Leitura fluente de documentações técnicas de APIs, manuais de arquitetura Java, padrões de projeto e comunidades globais de software.',
              badge: 'Comunicação'
            }
          ]
        }
      ]
    },
    experience: {
      watermark: '03',
      label: '03 // Carreira',
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
      watermark: '04',
      label: '04 // Portfólio',
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
        liveStatus: 'API Sincronizada',
        reposTracked: 'Repositórios Conectados',
        totalStars: 'Estrelas no GitHub',
        totalForks: 'Forks Registrados',
        latestCommit: 'Último Commit Global',
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
      watermark: '05',
      label: '05 // Conexão',
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
  },

  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
      themeToggle: 'Toggle theme',
      menuToggle: 'Open navigation menu'
    },
    hero: {
      tagline: 'Portfolio // Java & Software Dev',
      nameFirst: 'Eduardo Mota',
      nameLast: 'Bielecky da Silva Mello',
      roles: [
        'Software Engineering Student',
        'Java Backend Developer',
        'Hardware Enthusiast'
      ],
      summary:
        'Seeking internship or junior opportunities focused on Java backend development. Dedicated to clean architecture, high performance, and robust software engineering.',
      contactBtn: 'Get in Touch',
      projectsBtn: 'View Projects',
      connect: 'Connect:',
      caption: 'SP // BRAZIL',
      explore: 'EXPLORE'
    },
    marquees: {
      m1: 'EDUARDO MOTA • SOFTWARE ENGINEERING • JAVA DEVELOPER • HIGH PERFORMANCE COMPUTING • CLEAN ARCHITECTURE •',
      m2: 'ROBUST BACKEND • RESILIENCE • SPRING FRAMEWORK • SQL • ALGORITHMS & DATA STRUCTURES • SÃO PAULO, BR •'
    },
    about: {
      watermark: '01',
      label: '01 // Journey',
      title: 'About Me',
      p1: 'I am a Bachelor student in <strong>Software Engineering</strong> residing in São Bernardo do Campo, SP, Brazil. I maintain a pragmatic, goal-driven mindset with dedication to software architectural patterns, clean coding practices, and resilient backend systems.',
      p2: 'Beyond the Java development ecosystem, I am a passionate enthusiast of <strong>high-performance computer hardware</strong> (system building, thermal optimization, stress analysis) and automotive engineering. I enjoy understanding how hardware and software work together under the hood.',
      educationTitle: 'Education',
      educationDegree: 'Software Engineering',
      educationSub: 'B.S. in Progress',
      locationTitle: 'Location',
      locationPlace: 'São Bernardo do Campo, SP',
      locationSub: 'Greater São Paulo, Brazil',
      focusTitle: 'Professional Focus',
      focusTarget: 'Internship / Jr Java Dev',
      focusSub: 'Backend & Systems'
    },
    skills: {
      watermark: '02',
      label: '02 // Competencies',
      title: 'Technical Skills',
      subtitle:
        'Hover over the floating tags to inspect practical project experience and architectural summaries.',
      realAppBadge: 'Real-World App',
      inspectorTag: 'EXPERIENCE INSPECTOR',
      inspectorContext: 'Project / Context:',
      inspectorBtn: 'View Related Projects',
      viewHorizontal: 'Horizontal Carousel',
      viewGrid: 'Grid View',
      scrollHint: 'Scroll horizontally or use arrows to explore skill categories',
      categories: [
        {
          id: 'skills-linguagens',
          title: 'Languages & Logic',
          icon: 'fas fa-code',
          skills: [
            {
              id: 'skill-java',
              name: 'Java',
              project: 'Crypto Exchange & Academic Core',
              summary:
                'Robust backend development, object-oriented design (OOP), financial transaction business rules, and high-integrity algorithms.',
              badge: 'Core Stack',
              featured: true
            },
            {
              id: 'skill-sql',
              name: 'SQL & Data Modeling',
              project: 'POS Cash Register System',
              summary:
                'Structured queries, relational inventory modeling, sales persistence, and transaction audit trails with ACID consistency.',
              badge: 'Database',
              featured: true
            },
            {
              id: 'skill-python',
              name: 'Python',
              project: 'Automation & Data Scripts',
              summary:
                'Automated file processing routines, academic task automations, and foundational numerical data algorithms.',
              badge: 'Growing'
            }
          ]
        },
        {
          id: 'skills-ferramentas',
          title: 'Tools & Environments',
          icon: 'fas fa-tools',
          skills: [
            {
              id: 'skill-intellij',
              name: 'IntelliJ IDEA',
              project: 'Java Ecosystem & Backend',
              summary:
                'Primary development IDE for in-depth debugging, class refactoring, unit test execution, and memory profile inspection.',
              badge: 'Primary IDE',
              featured: true
            },
            {
              id: 'skill-git',
              name: 'Git & GitHub',
              project: 'Version Control on All Projects',
              summary:
                'Semantic versioning, branch management, public repository documentation (Caixa Adega, OTIS, Feira Online), and collaboration.',
              badge: 'Version Control',
              featured: true
            },
            {
              id: 'skill-vscode',
              name: 'VS Code',
              project: 'Digital Menu & Web Frontends',
              summary:
                'Agile prototyping of mobile-first interfaces, rapid layout engineering, and modern web component editing.',
              badge: 'Productivity'
            }
          ]
        },
        {
          id: 'skills-web',
          title: 'Web Development & POS',
          icon: 'fas fa-laptop-code',
          skills: [
            {
              id: 'skill-pos',
              name: 'POS Cashier Systems',
              project: 'Adega POS System (In Production)',
              summary:
                'End-to-end restaurant POS with dynamic fee calculation, quick register closing, and thermal receipt/report printing integration.',
              badge: 'Live Production',
              featured: true
            },
            {
              id: 'skill-mobile-first',
              name: 'Mobile-First Architecture',
              project: 'Dino Digital Menu & OTIS',
              summary:
                'Instant-load responsive web apps optimized for fast touchscreen operations under peak customer order volumes.',
              badge: 'UX / UI',
              featured: true
            },
            {
              id: 'skill-apis',
              name: 'API Integrations',
              project: 'Forms & Asynchronous Endpoints',
              summary:
                'Asynchronous HTTP networking, strict client-side payload validation, and resilient error recovery patterns.',
              badge: 'Integrations'
            }
          ]
        },
        {
          id: 'skills-hardware-metodologias',
          title: 'Hardware & Systems Engineering',
          icon: 'fas fa-microchip',
          skills: [
            {
              id: 'skill-hardware',
              name: 'High-Performance Hardware',
              project: 'Independent Practice 2024-2025',
              summary:
                'Thermal dynamics, high-end PC assembly, safe overclocking, stability benchmarking, and stress diagnostic workflows.',
              badge: 'Specialist',
              featured: true
            },
            {
              id: 'skill-agile',
              name: 'Agile Workflows (Trello)',
              project: 'Sprint & Delivery Management',
              summary:
                'Backlog grooming, kanban task breakdown, impediment tracking, and iterative release cadences.',
              badge: 'Methodologies'
            },
            {
              id: 'skill-office',
              name: 'Data & Inventory Operations',
              project: 'Adega do Dino Business Operations',
              summary:
                'Dynamic spreadsheets for stock tracking, operating cost analysis, and catalog standardization.',
              badge: 'Operations'
            },
            {
              id: 'skill-idiomas',
              name: 'Technical English',
              project: 'Official Docs & RFC Standards',
              summary:
                'Fluent reading of technical API documentation, Java architecture manuals, design patterns, and global dev forums.',
              badge: 'Language'
            }
          ]
        }
      ]
    },
    experience: {
      watermark: '03',
      label: '03 // Career',
      title: 'Professional Experience',
      viewHorizontal: 'Horizontal Roadmap',
      viewVertical: 'Vertical List',
      scrollHint: 'Scroll horizontally or use arrows to navigate career milestones',
      items: [
        {
          id: 'exp-adega',
          date: 'Recent Experience',
          title: 'Customer Operations & Management',
          company: 'Churrascaria Adega do Dino',
          details: [
            'Customer service operations in a high-volume restaurant environment, demonstrating strong interpersonal communication under peak pressure.',
            'Creation and management of dynamic spreadsheets for stock auditing and operational data organization.',
            'Assistance in local digital announcements, menu updates, and customer communications.'
          ],
          tags: ['Communication', 'Teamwork', 'Data Management']
        },
        {
          id: 'exp-hardware',
          date: 'Nov 2024 - 2025',
          title: 'Hardware & Systems Specialist',
          company: 'Independent Practice',
          details: [
            'Custom assembly, BIOS configuration, and stress testing of advanced computing workstations.',
            'Operating system optimization, firmware tuning, and thermal dissipation management.',
            'Hardware infrastructure built for sustained high-intensity computation and zero downtime.'
          ],
          tags: ['System Optimization', 'PC Architecture', 'Diagnostics']
        }
      ]
    },
    projects: {
      watermark: '04',
      label: '04 // Portfolio',
      title: 'Featured Projects',
      subtitle:
        'Software solutions engineered with architectural rigor, modularity, and real-world production utility.',
      accessBtn: 'Live Demo',
      codeBtn: 'Source Code',
      keyTechLabel: 'Key Technologies',
      architectureLabel: 'Architecture',
      filterAll: 'All',
      filterJava: 'Java & Backend',
      filterPos: 'POS & Automation',
      filterFrontend: 'Frontend & Mobile',
      viewHorizontal: 'Horizontal Runway',
      viewGrid: 'Grid View',
      scrollHint: 'Explore horizontally by dragging, scrolling mousewheel, or using arrows',
      prevBtn: 'Previous',
      nextBtn: 'Next',
      githubActivity: {
        badge: 'GitHub Telemetry',
        title: 'Latest Repository Activity',
        subtitle: 'Real-time telemetry via GitHub REST API — star counts, forks, and latest commit timelines.',
        liveStatus: 'API Synchronized',
        reposTracked: 'Connected Repos',
        totalStars: 'GitHub Stars',
        totalForks: 'Total Forks',
        latestCommit: 'Latest Global Commit',
        refreshBtn: 'Refresh Data',
        refreshing: 'Syncing...',
        viewRepo: 'Repository',
        viewCommit: 'View Commit',
        lastCommitLabel: 'Last Commit',
        starsLabel: 'Stars',
        branchLabel: 'Branch',
        privateBadge: 'Private Repository',
        syncedJustNow: 'Synchronized just now',
        cachedNotice: 'Local cache active to preserve API rate limits'
      },
      items: [
        {
          id: 'proj-caixa-adega',
          title: 'POS Cashier System',
          category: 'POS & Commercial Automation',
          architecture: 'Web Architecture • ESC/POS Thermal Printing • WebSockets',
          desc: 'High-performance web Point-of-Sale built for restaurant operations in active production. Features dynamic tax/tip calculation, rapid balance closing, and direct integration with thermal receipt and report printers.',
          statusBadge: 'In Production',
          keyTech: [
            { name: 'JavaScript ES6+', icon: 'fab fa-js', role: 'Cashier Core Engine' },
            { name: 'Hardware ESC/POS', icon: 'fas fa-print', role: 'Thermal Printing' },
            { name: 'REST & Webhooks', icon: 'fas fa-network-wired', role: 'Integrations' },
            { name: 'CSS3 Grid / Flex', icon: 'fab fa-css3-alt', role: 'Touch UI' }
          ],
          tags: ['Web App', 'POS System', 'Thermal Printing', 'JavaScript']
        },
        {
          id: 'proj-cardapio-digital',
          title: 'Premium Digital Menu',
          category: 'Mobile-First Frontend',
          architecture: 'Lightweight SPA • 60 FPS • Instant Asset Loading',
          desc: 'Mobile-first digital menu with sleek responsive design, lightweight architecture, and instant load times for Adega e Churrascaria do Dino. Optimized for high-conversion dining experiences and smooth ordering.',
          statusBadge: 'Adega do Dino',
          keyTech: [
            { name: 'Mobile-First UX', icon: 'fas fa-mobile-alt', role: 'Touch Interface' },
            { name: 'Modular JavaScript', icon: 'fab fa-js', role: 'Reactive Cart' },
            { name: 'CSS3 Custom Tokens', icon: 'fab fa-css3-alt', role: 'Design System' },
            { name: 'Semantic HTML5', icon: 'fab fa-html5', role: 'Accessibility' }
          ],
          tags: ['Frontend', 'Mobile-first', 'UI / UX', 'JavaScript']
        },
        {
          id: 'proj-cripto',
          title: 'Crypto Brokerage Platform (Aurum Banking)',
          category: 'Backend & FinTech Engine',
          architecture: 'OOP Architecture • Order Matching Engine • Balance Auditing',
          desc: 'Academic software engineering platform simulating digital asset trading, portfolio balances, and educational investment pathways with robust business logic and algorithmic order matching.',
          statusBadge: 'Core Backend',
          keyTech: [
            { name: 'Java (JDK)', icon: 'fab fa-java', role: 'OOP & Core Logic' },
            { name: 'Data Structures', icon: 'fas fa-cubes', role: 'Order Book Bookkeeping' },
            { name: 'Order Matching', icon: 'fas fa-microchip', role: 'Algorithmic Engine' },
            { name: 'Transaction Control', icon: 'fas fa-shield-alt', role: 'Balance Validation' }
          ],
          tags: ['Java', 'OOP', 'FinTech', 'Data Structures']
        },
        {
          id: 'proj-otis',
          title: 'OTIS Enterprise Platform',
          category: 'Corporate Dashboard',
          architecture: 'Responsive Dashboard • State Management • Vercel CI/CD',
          desc: 'Enterprise web application and operational dashboard engineered with clean architecture, user-friendly control surfaces, and continuous deployment.',
          statusBadge: 'Live Deploy',
          keyTech: [
            { name: 'JavaScript', icon: 'fab fa-js', role: 'Interactivity' },
            { name: 'Modern CSS3', icon: 'fab fa-css3-alt', role: 'Dashboard Layout' },
            { name: 'UI / UX Design', icon: 'fas fa-desktop', role: 'Intuitive Views' },
            { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: 'CI / CD Pipeline' }
          ],
          tags: ['Web App', 'Dashboard', 'Frontend', 'Vercel']
        },
        {
          id: 'proj-feira',
          title: 'Online Fair Market',
          category: 'E-Commerce Platform',
          architecture: 'Product Catalog • Dynamic Cart • Order Flow',
          desc: 'Interactive digital marketplace simulating open-air farmers market shopping with streamlined product inspection and smooth e-commerce ordering.',
          statusBadge: 'Live Deploy',
          keyTech: [
            { name: 'Async JavaScript', icon: 'fab fa-js', role: 'Cart State Logic' },
            { name: 'Semantic HTML5', icon: 'fab fa-html5', role: 'Catalog Grid' },
            { name: 'Responsive CSS3', icon: 'fab fa-css3-alt', role: 'Fluid Layout' },
            { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: 'Cloud Hosting' }
          ],
          tags: ['E-commerce', 'Web', 'Shopping Cart']
        },
        {
          id: 'proj-ready2work',
          title: 'Ready 2 Work',
          category: 'Tech Career Platform',
          architecture: 'Technical Assessment • Candidate Match • Career Pathways',
          desc: 'Job-readiness utility application designed to prepare engineering students and junior developers for technical interviews and corporate hiring pipelines.',
          statusBadge: 'Open Source',
          keyTech: [
            { name: 'Java / Backend', icon: 'fab fa-java', role: 'Technical Tracks' },
            { name: 'JavaScript Web', icon: 'fab fa-js', role: 'Interactive View' },
            { name: 'Git & Open Source', icon: 'fab fa-github', role: 'Public Repo' },
            { name: 'Agile Best Practices', icon: 'fas fa-tasks', role: 'Planning' }
          ],
          tags: ['App', 'Tech Career', 'Java', 'Employability']
        },
        {
          id: 'proj-kcal',
          title: 'kcal.io',
          category: 'Digital Nutrition & Health',
          architecture: 'Calorie Tracking • Daily Macro Targets • Reactive HUD',
          desc: 'Web application designed for daily nutritional tracking and caloric balance management. Allows users to compute basal metabolic targets, log meals, track customized macronutrient breakdowns (protein, carbs, fats), and monitor daily nutritional progress with an intuitive, responsive interface.',
          statusBadge: 'Web App',
          keyTech: [
            { name: 'Modern JavaScript', icon: 'fab fa-js', role: 'Reactive Core Engine' },
            { name: 'Macro Computation', icon: 'fas fa-calculator', role: 'Caloric Balance' },
            { name: 'CSS3 Design System', icon: 'fab fa-css3-alt', role: 'Telemetry UI / UX' },
            { name: 'Vercel Deployment', icon: 'fas fa-cloud', role: 'Continuous Delivery' }
          ],
          tags: ['Web App', 'Nutrition', 'Fitness', 'Macronutrients']
        },
        {
          id: 'proj-guia-cidadao',
          title: 'GuiaCidadão',
          category: 'Civic Platform & Social Benefits',
          architecture: 'Quick Screening • Eligibility Engine • Institutional Portal',
          desc: 'Civic engagement and public assistance platform featuring a 60-second Quick Screening tool requiring no prior registration. Automatically assesses socioeconomic criteria to identify public assistance benefits and grants that citizens qualify for, alongside dual-role authentication for citizens and public servants.',
          statusBadge: 'Repository',
          keyTech: [
            { name: 'Modular JavaScript', icon: 'fab fa-js', role: 'Screening Workflow' },
            { name: 'Eligibility Engine', icon: 'fas fa-shield-alt', role: 'Decision Algorithm' },
            { name: 'Multi-Role Access', icon: 'fas fa-users-cog', role: 'Citizen & Staff Portal' },
            { name: 'CSS3 / Accessibility', icon: 'fab fa-css3-alt', role: 'Inclusive Civic Design' }
          ],
          tags: ['Civic Tech', 'Social Benefits', 'Quick Triage', 'Accessibility']
        }
      ]
    },
    contact: {
      watermark: '05',
      label: '05 // Connect',
      title: "Let's Connect",
      description:
        'I am available for software engineering internships, junior Java developer positions, and technical collaborations. Enter your email below or reach out directly.',
      placeholder: 'Enter your email for contact...',
      submitBtn: 'Connect',
      submittingBtn: 'Sending',
      successTitle: 'Contact Sent',
      successTextPrefix: 'Thank you! I will reply to ',
      successTextSuffix: ' shortly.',
      resetBtn: 'Send another email',
      emptyError: 'Please enter your email address.',
      invalidError: 'Please enter a valid email address (e.g., name@company.com).',
      networkError:
        'Network glitch detected. You can also use the "Send Direct Email" button below.',
      directDivider: 'OR DIRECT CHANNELS',
      directEmailBtn: 'Send Direct Email'
    },
    telemetry: {
      tag: 'TEL // HUD',
      coords: '23°41\'S 46°33\'W',
      scroll: 'SCROLL',
      sections: {
        hero: 'START',
        sobre: 'ABOUT',
        habilidades: 'SKILLS',
        experiencia: 'HISTORY',
        projetos: 'PROJECTS',
        contato: 'CONTACT'
      }
    },
    footer: {
      copyright: 'Eduardo Mota Bielecky da Silva Mello.',
      note: 'Software Engineering // Java & Backend'
    }
  },

  zh: {
    nav: {
      about: '关于',
      skills: '技能',
      experience: '经历',
      projects: '项目',
      contact: '联系',
      themeToggle: '切换主题',
      menuToggle: '打开导航菜单'
    },
    hero: {
      tagline: '个人作品集 // Java 与软件工程',
      nameFirst: 'Eduardo Mota',
      nameLast: 'Bielecky da Silva Mello',
      roles: [
        '软件工程专业学生',
        'Java 后端开发者',
        '高阶硬件与系统爱好者'
      ],
      summary:
        '寻求 Java 后端实习或初级软件工程师岗位。专注于整洁架构、高性能计算与高可靠性业务系统。',
      contactBtn: '立即联系',
      projectsBtn: '浏览项目',
      connect: '社交连接:',
      caption: '圣保罗 // 巴西',
      explore: '向下探索'
    },
    marquees: {
      m1: 'EDUARDO MOTA • 软件工程 • JAVA 开发者 • 高性能计算 • 整洁架构 •',
      m2: '高健壮性后端 • 高可用架构 • SPRING 框架 • SQL • 算法与数据结构 • 巴西圣保罗 •'
    },
    about: {
      watermark: '01',
      label: '01 // 个人履历',
      title: '关于我',
      p1: '我是<strong>软件工程</strong>学士学位在读学生，现居巴西圣保罗州圣贝尔纳多-杜坎普。我具有务实、目标导向的工程师特质，专注于软件设计模式、整洁代码规范以及高健壮性后端系统构建。',
      p2: '除 Java 编程生态外，我热衷于<strong>高性能计算机硬件</strong>（系统装配、热管理优化与超频稳定性测试）与汽车工程。我追求深入探究底层系统机理与极致运行性能。',
      educationTitle: '学历背景',
      educationDegree: '软件工程',
      educationSub: '全日制本科在读',
      locationTitle: '所在地区',
      locationPlace: '圣贝尔纳多-杜坎普, 圣保罗',
      locationSub: '大圣保罗都市圈',
      focusTitle: '求职方向',
      focusTarget: 'Java 后端实习 / 初级工程师',
      focusSub: '后端架构与系统研发'
    },
    skills: {
      watermark: '02',
      label: '02 // 专业技能',
      title: '技术专长',
      subtitle:
        '将鼠标悬停在浮动标签上，即可查看该项技术在真实项目中的实践总结。',
      realAppBadge: '真实项目应用',
      inspectorTag: '技能实践检视器',
      inspectorContext: '关联项目 / 背景:',
      inspectorBtn: '查看相关项目',
      viewHorizontal: '横向轮播',
      viewGrid: '网格视图',
      scrollHint: '横向滚动或使用箭头探索各技术分类',
      categories: [
        {
          id: 'skills-linguagens',
          title: '编程语言与逻辑',
          icon: 'fas fa-code',
          skills: [
            {
              id: 'skill-java',
              name: 'Java',
              project: '加密货币交易模拟平台 & 学术核心',
              summary:
                '高健壮性后端开发、面向对象设计（OOP）、金融交易业务逻辑建模及高可靠性算法实现。',
              badge: '核心技术栈',
              featured: true
            },
            {
              id: 'skill-sql',
              name: 'SQL 与数据建模',
              project: '餐厅 POS 收银管理系统',
              summary:
                '结构化 SQL 查询构建、关系型库存数据建模、销售记录持久化与满足 ACID 的事务一致性。',
              badge: '数据库',
              featured: true
            },
            {
              id: 'skill-python',
              name: 'Python',
              project: '自动化脚本与数据处理',
              summary:
                '文件处理自动化脚本开发、日常学术任务自动化及基础数值数据处理算法。',
              badge: '进阶中'
            }
          ]
        },
        {
          id: 'skills-ferramentas',
          title: '开发工具与集成环境',
          icon: 'fas fa-tools',
          skills: [
            {
              id: 'skill-intellij',
              name: 'IntelliJ IDEA',
              project: 'Java 生态与后端开发',
              summary:
                '首选开发 IDE，用于深度代码调试、类重构、单元测试执行与内存分析监控。',
              badge: '主要 IDE',
              featured: true
            },
            {
              id: 'skill-git',
              name: 'Git & GitHub',
              project: '所有工程的版本控制',
              summary:
                '语义化版本控制、分支管理、公共开源仓库文档化维护（Caixa Adega, OTIS, Feira Online）与协作。',
              badge: '版本控制',
              featured: true
            },
            {
              id: 'skill-vscode',
              name: 'VS Code',
              project: '数字菜单与前端工程',
              summary:
                '移动端优先界面快速原型开发、轻量布局排版与现代 Web 组件敏捷编辑。',
              badge: '生产力工具'
            }
          ]
        },
        {
          id: 'skills-web',
          title: 'Web 开发与 POS 系统',
          icon: 'fas fa-laptop-code',
          skills: [
            {
              id: 'skill-pos',
              name: 'POS 收银系统架构',
              project: 'Adega POS 收银系统 (生产环境运行)',
              summary:
                '面向餐饮业的完整 Web POS 方案，包含动态税费与服务费核算、快速交班结账及热敏小票报表打印对接。',
              badge: '生产实战',
              featured: true
            },
            {
              id: 'skill-mobile-first',
              name: '移动端优先架构',
              project: 'Dino 餐厅电子菜单 & OTIS',
              summary:
                '极速秒开的响应式 Web 界面，专为高客流量与订单高峰下的触控操作优化。',
              badge: '交互与体验',
              featured: true
            },
            {
              id: 'skill-apis',
              name: 'API 接口集成',
              project: '异步数据通信与表单服务',
              summary:
                '异步 HTTP 通信、严格的前端数据载荷校验及高容错网络请求处理。',
              badge: '接口集成'
            }
          ]
        },
        {
          id: 'skills-hardware-metodologias',
          title: '硬件工程与敏捷流程',
          icon: 'fas fa-microchip',
          skills: [
            {
              id: 'skill-hardware',
              name: '高性能计算硬件',
              project: '独立实践 2024-2025',
              summary:
                '热管理架构、高阶电脑硬件装配、安全超频调校、稳定性基准评测与极端负载压力测试。',
              badge: '硬件专精',
              featured: true
            },
            {
              id: 'skill-agile',
              name: '敏捷项目管理 (Trello)',
              project: '迭代规划与任务跟踪',
              summary:
                '产品待办列表梳理、看板任务拆分、风险阻碍跟进与增量式迭代交付。',
              badge: '敏捷实践'
            },
            {
              id: 'skill-office',
              name: '数据与库存运营管理',
              project: 'Adega do Dino 餐饮业务运营',
              summary:
                '动态库存核算表、运营成本自动化分析及物料标准化盘点。',
              badge: '运营管理'
            },
            {
              id: 'skill-idiomas',
              name: '专业英语',
              project: '官方技术文档与 RFC 规范',
              summary:
                '熟练阅读英文技术 API 文档、Java 架构规范手册、设计模式及全球技术社区讨论。',
              badge: '语言技能'
            }
          ]
        }
      ]
    },
    experience: {
      watermark: '03',
      label: '03 // 职业经历',
      title: '工作经历',
      viewHorizontal: '横向路线图',
      viewVertical: '纵向列表',
      scrollHint: '横向滚动或使用箭头探索履历历程',
      items: [
        {
          id: 'exp-adega',
          date: '近期经历',
          title: '运营管理与客户服务',
          company: 'Churrascaria Adega do Dino 餐厅',
          details: [
            '在高客流餐饮环境下主导客户服务与日常运营，展现出高压环境下的良好沟通协作与抗压能力。',
            '设计并维护内部库存及营运数据动态表格，运用逻辑思维提升数据检索与管理效率。',
            '协助规划数字化宣传、公告发布及线上菜单更新。'
          ],
          tags: ['人际沟通', '团队协作', '数据管理']
        },
        {
          id: 'exp-hardware',
          date: '2024年11月 - 2025年',
          title: '计算硬件与系统专员',
          company: '独立技术实践',
          details: [
            '定制化组装、配置及压力测试高性能计算机工作站。',
            '深度优化操作系统、微调固件及优化系统散热架构。',
            '构建面向高负载计算与极高稳定性的底层硬件基础设施。'
          ],
          tags: ['系统调优', 'PC架构', '故障诊断']
        }
      ]
    },
    projects: {
      watermark: '04',
      label: '04 // 作品集',
      title: '精选重点项目',
      subtitle: '秉持软件工程严谨性、模块化架构与真实生产实用价值构建的项目。',
      accessBtn: '在线体验',
      codeBtn: '查看源码',
      keyTechLabel: '核心技术栈',
      architectureLabel: '技术架构',
      filterAll: '全部',
      filterJava: 'Java 与后端',
      filterPos: 'POS 与商业自动化',
      filterFrontend: '前端与移动端',
      viewHorizontal: '横向轨道',
      viewGrid: '网格视图',
      scrollHint: '可通过拖动、鼠标滚轮或箭头按键横向浏览项目',
      prevBtn: '上一项',
      nextBtn: '下一项',
      githubActivity: {
        badge: 'GitHub 动态遥测',
        title: '开源仓库最新动态',
        subtitle: '通过 GitHub REST API 实时监控项目仓库 — Star 标星数、Forks 及最新 Commit 提交记录。',
        liveStatus: 'API 实时同步',
        reposTracked: '已连接仓库',
        totalStars: 'GitHub 标星数',
        totalForks: '派生 Fork 数',
        latestCommit: '全局最新提交',
        refreshBtn: '刷新动态',
        refreshing: '同步中...',
        viewRepo: '访问仓库',
        viewCommit: '查看提交',
        lastCommitLabel: '最新提交',
        starsLabel: '标星',
        branchLabel: '分支',
        privateBadge: '私有保护仓库',
        syncedJustNow: '刚刚完成同步',
        cachedNotice: '本地缓存启用以降低 API 频次消耗'
      },
      items: [
        {
          id: 'proj-caixa-adega',
          title: 'POS 收银管理系统',
          category: 'POS系统与商业自动化',
          architecture: 'Web架构 • ESC/POS热敏小票打印 • WebSockets',
          desc: '专为餐饮场景设计的高性能 Web 收银台（POS）系统，目前在真实门店稳定运行。具备动态税费/小费计算、高速交班结账及直连热敏小票打印机功能。',
          statusBadge: '生产环境运行中',
          keyTech: [
            { name: 'JavaScript ES6+', icon: 'fab fa-js', role: '收银核心引擎' },
            { name: 'ESC/POS 硬件', icon: 'fas fa-print', role: '热敏打印驱动' },
            { name: 'REST & Webhooks', icon: 'fas fa-network-wired', role: '系统集成' },
            { name: 'CSS3 Grid / Flex', icon: 'fab fa-css3-alt', role: '触控交互界面' }
          ],
          tags: ['Web 应用', 'POS 系统', '热敏打印', 'JavaScript']
        },
        {
          id: 'proj-cardapio-digital',
          title: '高端电子点餐菜单',
          category: '移动优先前端',
          architecture: '轻量单页应用 • 60 FPS • 毫秒级响应',
          desc: '移动端优先的现代化电子菜单，具备极轻量的架构和毫秒级响应，专为 Adega e Churrascaria do Dino 烤肉餐厅定制打造，大幅提升顾客点餐体验。',
          statusBadge: 'Adega do Dino 专供',
          keyTech: [
            { name: '移动优先 UX', icon: 'fas fa-mobile-alt', role: '触控交互' },
            { name: '模块化 JavaScript', icon: 'fab fa-js', role: '响应式购物车' },
            { name: 'CSS3 自定义变量', icon: 'fab fa-css3-alt', role: '设计系统' },
            { name: '语义化 HTML5', icon: 'fab fa-html5', role: '无障碍访问' }
          ],
          tags: ['前端开发', '移动优先', 'UI / UX', 'JavaScript']
        },
        {
          id: 'proj-cripto',
          title: 'Aurum Banking 加密资产交易模拟系统',
          category: '后端架构与金融科技',
          architecture: '面向对象架构 • 撮合引擎 • 账户平衡审计',
          desc: '大学软件工程核心研发项目，模拟数字资产交易平台，涵盖多币种资产配置、撮合交易算法及教学投资路径，业务逻辑与数据校验严谨。',
          statusBadge: '后端核心',
          keyTech: [
            { name: 'Java (JDK)', icon: 'fab fa-java', role: '面向对象与核心逻辑' },
            { name: '数据结构', icon: 'fas fa-cubes', role: '订单簿管理' },
            { name: '撮合算法', icon: 'fas fa-microchip', role: '订单撮合引擎' },
            { name: '事务控制', icon: 'fas fa-shield-alt', role: '资金与余额校验' }
          ],
          tags: ['Java', '面向对象', '金融科技', '数据结构']
        },
        {
          id: 'proj-otis',
          title: 'OTIS 企业运营平台',
          category: '企业综合看板',
          architecture: '响应式看板 • 状态管理 • Vercel CI/CD',
          desc: '注重友好人机交互界面的综合管理与企业看板平台。采用清晰的分层架构，完整部署并支持公网在线访问。',
          statusBadge: '在线运行',
          keyTech: [
            { name: 'JavaScript', icon: 'fab fa-js', role: '动态交互' },
            { name: '现代 CSS3', icon: 'fab fa-css3-alt', role: '看板布局' },
            { name: 'UI / UX 设计', icon: 'fas fa-desktop', role: '直观视图' },
            { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: 'CI / CD 流水线' }
          ],
          tags: ['Web 应用', '企业看板', '前端开发', 'Vercel']
        },
        {
          id: 'proj-feira',
          title: '线上集市交易平台',
          category: '电子商务平台',
          architecture: '商品目录 • 动态购物车 • 结算流程',
          desc: '模拟线下集市选购与便捷电商下单流程的数字化交易平台，具备高效的商品展示、过滤及购物车结算状态逻辑。',
          statusBadge: '在线运行',
          keyTech: [
            { name: '异步 JavaScript', icon: 'fab fa-js', role: '购物车状态' },
            { name: '语义化 HTML5', icon: 'fab fa-html5', role: '商品网格' },
            { name: '响应式 CSS3', icon: 'fab fa-css3-alt', role: '流式布局' },
            { name: 'Git & Vercel', icon: 'fab fa-git-alt', role: '云端部署' }
          ],
          tags: ['电子商务', 'Web 应用', '购物车']
        },
        {
          id: 'proj-ready2work',
          title: 'Ready 2 Work 就业助手',
          category: '科技求职加速平台',
          architecture: '技能评估测试 • 候选人匹配 • 学习指南',
          desc: '旨在帮助计算机专业学生和初级工程师准备技术面试、评估专业技能并提升就业竞争力的实用平台。',
          statusBadge: '开源项目',
          keyTech: [
            { name: 'Java / 后端', icon: 'fab fa-java', role: '技术题库模块' },
            { name: 'Web 前端', icon: 'fab fa-js', role: '交互界面' },
            { name: 'Git & 开源', icon: 'fab fa-github', role: '公开仓库' },
            { name: '敏捷实践', icon: 'fas fa-tasks', role: '项目规划' }
          ],
          tags: ['应用程序', '职场就业', 'Java', '面试准备']
        },
        {
          id: 'proj-kcal',
          title: 'kcal.io',
          category: '数字营养与健康',
          architecture: '卡路里追踪 • 宏量营养素目标 • 响应式交互',
          desc: '专为每日营养摄入监控与热量平衡管理设计的网页应用。用户可计算基础能量代谢需求，记录日常膳食，设定蛋白质、碳水化合物与脂肪的个性化目标，并通过直观的仪表盘实时监控营养达成率。',
          statusBadge: 'Web 应用',
          keyTech: [
            { name: '现代 JavaScript', icon: 'fab fa-js', role: '响应式核心引擎' },
            { name: '营养计量算法', icon: 'fas fa-calculator', role: '能量平衡计算' },
            { name: 'CSS3 设计系统', icon: 'fab fa-css3-alt', role: 'UI / UX 界面设计' },
            { name: 'Vercel 部署', icon: 'fas fa-cloud', role: '持续集成与发布' }
          ],
          tags: ['网页应用', '营养管理', '健身追踪', '宏量营养素']
        },
        {
          id: 'proj-guia-cidadao',
          title: 'GuiaCidadão (公民指南)',
          category: '民生平台与社会福利',
          architecture: '快速筛查 • 资格判定算法 • 机构协同门户',
          desc: '面向社会救助与公民权益的民生数字化平台。提供无需预先注册的1分钟快速筛查流程，智能分析家庭经济与社会条件，识别用户有权申请的政府福利与公共援助项目；同时具备面向居民与机构工作人员的双角色安全门户。',
          statusBadge: '代码仓库',
          keyTech: [
            { name: '模块化 JavaScript', icon: 'fab fa-js', role: '智能筛查流程' },
            { name: '资格评定算法', icon: 'fas fa-shield-alt', role: '福利判定引擎' },
            { name: '多权限系统', icon: 'fas fa-users-cog', role: '居民与协作端门户' },
            { name: 'CSS3 / 无障碍设计', icon: 'fab fa-css3-alt', role: '包容性民生交互' }
          ],
          tags: ['民生科技', '社会救助', '快速筛查', '无障碍体验']
        }
      ]
    },
    contact: {
      watermark: '05',
      label: '05 // 建立连接',
      title: '期待与您交流',
      description:
        '我目前正在寻找软件工程实习或 Java 初级开发岗位机会。您可以在下方直接留下邮箱，或通过社交网络与我取得联系。',
      placeholder: '输入您的电子邮箱以保持联系...',
      submitBtn: '发送',
      submittingBtn: '发送中',
      successTitle: '已成功发送',
      successTextPrefix: '感谢您的关注！我将尽快向 ',
      successTextSuffix: ' 发送回复。',
      resetBtn: '发送其他邮箱',
      emptyError: '请输入您的电子邮箱地址。',
      invalidError: '请输入有效的邮箱格式（例如：name@company.com）。',
      networkError:
        '检测到网络波动。您也可以直接点击下方的“直接发送邮件”按钮。',
      directDivider: '或通过其他直接渠道',
      directEmailBtn: '直接发送邮件'
    },
    telemetry: {
      tag: 'TEL // HUD',
      coords: '23°41\'S 46°33\'W',
      scroll: 'SCROLL',
      sections: {
        hero: '首页',
        sobre: '关于',
        habilidades: '技能',
        experiencia: '经历',
        projetos: '项目',
        contato: '联系'
      }
    },
    footer: {
      copyright: 'Eduardo Mota Bielecky da Silva Mello.',
      note: '软件工程 // Java 与后端架构'
    }
  }
};
