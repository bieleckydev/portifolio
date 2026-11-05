export const zh = {
  nav: {
    projects: '项目',
    about: '关于',
    experience: '经历',
    contact: '联系',
    menu: '菜单',
    close: '关闭',
    home: 'Eduardo Bielecky，回到顶部',
    mainNav: '主导航',
    whatsapp: '通过 WhatsApp 联系'
  },
  hero: {
    lead: '正在成长的 Java 开发者。我开发了 Adega do Dino 烤肉店正在使用的收银系统。',
    facts: '软件工程在读，现居巴西圣贝尔纳多-杜坎普。正在寻找实习或初级开发职位。',
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
    live: '打开系统',
    imageAlt: 'Adega do Dino 收银系统的入口界面，可选择收银、服务员和统计角色',
    caption: '系统在手机上的入口界面。'
  },
  about: {
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
    title: '技术专长',
    subtitle:
      '将鼠标悬停在浮动标签上，即可查看该项技术在真实项目中的实践总结。',
    inspectAria: '查看详情：',
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
            featured: true
          },
          {
            id: 'skill-sql',
            name: 'SQL 与数据建模',
            project: '餐厅 POS 收银管理系统',
            summary:
              '结构化 SQL 查询构建、关系型库存数据建模、销售记录持久化与满足 ACID 的事务一致性。',
            featured: true
          },
          {
            id: 'skill-python',
            name: 'Python',
            project: '自动化脚本与数据处理',
            summary:
              '文件处理自动化脚本开发、日常学术任务自动化及基础数值数据处理算法。',
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
            featured: true
          },
          {
            id: 'skill-git',
            name: 'Git & GitHub',
            project: '所有工程的版本控制',
            summary:
              '语义化版本控制、分支管理、公共开源仓库文档化维护（Caixa Adega, OTIS, Feira Online）与协作。',
            featured: true
          },
          {
            id: 'skill-vscode',
            name: 'VS Code',
            project: '数字菜单与前端工程',
            summary:
              '移动端优先界面快速原型开发、轻量布局排版与现代 Web 组件敏捷编辑。',
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
            featured: true
          },
          {
            id: 'skill-mobile-first',
            name: '移动端优先架构',
            project: 'Dino 餐厅电子菜单 & OTIS',
            summary:
              '极速秒开的响应式 Web 界面，专为高客流量与订单高峰下的触控操作优化。',
            featured: true
          },
          {
            id: 'skill-apis',
            name: 'API 接口集成',
            project: '异步数据通信与表单服务',
            summary:
              '异步 HTTP 通信、严格的前端数据载荷校验及高容错网络请求处理。',
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
            featured: true
          },
          {
            id: 'skill-agile',
            name: '敏捷项目管理 (Trello)',
            project: '迭代规划与任务跟踪',
            summary:
              '产品待办列表梳理、看板任务拆分、风险阻碍跟进与增量式迭代交付。',
          },
          {
            id: 'skill-office',
            name: '数据与库存运营管理',
            project: 'Adega do Dino 餐饮业务运营',
            summary:
              '动态库存核算表、运营成本自动化分析及物料标准化盘点。',
          },
          {
            id: 'skill-idiomas',
            name: '专业英语',
            project: '官方技术文档与 RFC 规范',
            summary:
              '熟练阅读英文技术 API 文档、Java 架构规范手册、设计模式及全球技术社区讨论。',
          }
        ]
      }
    ]
  },
  experience: {
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
    title: '其他项目',
    live: '在线查看',
    code: '查看代码',
    updated: '{when}更新',
    items: [
      {
        id: 'proj-caixa-adega',
        title: '收银系统'
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
        stack: 'JavaScript'
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
};
