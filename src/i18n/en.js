export const en = {
  nav: {
    projects: 'Projects',
    about: 'About',
    experience: 'Experience',
    courses: 'Courses',
    contact: 'Contact',
    menu: 'Menu',
    close: 'Close',
    home: 'Eduardo Bielecky, back to top',
    mainNav: 'Main navigation',
    whatsapp: 'Chat on WhatsApp'
  },
  hero: {
    lead: 'Software engineer in training. I built the point-of-sale system Adega do Dino runs on today.',
    facts: 'Junior developer at Softcomp Sistemas, working with AI every day. Software Engineering student in São Bernardo do Campo, Brazil.',
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
    imageAlt: 'Entry screen of the Adega do Dino point-of-sale system with the Cashier, Waiter and Statistics roles',
    caption: 'The system’s entry screen on a phone.'
  },
  caseGame: {
    start: 'Take over the till',
    quit: 'Leave the till',
    note: 'Close five orders as fast as you can. It is a simulation: nothing reaches the real system.',
    progress: 'Order {n} of {total}',
    time: 'Time',
    table: 'Table {n}',
    counter: 'Counter',
    tableRule: '10% service charge',
    counterRule: 'no service charge',
    bill: 'Bill',
    empty: 'Ring up the items on the order.',
    removeOne: 'Remove one',
    closeWith: 'Close with 10%',
    closeWithout: 'Close without service',
    right: 'Bill is right.',
    wrongItems: 'The items do not match the order.',
    wrongService: 'The service charge is wrong.',
    summaryTitle: 'END OF SHIFT',
    okMark: 'OK',
    badMark: 'ERR',
    shiftTotal: 'SHIFT TOTAL',
    summary: '{ok} of {total} bills right in {time}.',
    again: 'Play again'
  },
  about: {
    title: 'About me',
    photoAlt: 'Portrait of Eduardo Bielecky',
    paragraphs: [
      'I am a Software Engineering student living in São Bernardo do Campo, Brazil.',
      'At Adega do Dino I worked the floor of a busy steakhouse and kept the stock spreadsheets. The point-of-sale system the restaurant uses today was written for that routine.',
      'I work from back end to app: TypeScript with React and Node.js, Java, Python, React Native and Kotlin on mobile, and SQL databases. I pick the tool for the problem and learn whatever is missing.',
      'Away from code I build and tune computers. I like stress-testing for stability, managing heat and understanding what happens under the hood.',
      'I am looking for an internship or a junior role where I can learn from a team and ship software people actually use.'
    ],
    signRole: 'Software Engineering student'
  },
  experience: {
    title: 'Experience',
    skillsTitle: 'Skills',
    groups: [
      {
        label: 'Work',
        rows: [
          {
            name: 'Junior developer, Softcomp Sistemas',
            detail: 'I build tools for the company and its clients with AI in my daily workflow: an executive dashboard, a SEFAZ monitor, the systems changelog and a metal weight calculator.',
            value: 'Since Jun 2026'
          },
          {
            name: 'Service and operations, Adega do Dino',
            detail: 'Front of house in a busy steakhouse, stock spreadsheets and help with the restaurant’s ads.',
            value: 'Recent'
          },
          {
            name: 'Building and tuning computers',
            detail: 'Independent practice: assembly, stability testing and thermal management.',
            value: '2024 to 2025'
          }
        ]
      },
      {
        label: 'Education',
        rows: [
          { name: 'BSc in Software Engineering', value: 'In progress' },
          { name: 'Technical English', detail: 'Reading documentation and specifications.' }
        ]
      }
    ],
    skills: [
      {
        label: 'Languages',
        rows: [
          { name: 'TypeScript', value: 'Softcomp Dashboard, SEFAZ Monitor, Changelog and heavy.io' },
          { name: 'JavaScript', value: 'Till, menu, OTIS and Feira' },
          { name: 'Java', value: 'Aurum Banking and university' },
          { name: 'Python', value: 'Softcomp Dashboard, Ready 2 Work and automation' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'SQL', value: 'SQLite, PostgreSQL and Oracle' }
        ]
      },
      {
        label: 'Front end, back end and mobile',
        rows: [
          { name: 'React and Next.js', value: 'Dashboard, SEFAZ Monitor and Changelog' },
          { name: 'Node.js with Express and Fastify', value: 'Softcomp Dashboard and SEFAZ Monitor' },
          { name: 'React Native with Expo', value: 'heavy.io' },
          { name: 'Tailwind and CSS', value: 'Softcomp Dashboard and websites' },
          { name: 'Supabase and Firebase', value: 'Changelog and heavy.io' }
        ]
      },
      {
        label: 'Infrastructure and integrations',
        rows: [
          { name: 'Nginx, systemd and GitHub Actions', value: 'Dashboard and Monitor deploys' },
          { name: 'Vercel', value: 'Changelog, menu, OTIS and Feira' },
          { name: 'ESC/POS thermal printing', value: 'Point-of-sale system' },
          { name: 'ERP and API integration', value: 'Softcomp Dashboard and SEFAZ Monitor' }
        ]
      },
      {
        label: 'Tools',
        rows: [
          { name: 'Git and GitHub', value: 'Every project' },
          { name: 'VS Code and IntelliJ IDEA', value: 'Every day' },
          { name: 'Trello', value: 'Planning deliveries' }
        ]
      }
    ]
  },
  courses: {
    title: 'Courses and certificates',
    lead: '{total} certificates from Alura, FIAP and Santander Open Academy, most of them from 2026. Titles are kept in the original Portuguese or English.',
    link: 'See credentials on LinkedIn',
    groups: {
      ai: 'Software engineering with AI',
      dev: 'Development and fundamentals',
      business: 'Management, product and communication'
    }
  },
  projects: {
    title: 'Other projects',
    live: 'Open site',
    code: 'View code',
    updated: 'updated {when}',
    privateCode: 'Private code',
    items: [
      {
        id: 'proj-caixa-adega',
        title: 'Point of sale'
      },
      {
        id: 'proj-softcomp-painel',
        title: 'Softcomp Dashboard',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'A management platform for the steel-cutting industry: executive sales dashboard, automatic scheduling of cutting machines and cash flow, integrated with the legacy ERP.',
        stack: 'TypeScript, React, Node.js with Express and Fastify, SQLite, Tailwind, Nginx and GitHub Actions'
      },
      {
        id: 'proj-monitor-sefaz',
        title: 'SEFAZ Monitor',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Tracks the electronic invoice (NF-e) authorizers of all 27 Brazilian states in real time, tells which fallback to use when one goes down and alerts the team by email.',
        stack: 'TypeScript, React, Fastify, Vite, SQLite and systemd'
      },
      {
        id: 'proj-softcomp-changelog',
        title: 'Softcomp Changelog',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Release notes for Softcomp’s ERP modules, with filters by module and type, search and an admin panel with image uploads.',
        stack: 'Next.js, React, TypeScript and Supabase with PostgreSQL'
      },
      {
        id: 'proj-calculadora-metais',
        title: 'Metal Calculator',
        kind: 'Front end, Softcomp Sistemas',
        desc: 'Works out the theoretical weight of 14 profiles in 30 materials for ERP quotes and sales, accepts inch fractions and runs entirely from the keyboard.',
        stack: 'React, Vite, JavaScript and Python',
        imageAlt: 'Theoretical weight calculator with metal profiles, a 3D technical sketch and dimension fields'
      },
      {
        id: 'proj-heavy',
        title: 'heavy.io',
        kind: 'Mobile, React Native',
        desc: 'An offline-first strength training app: stores sets and loads on the device, estimates one-rep max, syncs with Health Connect and suggests exercise swaps with AI.',
        stack: 'TypeScript, React Native with Expo, SQLite, Firebase and Gemini'
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
        stack: 'JavaScript and Python'
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
    promptA: 'Hiring a software intern or junior?',
    promptB: 'Leave your email and I will reply.',
    label: 'Your email',
    placeholder: 'name@company.com',
    submit: 'Send',
    submitting: 'Sending',
    hint: 'It goes straight to my inbox.',
    successTitle: 'Got it.',
    successText: 'I will reply to {email}.',
    reset: 'Send another email',
    emptyError: 'Type your email so I can reply.',
    invalidError: 'That email looks incomplete. Check the @ and the domain, like name@company.com.',
    networkError: 'It did not send just now. Write to eduardombielecky@gmail.com instead.',
    emailLabel: 'Email',
    copy: 'Copy',
    copied: 'Copied',
    subject: 'Contact from your portfolio',
    ticket: {
      title: 'CONTACT REQUEST',
      lines: [
        ['Looking for', 'Intern or junior'],
        ['Stack', 'Back, front, mobile'],
        ['Studying', 'Software Eng.'],
        ['City', 'S. B. do Campo, BR']
      ],
      thanks: 'Thanks for stopping by'
    }
  },
  footer: {
    made: 'Made in São Bernardo do Campo, Brazil.'
  },
};
