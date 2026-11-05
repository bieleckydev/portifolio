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
    title: 'Sobre mim',
    photoAlt: 'Retrato de Eduardo Bielecky',
    paragraphs: [
      'Sou estudante de Engenharia de Software e moro em São Bernardo do Campo, SP.',
      'Na Adega do Dino cuidei do atendimento num salão de muito movimento e das planilhas de estoque. O sistema de caixa que a casa usa hoje foi escrito para essa rotina.',
      'Meu foco é Java e back-end: orientação a objetos, SQL e regras de negócio que precisam fechar a conta certa.',
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
          { name: 'Java', value: 'Aurum Banking e faculdade' },
          { name: 'SQL', value: 'Estoque e vendas do caixa' },
          { name: 'JavaScript', value: 'Caixa, cardápio, OTIS e Feira' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'Python', value: 'Scripts de automação' }
        ]
      },
      {
        label: 'Sistemas',
        rows: [
          { name: 'Impressão térmica ESC/POS', value: 'Sistema de caixa' },
          { name: 'Interfaces para celular', value: 'Cardápio Digital' },
          { name: 'Integração com APIs', value: 'Formulários e serviços' }
        ]
      },
      {
        label: 'Ferramentas',
        rows: [
          { name: 'Git e GitHub', value: 'Todos os projetos' },
          { name: 'IntelliJ IDEA', value: 'Projetos em Java' },
          { name: 'VS Code', value: 'Front-end' },
          { name: 'Trello', value: 'Organização de entregas' }
        ]
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
    promptA: 'Tem uma vaga de estágio ou júnior em Java?',
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
        ['Linguagem', 'Java'],
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
