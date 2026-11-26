export const zh = {
  nav: {
    projects: '项目',
    about: '关于',
    experience: '经历',
    courses: '课程',
    contact: '联系',
    menu: '菜单',
    close: '关闭',
    home: 'Eduardo Bielecky，回到顶部',
    mainNav: '主导航',
    whatsapp: '通过 WhatsApp 联系'
  },
  hero: {
    lead: '正在成长的软件工程师。我开发了 Adega do Dino 烤肉店正在使用的收银系统。',
    facts: 'Softcomp Sistemas 初级开发工程师，日常工作中大量使用 AI。软件工程在读，现居巴西圣贝尔纳多-杜坎普。',
    cta: '联系我',
    projects: '查看项目'
  },
  pos: {
    label: '收银系统演示',
    keysLabel: '向订单添加菜品',
    add: '添加',
    service: '收取 10% 服务费',
    clear: '清空订单',
    caption: '收银计算演示，菜品和价格均为示例。',
    shop: 'ADEGA DO DINO',
    sub: '巴西烤肉店',
    table: '12 号桌',
    empty: '尚未添加菜品',
    subtotal: '小计',
    serviceLine: '服务费 10%',
    total: '合计',
    notFiscal: '非税务发票',
    thanks: '感谢光临',
    items: [
      { id: 'picanha', name: '牛臀盖肉 400 克', price: 89.9 },
      { id: 'fraldinha', name: '牛腹肉 400 克', price: 69.9 },
      { id: 'linguica', name: '托斯卡纳香肠', price: 24.9 },
      { id: 'farofa', name: '自制木薯粉', price: 12 },
      { id: 'cerveja', name: '啤酒 600 毫升', price: 14.9 },
      { id: 'refri', name: '罐装汽水', price: 7 }
    ]
  },
  caseStudy: {
    title: 'Adega do Dino 的收银系统',
    lead: '一套网页版收银系统，餐厅每天用它点单、结账并打印小票。',
    rows: [
      { label: '角色', value: '收银、服务员和统计，各有独立界面' },
      { label: '结账', value: '自动计算费用，快速结账' },
      { label: '打印', value: '通过 ESC/POS 在热敏打印机上打印小票和报表' },
      { label: '技术', value: 'JavaScript、WebSocket 和 ESC/POS 指令' },
      { label: '状态', value: '已在餐厅投入使用' }
    ],
    imageAlt: 'Adega do Dino 收银系统的入口界面，可选择收银、服务员和统计角色',
    caption: '系统在手机上的入口界面。'
  },
  caseGame: {
    start: '接管收银台',
    quit: '离开收银台',
    note: '尽快结完五张点单。这只是模拟，不会连接真实系统。',
    progress: '第 {n} 张点单，共 {total} 张',
    time: '用时',
    table: '{n} 号桌',
    counter: '吧台',
    tableRule: '收取 10% 服务费',
    counterRule: '不收服务费',
    bill: '账单',
    empty: '录入点单上的菜品。',
    removeOne: '减少一份',
    closeWith: '加收 10% 结账',
    closeWithout: '不收服务费结账',
    right: '账单正确。',
    wrongItems: '菜品与点单不符。',
    wrongService: '服务费算错了。',
    summaryTitle: '交班结算',
    okMark: '对',
    badMark: '错',
    shiftTotal: '本班合计',
    summary: '{total} 张账单中对了 {ok} 张，用时 {time}。',
    again: '再玩一次'
  },
  about: {
    title: '关于我',
    photoAlt: 'Eduardo Bielecky 的照片',
    paragraphs: [
      '我是软件工程专业的学生，住在巴西圣保罗州的圣贝尔纳多-杜坎普。',
      '我曾在 Adega do Dino 烤肉店负责繁忙的前厅服务，并维护库存表格。餐厅现在使用的收银系统，就是为这套日常流程编写的。',
      '从后端到移动应用我都做：TypeScript 搭配 React 和 Node.js、Java、Python、移动端的 React Native 和 Kotlin，以及 SQL 数据库。我根据问题选择工具，缺什么就学什么。',
      '写代码之外，我喜欢组装和调校电脑：做稳定性测试、管理散热，弄清楚底层到底发生了什么。',
      '我在寻找实习或初级职位，希望在团队中学习，交付真正有人在用的软件。'
    ],
    signRole: '软件工程在读'
  },
  experience: {
    title: '经历',
    skillsTitle: '技能',
    groups: [
      {
        label: '工作',
        rows: [
          {
            name: '初级开发工程师，Softcomp Sistemas',
            detail: '日常借助 AI 为公司及客户开发工具：管理面板、SEFAZ 监控、系统更新日志、金属重量计算器、税制改革指南、SoftcompCRM、发货应用和与 Protheus 集成的现金流应用。',
            value: '2026 年 6 月至今'
          },
          {
            name: '服务与运营，Adega do Dino',
            detail: '在客流量很大的烤肉店负责前厅服务，维护库存表格，并协助餐厅的广告宣传。',
            value: '近期'
          },
          {
            name: '电脑组装与调校',
            detail: '个人实践：组装、稳定性测试和散热管理。',
            value: '2024 至 2025'
          }
        ]
      },
      {
        label: '教育',
        rows: [
          { name: '软件工程学士', value: '在读' },
          { name: '技术英语', detail: '阅读技术文档和规范。' }
        ]
      }
    ],
    skills: [
      {
        label: '编程语言',
        rows: [
          { name: 'TypeScript', value: 'Softcomp 面板、SEFAZ 监控、更新日志和 heavy.io' },
          { name: 'JavaScript', value: '收银、菜单、OTIS 和 Feira' },
          { name: 'Java', value: 'Aurum Banking 与课程项目' },
          { name: 'Python', value: 'Softcomp 面板、Ready 2 Work 与自动化' },
          { name: 'Kotlin', value: 'kcal.io' },
          { name: 'SQL', value: 'SQL Server、PostgreSQL、SQLite 和 Oracle' }
        ]
      },
      {
        label: '前端、后端与移动端',
        rows: [
          { name: 'React 和 Next.js', value: '面板、SEFAZ 监控、更新日志、员工门户和仓储系统' },
          { name: 'Node.js（Express、Fastify）', value: 'Softcomp 面板、SEFAZ 监控和发货应用' },
          { name: '面向 Android 手持终端的 PWA', value: '发货应用' },
          { name: 'React Native（Expo）', value: 'heavy.io 和员工门户' },
          { name: 'Tailwind 和 CSS', value: 'Softcomp 面板和网站' },
          { name: 'Chart.js、MapLibre 和 Leaflet', value: 'Softcomp 面板和 SEFAZ 监控' },
          { name: '不依赖库的 SVG 与 3D', value: '金属重量计算器' },
          { name: 'Supabase 和 Firebase', value: 'SoftcompCRM、员工门户、仓储系统、更新日志和 heavy.io' },
          { name: '软件架构', value: '仓储系统：领域层与网页层分离' },
          { name: '无障碍（WCAG 2.1 AA）', value: '税制改革指南' }
        ]
      },
      {
        label: '基础设施与集成',
        rows: [
          { name: 'Nginx、systemd、Redis 和 GitHub Actions', value: '面板和监控的部署' },
          { name: '数据库安全（行级安全 RLS）', value: '员工门户' },
          { name: 'pnpm 与 Turborepo 单仓库', value: '员工门户' },
          { name: 'Vercel', value: '更新日志、菜单、OTIS 和 Feira' },
          { name: '热敏打印（ESC/POS 和 ZPL）', value: '收银系统和发货应用' },
          { name: 'REST API、OpenAPI 与 ERP 集成', value: 'SoftcompCRM、面板、SEFAZ 监控和现金流中的 Protheus' },
          { name: 'Web 安全（RSA-OAEP、bcrypt、JWT、限流）', value: '现金流和 Softcomp 面板' },
          { name: 'WhatsApp（WAHA）与 Asterisk 电话系统', value: 'SoftcompCRM' },
          { name: 'Docker 和 Caddy', value: '现金流部署和 SoftcompCRM 镜像' },
          { name: '消费税制（IBS、CBS、NF-e）', value: '税制改革指南和 SEFAZ 监控' }
        ]
      },
      {
        label: '工具',
        rows: [
          { name: 'Git 和 GitHub', value: '所有项目' },
          { name: 'Vitest、Playwright 与 Node 测试', value: '仓储系统（553 个测试）、CRM、发货应用和计算器' },
          { name: 'VS Code 和 IntelliJ IDEA', value: '日常使用' },
          { name: 'Trello', value: '交付规划' }
        ]
      }
    ]
  },
  courses: {
    title: '课程与证书',
    lead: '共 {total} 张证书，来自 Alura、FIAP 和 Santander Open Academy，大多获得于 2026 年。证书名称保留原文（葡萄牙语或英语）。',
    link: '在领英查看证书',
    groups: {
      ai: '结合 AI 的软件工程',
      dev: '开发与基础',
      business: '管理、产品与沟通'
    }
  },
  projects: {
    title: '其他项目',
    live: '在线查看',
    code: '查看代码',
    updated: '{when}更新',
    privateCode: '代码未公开',
    items: [
      {
        id: 'proj-caixa-adega',
        title: '收银系统'
      },
      {
        id: 'proj-softcomp-painel',
        title: 'Softcomp 管理面板',
        kind: '全栈，Softcomp Sistemas',
        desc: '把钢材切割企业的销售和生产管理整合进一个与旧版 ERP 对接的系统：销售与目标对比、客户地图和区域分析，以及按机器、厂房和班次自动排产。我从数据库到部署全程负责。',
        stack: 'TypeScript、React、Vite、Tailwind、Chart.js、MapLibre、Node.js（Express 和 Fastify）、SQLite、Redis、Zod、Nginx、systemd 和 GitHub Actions'
      },
      {
        id: 'proj-monitor-sefaz',
        title: 'SEFAZ 监控',
        kind: '全栈，Softcomp Sistemas',
        desc: '每 60 秒检查 SEFAZ 的 12 个电子发票（NF-e）授权服务，出现故障时提示应启用的备用通道；同时接收各客户 ERP 的错误，在地图上显示哪些客户已离线。没读到的数据绝不会显示为正常。',
        stack: 'TypeScript、React、Vite、Tailwind、Node.js（Fastify）、SQLite、Leaflet 和 systemd'
      },
      {
        id: 'proj-softcomp-changelog',
        title: 'Softcomp 更新日志',
        kind: '全栈，Softcomp Sistemas',
        desc: 'Softcomp ERP 各模块的版本说明，可按模块和类型筛选、搜索，并有支持上传图片的管理后台。',
        stack: 'Next.js、React、TypeScript 和 Supabase（PostgreSQL）'
      },
      {
        id: 'proj-calculadora-metais',
        title: '金属重量计算器',
        kind: '前端，Softcomp Sistemas',
        desc: '即时计算 14 种几何形状、30 多种材料的理论重量，用于 ERP 报价和销售；支持英寸输入，拦截不可能的尺寸，并用从零编写、不依赖任何库的 SVG 3D 查看器展示零件。',
        stack: 'React、Vite、JavaScript、带设计令牌的 CSS、SVG 和 Node test runner',
        imageAlt: '理论重量计算器，显示金属型材、3D 技术示意图和尺寸输入框'
      },
      {
        id: 'proj-guia-reforma',
        title: '税制改革指南',
        kind: '前端，Softcomp Sistemas',
        desc: '帮助钢铁企业理解巴西新的 IBS、CBS 税以及 2026 至 2033 年过渡期的指南，包含试行年模拟器、钢铁产业链计算示例，每条说明都附有官方来源。',
        stack: '纯 HTML、CSS 和 JavaScript，无依赖；符合 WCAG 2.1 AA 无障碍标准',
        imageAlt: '税制改革指南首页，左侧为章节菜单'
      },
      {
        id: 'proj-softcomp-crm',
        title: 'SoftcompCRM',
        kind: '全栈，Softcomp Sistemas',
        desc: '基于开源 CRM 的分支，集成 AI 和 WhatsApp，为 Softcomp 的客户定制：同一老板旗下多家公司的销售漏斗合并展示、SDR 角色、以 OpenAPI 文档化的 ERP REST API，以及通过 Asterisk 由 AI 接听电话。',
        stack: 'TypeScript、Next.js、React、Supabase（PostgreSQL 与 RLS）、WAHA 对接 WhatsApp、Asterisk、Zod、Vitest、Playwright、Docker 和 GitHub Actions'
      },
      {
        id: 'proj-expedicao',
        title: '发货应用',
        kind: '全栈，Softcomp Sistemas',
        desc: '为带条码扫描器的 Android 手持终端重建 ERP 的发货模块：9 个功能模块，每次扫描都有提示、震动和提示音，业务规则在服务器端执行，ZPL 标签直接发送到斑马打印机。',
        stack: 'TypeScript、React、Vite、TanStack Query、PWA、Node.js（Fastify）、SQL Server、PDFKit、ZPL 和 Vitest',
        imageAlt: '手持终端上的应用首页，包含订单监控、收货、包裹、标签和开票等模块'
      },
      {
        id: 'proj-fluxo-caixa',
        title: '现金流',
        kind: '全栈，Softcomp Sistemas',
        desc: '与 TOTVS Protheus 集成的每日现金流，提供明细、汇总和预计与实际对比视图、银行余额以及 Excel 导出。BFF 隐藏 ERP 凭据，登录采用浏览器端加密密码、HttpOnly Cookie 中的 JWT 和访问审计。',
        stack: 'TypeScript、React、Vite、Tailwind、Chart.js、TanStack Virtual、Node.js（Express）、Docker、Caddy 和 Protheus REST API'
      },
      {
        id: 'proj-portal-colaborador',
        title: '员工门户',
        kind: '全栈，网站和应用',
        desc: '为一家小型制造企业开发的人事网站和应用：每位员工用 CPF 登录，只能看到自己的工资单、申请和通知，权限由数据库的行级安全（RLS）保障。',
        stack: 'TypeScript、Next.js、React Native（Expo）、Supabase（PostgreSQL）、Tailwind 和 Turborepo',
        imageAlt: '手机应用首页，显示工资单、申请和通知的快捷入口以及本月工资单'
      },
      {
        id: 'proj-almoxarifado',
        title: '仓储管理系统',
        kind: '全栈，金属加工厂',
        desc: '用一个库存余额可信的平台取代金属加工厂的库存表格：入库、出库、领料和订单都以原子事务保存，按角色控制权限并记录审计日志，配有 553 个自动化测试。',
        stack: 'TypeScript、Next.js、React、Tailwind、Zod、Zustand、TanStack Query、Firebase（Auth 和 Firestore）、Playwright 和 Vercel'
      },
      {
        id: 'proj-heavy',
        title: 'heavy.io',
        kind: '移动端，React Native',
        desc: '离线优先的力量训练应用：在手机上记录组数和重量、估算最大重量、同步 Health Connect，并用 AI 推荐替换动作。',
        stack: 'TypeScript、React Native（Expo）、SQLite、Firebase 和 Gemini'
      },
      {
        id: 'proj-cardapio-digital',
        title: '电子菜单',
        kind: '前端，Adega do Dino',
        desc: 'Adega do Dino 的顾客在手机上打开的菜单，展示招牌肉品并可直接点单。',
        stack: 'JavaScript、HTML 和 CSS',
        imageAlt: 'Adega do Dino 烤肉店电子菜单的首页'
      },
      {
        id: 'proj-cripto',
        title: 'Aurum Banking',
        kind: 'Java，团队项目',
        desc: '加密货币交易所模拟器：钱包、订单撮合和余额校验。',
        stack: 'Java、面向对象和 Oracle'
      },
      {
        id: 'proj-otis',
        title: 'OTIS 系统',
        kind: '前端，数据看板',
        desc: '按部门展示交付周期、成本和工单的数据看板，部署在 Vercel 上。',
        stack: 'JavaScript 和 CSS',
        imageAlt: 'OTIS 数据看板，包含交付周期和成本图表'
      },
      {
        id: 'proj-kcal',
        title: 'kcal.io',
        kind: 'Android，Kotlin',
        desc: '免费应用，根据 Health Connect 记录的真实消耗重新计算热量缺口或盈余。',
        stack: 'Kotlin 和 Health Connect',
        imageAlt: 'kcal.io 页面，展示应用中的摄入热量和宏量营养素'
      },
      {
        id: 'proj-feira',
        title: 'Feira Online',
        kind: '前端，网店',
        desc: '连接小农户与买家的网店，按类别浏览商品并加入购物车。',
        stack: 'JavaScript、HTML 和 CSS',
        imageAlt: 'Feira Online 首页，展示蔬菜和商品类别'
      },
      {
        id: 'proj-ready2work',
        title: 'Ready 2 Work',
        kind: '求职',
        desc: '帮助进入科技行业的准备平台，提供技术测评模拟。',
        stack: 'JavaScript 和 Python'
      },
      {
        id: 'proj-guia-cidadao',
        title: 'GuiaCidadão',
        kind: '前端，公共服务',
        desc: '一分钟快速筛查，无需注册，告诉你可以申请哪些公共福利。',
        stack: 'JavaScript 和 CSS'
      }
    ]
  },
  contact: {
    promptA: '在招软件开发实习生或初级开发吗？',
    promptB: '留下你的邮箱，我会回复。',
    label: '你的邮箱',
    placeholder: 'name@company.com',
    submit: '发送',
    submitting: '发送中',
    hint: '邮件会直接进入我的收件箱。',
    successTitle: '已收到。',
    successText: '我会回复到 {email}。',
    reset: '再发一封',
    emptyError: '请填写邮箱，方便我回复。',
    invalidError: '这个邮箱好像不完整，请检查 @ 和域名，例如 name@company.com。',
    networkError: '暂时没能发送，请直接写信到 eduardombielecky@gmail.com。',
    emailLabel: '邮箱',
    copy: '复制',
    copied: '已复制',
    subject: '来自作品集的联系',
    ticket: {
      title: '联系请求',
      lines: [
        ['寻找', '实习或初级职位'],
        ['技术栈', '后端、前端、移动端'],
        ['专业', '软件工程'],
        ['城市', '巴西圣贝尔纳多']
      ],
      thanks: '感谢来访'
    }
  },
  footer: {
    made: '于巴西圣贝尔纳多-杜坎普制作。'
  },
};
