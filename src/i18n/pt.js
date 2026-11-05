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
    title: 'Outros projetos',
    live: 'Ver online',
    code: 'Ver código',
    updated: 'atualizado {when}',
    items: [
      {
        id: 'proj-caixa-adega',
        title: 'Sistema de caixa'
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
        stack: 'JavaScript'
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
