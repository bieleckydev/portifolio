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
    lead: 'Software engineer in training. I build web and mobile systems for industry, from the database to the deploy.',
    facts: 'Junior developer at Softcomp Sistemas, working with AI every day. Software Engineering student in São Bernardo do Campo, Brazil.',
    cta: 'Get in touch',
    projects: 'See projects',
    card: {
      title: 'DEVELOPER CARD',
      role: 'Role',
      roleValue: 'Junior dev',
      company: 'Company',
      since: 'Since',
      sinceValue: 'Jun 2026',
      projects: 'Projects',
      courses: 'Certificates',
      stack: 'Stack',
      stackValue: 'TS, React, Node, Java',
      city: 'São Bernardo do Campo, BR'
    }
  },
  caseStudy: {
    title: 'Theoretical Metal Weight Calculator',
    lead: 'Instantly works out the weight of a metal or polymer part and produces the sales description ready to paste into the ERP order. I built it for Softcomp’s support team and for quoting, sales and production planning.',
    rows: [
      { label: 'Shapes', value: '14 industrial shapes: sheets, coils, bars, tubes, bushings and L, T, U and I/H profiles' },
      { label: 'Materials', value: 'Over 30, including steels, stainless, aluminium, copper, brass, titanium and polymers' },
      { label: 'Input', value: 'Accepts commas or dots and converts inches, such as 1/2" or 1 1/2, to millimetres' },
      { label: 'Validation', value: 'Blocks impossible parts, such as an inner diameter larger than the outer one' },
      { label: '3D viewer', value: 'Built from scratch in SVG with no libraries: rotates, zooms and draws each frame in under 0.25 ms' },
      { label: 'Tests', value: '35 tests covering the formulas, the inch converter and the 3D engine' },
      { label: 'Stack', value: 'React, Vite, JavaScript, CSS with design tokens and SVG' }
    ],
    live: 'Open the calculator',
    code: 'View code',
    imageAlt: 'Theoretical weight calculator with metal profiles, a 3D technical sketch and dimension fields',
    caption: 'The published calculator.'
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
            detail: 'I build tools for the company and its clients with AI in my daily workflow: an executive dashboard, a SEFAZ monitor, the systems changelog, a metal weight calculator, the tax reform guide, SoftcompCRM, the shipping app and a cash flow app integrated with Protheus.',
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
          { name: 'TypeScript', value: 'Point of sale, Softcomp Dashboard, SEFAZ Monitor, Changelog and heavy.io' },
          { name: 'JavaScript', value: 'Calculator, menu, OTIS and Feira' },
          { name: 'Java', value: 'Merlin Route Finder, Aurum Banking and university' },
          { name: 'Python', value: 'Softcomp Dashboard, Ready 2 Work and automation' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'SQL', value: 'SQL Server, PostgreSQL, SQLite and Oracle' }
        ]
      },
      {
        label: 'Front end, back end and mobile',
        rows: [
          { name: 'React and Next.js', value: 'Dashboard, SEFAZ Monitor, Changelog, Portal and Warehouse' },
          { name: 'Node.js with Express and Fastify', value: 'Softcomp Dashboard, SEFAZ Monitor and Shipping App' },
          { name: 'PWA for Android scanners', value: 'Shipping App' },
          { name: 'React Native with Expo', value: 'heavy.io and Employee Portal' },
          { name: 'Java with JAX-RS and JDBC', value: 'Merlin Route Finder' },
          { name: 'AI with Gemini and function calling', value: 'Merlin Route Finder and heavy.io' },
          { name: 'Tailwind and CSS', value: 'Softcomp Dashboard and websites' },
          { name: 'Chart.js, MapLibre and Leaflet', value: 'Softcomp Dashboard and SEFAZ Monitor' },
          { name: 'SVG and 3D without libraries', value: 'Metal Calculator' },
          { name: 'Supabase and Firebase', value: 'Point of sale, SoftcompCRM, Portal, Warehouse, Changelog and heavy.io' },
          { name: 'Software architecture', value: 'Warehouse: domain kept apart from the web layer' },
          { name: 'Accessibility (WCAG 2.1 AA)', value: 'Tax Reform Guide' }
        ]
      },
      {
        label: 'Infrastructure and integrations',
        rows: [
          { name: 'Nginx, systemd, Redis and GitHub Actions', value: 'Dashboard and Monitor deploys' },
          { name: 'Database security (Row Level Security)', value: 'Employee Portal' },
          { name: 'Monorepo with pnpm and Turborepo', value: 'Employee Portal' },
          { name: 'Vercel', value: 'Changelog, menu, OTIS and Feira' },
          { name: 'Thermal printing (80 mm receipts and ZPL)', value: 'Point-of-sale system and Shipping App' },
          { name: 'REST APIs, OpenAPI and ERP integration', value: 'SoftcompCRM, Dashboard, SEFAZ Monitor and Protheus in Cash Flow' },
          { name: 'Web security (RSA-OAEP, bcrypt, JWT, rate limiting)', value: 'Cash Flow and Softcomp Dashboard' },
          { name: 'WhatsApp (WAHA) and Asterisk telephony', value: 'SoftcompCRM' },
          { name: 'Docker and Caddy', value: 'Cash Flow deploy and SoftcompCRM images' },
          { name: 'Brazilian consumption tax (IBS, CBS, NF-e)', value: 'Tax Reform Guide and SEFAZ Monitor' }
        ]
      },
      {
        label: 'Tools',
        rows: [
          { name: 'Git and GitHub', value: 'Every project' },
          { name: 'Testing with Vitest, Playwright and Node', value: 'Warehouse (553 tests), CRM, Shipping App and Calculator' },
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
        id: 'proj-softcomp-painel',
        title: 'Softcomp Dashboard',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Sales and production for a steel-cutting plant in one system, integrated with the legacy ERP: sales against targets, a customer map and regional analysis, and automatic cutting schedules by machine, warehouse and shift. I owned it end to end, from database to deploy.',
        stack: 'TypeScript, React, Vite, Tailwind, Chart.js, MapLibre, Node.js with Express and Fastify, SQLite, Redis, Zod, Nginx, systemd and GitHub Actions'
      },
      {
        id: 'proj-monitor-sefaz',
        title: 'SEFAZ Monitor',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'Checks the 12 SEFAZ electronic invoice (NF-e) authorizers every 60 seconds and says which fallback to switch on when one fails. It also takes in ERP errors from each client and maps who is down. Data it could not read never shows as OK.',
        stack: 'TypeScript, React, Vite, Tailwind, Node.js with Fastify, SQLite, Leaflet and systemd'
      },
      {
        id: 'proj-softcomp-changelog',
        title: 'Softcomp Changelog',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'A public release notes portal for the ERP that replaced an internal spreadsheet: a timeline with search and module filters, an admin panel with drafts, publishing and edit history, and 181 records migrated from the spreadsheet.',
        stack: 'TypeScript, Next.js, React, Supabase (PostgreSQL with RLS, Auth and Storage), GitHub Actions and Vercel',
        imageAlt: 'Softcomp public changelog page with the timeline and the latest note'
      },
      {
        id: 'proj-calculadora-metais',
        title: 'Metal Calculator',
        kind: 'Front end, Softcomp Sistemas',
        desc: 'Instantly works out the theoretical weight of 14 shapes in over 30 materials for ERP quotes and sales, accepts inches, blocks impossible parts and shows the part in a 3D viewer built from scratch in SVG, with no libraries.',
        stack: 'React, Vite, JavaScript, CSS with design tokens, SVG and Node test runner',
        imageAlt: 'Theoretical weight calculator with metal profiles, a 3D technical sketch and dimension fields'
      },
      {
        id: 'proj-guia-reforma',
        title: 'Tax Reform Guide',
        kind: 'Front end, Softcomp Sistemas',
        desc: 'A guide for steel companies to understand Brazil’s new IBS and CBS taxes and the 2026 to 2033 transition, with a test-year simulator, worked examples from the steel chain and every claim linked to an official source.',
        stack: 'Plain HTML, CSS and JavaScript with no dependencies; WCAG 2.1 AA accessible',
        imageAlt: 'Opening page of the Tax Reform Guide, with the chapter menu on the left'
      },
      {
        id: 'proj-softcomp-crm',
        title: 'SoftcompCRM',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'A fork of an open-source CRM with AI and WhatsApp, adapted for Softcomp’s clients: one pipeline for several companies of the same owner, an SDR role, a REST API for the ERP documented in OpenAPI and AI that answers calls through Asterisk.',
        stack: 'TypeScript, Next.js, React, Supabase with PostgreSQL and RLS, WhatsApp via WAHA, Asterisk, Zod, Vitest, Playwright, Docker and GitHub Actions'
      },
      {
        id: 'proj-expedicao',
        title: 'Shipping App',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'A rebuild of an ERP’s shipping module for Android barcode scanners: 9 modules, a toast, vibration and beep on every scan, business rules on the server and ZPL labels sent straight to the Zebra printer.',
        stack: 'TypeScript, React, Vite, TanStack Query, PWA, Node.js with Fastify, SQL Server, PDFKit, ZPL and Vitest',
        imageAlt: 'App home screen on a scanner with modules for order monitoring, receiving, volumes, labels and invoicing'
      },
      {
        id: 'proj-fluxo-caixa',
        title: 'Cash Flow',
        kind: 'Full stack, Softcomp Sistemas',
        desc: 'A daily cash flow integrated with TOTVS Protheus, with detailed, summary and forecast vs actual views, bank balances and Excel export. A BFF hides the ERP credentials, and sign-in uses a password encrypted in the browser, a JWT in an HttpOnly cookie and an audit trail.',
        stack: 'TypeScript, React, Vite, Tailwind, Chart.js, TanStack Virtual, Node.js with Express, Docker, Caddy and Protheus REST APIs'
      },
      {
        id: 'proj-portal-colaborador',
        title: 'Employee Portal',
        kind: 'Full stack, web and app',
        desc: 'An HR website and app for a small manufacturer: each person signs in with their CPF and sees only their own payslips, requests and notices, enforced in the database itself with Row Level Security.',
        stack: 'TypeScript, Next.js, React Native with Expo, Supabase with PostgreSQL, Tailwind and Turborepo',
        imageAlt: 'App home screen on a phone with shortcuts to payslips, requests and notices and the latest payslip'
      },
      {
        id: 'proj-almoxarifado',
        title: 'Warehouse System',
        kind: 'Full stack, metalworking plant',
        desc: 'Replaces a metalworking plant’s stock spreadsheets with a platform whose balance can be trusted: receipts, withdrawals, requests and orders saved in atomic transactions, role-based access with an audit log and 553 automated tests.',
        stack: 'TypeScript, Next.js, React, Tailwind, Zod, Zustand, TanStack Query, Firebase (Auth and Firestore), Playwright and Vercel'
      },
      {
        id: 'proj-merlin',
        title: 'Merlin Route Finder',
        kind: 'Full stack, FIAP Challenge with Leroy Merlin',
        desc: 'An app for big-box stores, opened from a QR code in the aisle: typo-tolerant search, a store map with a route to the shelf and a Gemini assistant that only mentions products that exist and suggests a substitute when the shelf is empty. Built by a team of five; I handled the back end, architecture and interface.',
        stack: 'Java 21, JAX-RS with Jersey, JDBC, Oracle, React, Vite, Google Gemini and Docker',
        imageAlt: 'Interactive store map on a phone, with the route to the items on the shopping list'
      },
      {
        id: 'proj-caixa-adega',
        title: 'Point of sale and orders',
        kind: 'Full stack, restaurant and wine bar',
        desc: 'A point of sale with real-time orders: the waiter takes the order on a phone at the table, and the till gets it instantly, closes the bill and prints the receipt on an 80 mm thermal printer. I am the only developer.',
        stack: 'React, TypeScript, Vite, Firebase, Chart.js and Vitest',
        imageAlt: 'Entry screen of the point-of-sale system with the Cashier, Waiter and Statistics roles'
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
