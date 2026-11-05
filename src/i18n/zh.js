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
