export const en = {
  nav: {
    projects: 'Projects',
    about: 'About',
    experience: 'Experience',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    home: 'Eduardo Bielecky, back to top',
    mainNav: 'Main navigation',
    whatsapp: 'Chat on WhatsApp'
  },
  hero: {
    lead: 'Java developer in training. I built the point-of-sale system Adega do Dino runs on today.',
    facts: 'Software Engineering student in São Bernardo do Campo, Brazil. Looking for an internship or a junior role.',
    cta: 'Get in touch',
    projects: 'See projects'
  },
  pos: {
    label: 'Point-of-sale demo',
    keysLabel: 'Add item to the order',
    add: 'Add',
    service: 'Charge 10% service',
    clear: 'Clear order',
    caption: 'A demo of the till’s maths. Items and prices are examples.',
    shop: 'ADEGA DO DINO',
    sub: 'Steakhouse',
    table: 'TABLE 12',
    empty: 'No items yet',
    subtotal: 'Subtotal',
    serviceLine: 'Service 10%',
    total: 'TOTAL',
    notFiscal: 'NOT A TAX RECEIPT',
    thanks: 'Thank you for coming',
    items: [
      { id: 'picanha', name: 'Picanha 400 g', price: 89.9 },
      { id: 'fraldinha', name: 'Flank steak 400 g', price: 69.9 },
      { id: 'linguica', name: 'Tuscan sausage', price: 24.9 },
      { id: 'farofa', name: 'House farofa', price: 12 },
      { id: 'cerveja', name: 'Beer 600 ml', price: 14.9 },
      { id: 'refri', name: 'Soft drink can', price: 7 }
    ]
  },
  caseStudy: {
    title: 'The till behind Adega do Dino',
    lead: 'A web point-of-sale system the restaurant uses to take orders, close bills and print receipts.',
    rows: [
      { label: 'Roles', value: 'Cashier, waiter and statistics, each with its own screen' },
      { label: 'Checkout', value: 'Service and fee calculation, quick bill closing' },
      { label: 'Printing', value: 'Receipts and reports on the thermal printer over ESC/POS' },
      { label: 'Stack', value: 'JavaScript, WebSocket and ESC/POS commands' },
      { label: 'Status', value: 'In production at the restaurant' }
    ],
    live: 'Open the system',
    imageAlt: 'Entry screen of the Adega do Dino point-of-sale system with the Cashier, Waiter and Statistics roles',
    caption: 'The system’s entry screen on a phone.'
  },
  about: {
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
    title: 'Technical Skills',
    subtitle:
      'Hover over the floating tags to inspect practical project experience and architectural summaries.',
    inspectAria: 'Show details for',
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
            featured: true
          },
          {
            id: 'skill-sql',
            name: 'SQL & Data Modeling',
            project: 'POS Cash Register System',
            summary:
              'Structured queries, relational inventory modeling, sales persistence, and transaction audit trails with ACID consistency.',
            featured: true
          },
          {
            id: 'skill-python',
            name: 'Python',
            project: 'Automation & Data Scripts',
            summary:
              'Automated file processing routines, academic task automations, and foundational numerical data algorithms.',
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
            featured: true
          },
          {
            id: 'skill-git',
            name: 'Git & GitHub',
            project: 'Version Control on All Projects',
            summary:
              'Semantic versioning, branch management, public repository documentation (Caixa Adega, OTIS, Feira Online), and collaboration.',
            featured: true
          },
          {
            id: 'skill-vscode',
            name: 'VS Code',
            project: 'Digital Menu & Web Frontends',
            summary:
              'Agile prototyping of mobile-first interfaces, rapid layout engineering, and modern web component editing.',
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
            featured: true
          },
          {
            id: 'skill-mobile-first',
            name: 'Mobile-First Architecture',
            project: 'Dino Digital Menu & OTIS',
            summary:
              'Instant-load responsive web apps optimized for fast touchscreen operations under peak customer order volumes.',
            featured: true
          },
          {
            id: 'skill-apis',
            name: 'API Integrations',
            project: 'Forms & Asynchronous Endpoints',
            summary:
              'Asynchronous HTTP networking, strict client-side payload validation, and resilient error recovery patterns.',
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
            featured: true
          },
          {
            id: 'skill-agile',
            name: 'Agile Workflows (Trello)',
            project: 'Sprint & Delivery Management',
            summary:
              'Backlog grooming, kanban task breakdown, impediment tracking, and iterative release cadences.',
          },
          {
            id: 'skill-office',
            name: 'Data & Inventory Operations',
            project: 'Adega do Dino Business Operations',
            summary:
              'Dynamic spreadsheets for stock tracking, operating cost analysis, and catalog standardization.',
          },
          {
            id: 'skill-idiomas',
            name: 'Technical English',
            project: 'Official Docs & RFC Standards',
            summary:
              'Fluent reading of technical API documentation, Java architecture manuals, design patterns, and global dev forums.',
          }
        ]
      }
    ]
  },
  experience: {
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
    title: 'Other projects',
    live: 'Open site',
    code: 'View code',
    updated: 'updated {when}',
    items: [
      {
        id: 'proj-caixa-adega',
        title: 'Point of sale'
      },
      {
        id: 'proj-cardapio-digital',
        title: 'Digital Menu',
        kind: 'Front end, Adega do Dino',
        desc: 'The menu Adega do Dino guests open on their phones, with the house cuts and ordering.',
        stack: 'JavaScript, HTML and CSS',
        imageAlt: 'Opening screen of the Adega do Dino digital menu'
      },
      {
        id: 'proj-cripto',
        title: 'Aurum Banking',
        kind: 'Java, team project',
        desc: 'A crypto brokerage simulator: wallet, order matching and balance checks.',
        stack: 'Java, object-oriented design and Oracle'
      },
      {
        id: 'proj-otis',
        title: 'OTIS System',
        kind: 'Front end, dashboard',
        desc: 'A dashboard of delivery times, costs and tickets by department, deployed on Vercel.',
        stack: 'JavaScript and CSS',
        imageAlt: 'OTIS dashboard with delivery time and cost charts'
      },
      {
        id: 'proj-kcal',
        title: 'kcal.io',
        kind: 'Android, Kotlin',
        desc: 'A free app that recalculates your calorie deficit or surplus from the real expenditure Health Connect measures.',
        stack: 'Kotlin and Health Connect',
        imageAlt: 'kcal.io page showing the app with calories eaten and macronutrients'
      },
      {
        id: 'proj-feira',
        title: 'Feira Online',
        kind: 'Front end, shop',
        desc: 'A shop connecting small farmers with buyers, with a catalogue by category and a cart.',
        stack: 'JavaScript, HTML and CSS',
        imageAlt: 'Feira Online home page with greens and product categories'
      },
      {
        id: 'proj-ready2work',
        title: 'Ready 2 Work',
        kind: 'Careers',
        desc: 'Preparation for the tech job market, with practice technical assessments.',
        stack: 'JavaScript'
      },
      {
        id: 'proj-guia-cidadao',
        title: 'GuiaCidadão',
        kind: 'Front end, public service',
        desc: 'A one-minute check, no sign-up, that shows which public benefits a person is entitled to.',
        stack: 'JavaScript and CSS'
      }
    ]
  },
  contact: {
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
};
