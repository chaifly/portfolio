/**
 * Bilingual content for the home, about, skills, contact and blog pages.
 * Lives outside the page files so the pages can stay server components and so
 * adding new copy doesn’t require re-architecting anything.
 */

export type Localized<T> = { en: T; zh: T };

export const HOME_CONTENT: Localized<{
  heroEyebrow: string;
  heroTitleEnPrefix: string;
  heroTitleHighlight: string;
  heroTitleSuffix: string;
  heroSubtitle: string;
  heroIntro: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  stats: { value: string; label: string }[];
  featuredEyebrow: string;
  featuredTitle: string;
  featuredBody: string;
  featuredPrimary: { label: string; href: string };
  featuredSecondary: { label: string; href: string };
  featuredFacts: { label: string; value: string }[];
  projectsHeading: string;
  aboutHeading: string;
  aboutBody: string;
  aboutCta: { label: string; href: string };
}> = {
  en: {
    heroEyebrow: 'AI · Web · Product',
    heroTitleEnPrefix: 'Hi, I’m ',
    heroTitleHighlight: 'Chen',
    heroTitleSuffix: ' — I ship small products weekly.',
    heroSubtitle:
      'An AI-empowered developer and data practitioner who turns ideas into shipped, measurable software.',
    heroIntro:
      'This site is where I document the projects I’m building, the data decisions behind them, and what I’ve learned along the way. Currently working on a keyword-research pipeline that informs editorial sites like TechPulse and a public-records ALPR transparency project.',
    primaryCta: { label: 'See my work', href: '/projects' },
    secondaryCta: { label: 'About me', href: '/about' },
    stats: [
      { value: '8', label: 'live / shipped projects' },
      { value: '3+', label: 'years shipping data products' },
      { value: '4', label: 'industry domains' },
      { value: '1', label: 'ship / week goal' },
    ],
    featuredEyebrow: 'Currently building · TechPulse',
    featuredTitle: 'Editorial Apple intelligence, built from keyword research.',
    featuredBody:
      'TechPulse (techpulse.press) is the direct build of a separate Google Trends pipeline I run to identify long-term SEO opportunities. The iPhone 18 cluster has 100 keywords, 256K monthly volume, average KD 19.1 — and 81% informational intent. Pre-heating for the September 2026 launch window.',
    featuredPrimary: { label: 'Read the case', href: '/projects/techpulse' },
    featuredSecondary: { label: 'Visit TechPulse ↗', href: 'https://techpulse.press/' },
    featuredFacts: [
      { label: 'Cluster', value: 'iPhone 18' },
      { label: 'Monthly volume', value: '256K' },
      { label: 'Avg keyword difficulty', value: '19.1' },
      { label: 'Editorial status', value: 'Live' },
    ],
    projectsHeading: 'Featured projects',
    aboutHeading: 'A bit about me',
    aboutBody:
      'I started in data analytics and modeling at finance, telecom and content-safety companies, then gradually moved into building web products of my own. These days I split time between shipping niche sites and running the research pipeline that decides what to ship next.',
    aboutCta: { label: 'Read the full story', href: '/about' },
  },
  zh: {
    heroEyebrow: 'AI · Web · 产品',
    heroTitleEnPrefix: '你好，我是 ',
    heroTitleHighlight: 'Chen',
    heroTitleSuffix: ' —— 一周一个小产品的独立开发者。',
    heroSubtitle:
      'AI 赋能的产品型开发者 + 数据从业者，把想法做成能跑、能验证、能衡量的上线产品。',
    heroIntro:
      '这里记录了我正在做的项目、背后的数据决策，以及一路上踩过的坑。当下主要在做一个关键词研究流水线，驱动 TechPulse 这类编辑站和一个基于公开记录做的 ALPR 公民透明度项目。',
    primaryCta: { label: '看看作品', href: '/projects' },
    secondaryCta: { label: '关于我', href: '/about' },
    stats: [
      { value: '8', label: '已上线 / 已交付项目' },
      { value: '3+', label: '年数据产品实战' },
      { value: '4', label: '行业经验领域' },
      { value: '1', label: '周交付一个项目的节奏' },
    ],
    featuredEyebrow: '正在做 · TechPulse',
    featuredTitle: '由关键词研究驱动的 Apple 硬件编辑站',
    featuredBody:
      'TechPulse（techpulse.press）是我自建的 Google Trends 流水线筛选出来的「长期 SEO 机会」直接落地。iPhone 18 词簇：100 个关键词、月搜索量 256K、平均 KD 19.1、81% 是信息查询意图——抢在 2026 年 9 月发布前的 SEO 预热窗口。',
    featuredPrimary: { label: '看项目详情', href: '/projects/techpulse' },
    featuredSecondary: { label: '访问 TechPulse.press ↗', href: 'https://techpulse.press/' },
    featuredFacts: [
      { label: '核心词簇', value: 'iPhone 18' },
      { label: '月搜索量', value: '256K' },
      { label: '平均 KD', value: '19.1' },
      { label: '站点状态', value: '线上在跑' },
    ],
    projectsHeading: '精选项目',
    aboutHeading: '简单介绍',
    aboutBody:
      '职业起点是金融和电信行业的数据分析与建模，后来逐步转向自己做产品。这个站点里既是我上线项目的清单，也是我个人「如何思考产品」的工作日志。',
    aboutCta: { label: '看完整介绍', href: '/about' },
  },
};

export type TimelineEntry = {
  year: string;
  title: string;
  body: string;
};

export type ValueEntry = {
  title: string;
  body: string;
};

export const PROJECTS_CONTENT: Localized<{
  title: string;
  intro: string;
}> = {
  en: {
    title: 'Projects',
    intro:
      'A live view of every project I have shipped or actively run. Click through for the full case study, the stack, and the data behind it.',
  },
  zh: {
    title: '项目列表',
    intro:
      '这里是我已上线或正在维护的所有项目的总览。点击进入可以看到完整立项说明、技术栈和背后的数据。',
  },
};

export const ABOUT_CONTENT: Localized<{
  pageTitle: string;
  introParagraphs: string[];
  timelineHeading: string;
  timelineIntro: string;
  timeline: TimelineEntry[];
  valuesHeading: string;
  valuesIntro: string;
  values: ValueEntry[];
  closerHeading: string;
  closerBody: string;
}> = {
  en: {
    pageTitle: 'About me',
    introParagraphs: [
      'I’m Chen — an AI-focused developer and data professional with a background in finance, telecom operator analytics, local services and content safety. I started out in data analysis and metric modeling (Python, SQL, star-schema and wide-table design) supporting product and business decisions, then gradually moved into building web products of my own.',
      'On this site you’ll find both my finished work and the thinking behind it: a keyword-research pipeline that decides what to ship, a content-led editorial site built directly from that research, a calculator toolkit, a small browser-game hub, an experimental “don’t click” site, a memorial project, an emoji code tool, and a public-records-backed civic transparency project. None of these are toy demos — each one is shipped, domain-registered, and indexed.',
      'I try to operate with strong E-E-A-T: real-world experience, transparent methodology, technical depth, and a track record of projects you can click into and verify.',
    ],
    timelineHeading: 'A short journey',
    timelineIntro:
      'Approximate years and where I focused — the path from data to shipped product.',
    timeline: [
      {
        year: 'Now',
        title: 'Shipping niche sites with research front-ends',
        body:
          'Running a Google Trends + keyword-research pipeline that identifies long-term SEO opportunities, then building the editorial site directly from the data (TechPulse is the latest build). Adding a public-records-based civic project to the same workflow.',
      },
      {
        year: 'Recent',
        title: 'Web tooling, content, and headless CMS',
        body:
          'Shipped Calculate Central (calculator toolkit), GemGuidePro (gemstone content platform on Next.js + Sanity + Cloudflare), PuzzleZone (HTML5 game hub), Emojitik (TikTok emoji code tool), and the Digital Epitaphs project.',
      },
      {
        year: 'Earlier',
        title: 'Data analytics and metric systems at scale',
        body:
          'Worked across finance (risk, credit, transaction analysis), telecom (user lifecycle, plan strategy), local services (to-store / to-home merchant analytics) and content safety (policy + model performance review). Most of my time went into metric design, wide-table modeling, and translating business questions into measurable analysis.',
      },
    ],
    valuesHeading: 'How I work',
    valuesIntro:
      'Four rules I try to keep for every project, big or small.',
    values: [
      {
        title: 'Data drives the decision',
        body:
          'Before building, I check whether the opportunity is real — search volume, keyword difficulty, intent mix, domain fit. If the data doesn’t support it, I walk away.',
      },
      {
        title: 'Ship the smallest useful thing',
        body:
          'One project per week, end-to-end. The smaller the scope, the faster the feedback loop, the better the next iteration.',
      },
 {
        title: 'Human review as a hard gate',
        body:
          'AI assists drafting and editing. Every claim carries a source. No AI-generated quotes, no auto-publish, no silent edits.',
      },
      {
        title: 'Show the work',
        body:
          'Every claim, dataset and decision is verifiable — links to primary sources, public records, code, or the change log. No black boxes.',
      },
    ],
    closerHeading: 'What’s next',
    closerBody:
      'I’m currently looking to spend more time on the keyword-research pipeline and content-as-code workflows, and to ship one more niche editorial site in 2026. If you’re building something adjacent (research pipelines, content-led sites, civic transparency tooling), I’d love to compare notes.',
  },
  zh: {
    pageTitle: '关于我',
    introParagraphs: [
      '你好，我是 Chen —— 一名偏向 AI 与数据方向的开发者与数据从业者，先后在金融、电信运营商、本地生活和内容安全等业务线做过数据分析与建模。我的日常工作起点是 Python、SQL 和指标体系（星型模型 / 宽表建模），为产品和业务提供数据决策支持，再逐步把能力沉淀成自己上线的 Web 产品。',
      '这个站点既是我的项目清单，也是我的工作日志：一个 Google Trends + 关键词研究的流水线，一个由这个流水线直接驱动的编辑站，一个计算器工具集，一个小游戏聚合站，一个「不要点」实验项目，一个数字纪念项目，一个表情代码工具站，再加上基于公开记录做的公民透明度项目。每一个都是真的注册过域名、真的上线了的，不是 demo。',
      '我会尽量用清晰、可验证的方式呈现这些项目和工作方式，体现 E-E-A-T：真实经验、可见的方法论、可追溯的技术深度，以及「点进去就能验证」的项目成果。',
    ],
    timelineHeading: '简短的轨迹',
    timelineIntro: '近似年份与重心——从数据到上线产品的路径。',
    timeline: [
      {
        year: '当下',
        title: '用研究流水线驱动 niche 上线站',
        body:
          '维护一个 Google Trends + 关键词研究流水线，专门识别长期 SEO 机会，然后基于数据直接做编辑站（最新的就是 TechPulse）。同一条流水线也为基于公开记录的公民透明度项目供数据与流程支持。',
      },
      {
        year: '近两年',
        title: 'Web 工具、内容与 Headless CMS',
        body:
          '陆续上线 Calculate Central（计算器集合）、GemGuidePro（宝石内容站，Next.js + Sanity + Cloudflare）、PuzzleZone（HTML5 小游戏聚合站）、Emojitik（TikTok 隐藏表情）、数字纪念项目等。',
      },
      {
        year: '再之前',
        title: '数据分析与指标体系',
        body:
          '在金融（风控 / 授信 / 交易分析）、电信运营商（用户生命周期 / 套餐策略 / 运营评估）、本地生活（到店 / 到家商户分析）以及内容安全（策略 + 模型效果分析）等业务线长期工作，大部分时间在指标设计、宽表建模和把业务问题拆成可度量分析。',
      },
    ],
    valuesHeading: '我的工作方式',
    valuesIntro: '无论项目大小，我会尽量守住四条原则。',
    values: [
      {
        title: '数据先行',
        body:
          '动手之前先验证机会是否真实存在——搜索量、KD、意图分布、域名适配度。如果数据不支持，我就放弃这个项目。',
      },
      {
        title: '交付最小可用版本',
        body:
          '一周一个项目，端到端上线。范围越小，反馈越快，下一版越好。',
      },
      {
        title: '把人工审核做成硬关卡',
        body:
          'AI 只参与草稿与润色，不生成引用、不自动发布、不静默改稿。每条结论都必须能溯源。',
      },
      {
        title: '过程可见',
        body:
          '每条数据、每条结论都能验证——链回原始记录、原始文件、代码或变更日志。不留黑盒。',
      },
    ],
    closerHeading: '下一步',
    closerBody:
      '接下来这段时间，我会继续把关键词研究流水线和 content-as-code 工作流做到更稳，并在 2026 年再多交付一个 niche 编辑站。如果你也在做研究流水线、内容驱动站或公民透明度工具，欢迎一起交流。',
  },
};

export type SkillCategory = {
  name: string;
  intro: string;
  skills: { name: string; level: 1 | 2 | 3 | 4 | 5 }[];
};

export const SKILLS_CONTENT: Localized<{
  pageTitle: string;
  pageIntro: string;
  addingHeading: string;
  addingText: string;
  categories: SkillCategory[];
}> = {
  en: {
    pageTitle: 'Skills & experience',
    pageIntro:
      'A snapshot of the languages, frameworks and domain areas I work in day-to-day. Levels reflect how confidently I ship production work in each — not just familiarity.',
    addingHeading: 'What I’m actively adding this quarter',
    addingText:
      'I’m currently deepening Next.js (App Router + Turbopack), MDX-driven content pipelines, and basic machine-learning workflow integration. Anything I ship ships with a PR review trail.',
    categories: [
      {
        name: 'Languages',
        intro: 'Day-to-day tools for building and analysing.',
        skills: [
          { name: 'TypeScript', level: 4 },
          { name: 'JavaScript (ES2022+)', level: 4 },
          { name: 'Python', level: 5 },
          { name: 'SQL', level: 5 },
          { name: 'Bash / shell scripting', level: 3 },
          { name: 'HTML / CSS', level: 5 },
        ],
      },
      {
        name: 'Frameworks & runtime',
        intro: 'What I build production sites and apps with.',
        skills: [
          { name: 'Next.js (App Router)', level: 5 },
          { name: 'React', level: 4 },
          { name: 'Tailwind CSS', level: 4 },
          { name: 'Node.js', level: 4 },
          { name: 'MDX + content-as-code', level: 4 },
          { name: 'Sanity / headless CMS', level: 3 },
        ],
      },
      {
        name: 'Data & analytics',
        intro: 'The analytics side of the work.',
        skills: [
          { name: 'pandas / numpy', level: 5 },
          { name: 'scikit-learn (basic ML)', level: 3 },
          { name: 'Data modeling (star schema, wide tables)', level: 5 },
          { name: 'Metric system design', level: 5 },
          { name: 'SEO + keyword research (Google Trends, KD, intent)', level: 4 },
          { name: 'Data visualisation (custom + BI)', level: 4 },
        ],
      },
      {
        name: 'Infra & delivery',
        intro: 'How things get shipped and kept running.',
        skills: [
          { name: 'Vercel', level: 4 },
          { name: 'Cloudflare Pages / Workers', level: 4 },
          { name: 'GitHub Actions / CI', level: 3 },
          { name: 'Plausible analytics', level: 3 },
          { name: 'Pagefind (client-side search)', level: 3 },
          { name: 'Vercel Analytics', level: 3 },
        ],
      },
      {
        name: 'Domain experience',
        intro: 'Industries where I’ve shipped real work.',
        skills: [
          { name: 'Finance · risk control & credit', level: 5 },
          { name: 'Telecom · user lifecycle & plans', level: 5 },
          { name: 'Local services · merchant analytics', level: 4 },
          { name: 'Content safety · policy + model review', level: 4 },
          { name: 'AI products · research-to-product loop', level: 4 },
          { name: 'Civic transparency · public-records work', level: 3 },
        ],
      },
    ],
  },
  zh: {
    pageTitle: '技能与经验',
    pageIntro:
      '平时工作中会用的语言、框架与领域。等级反映我能稳定交付生产级工作的程度，不只是「接触过」。',
    addingHeading: '本季度正在加深的方向',
    addingText:
      '重点放在 Next.js（App Router + Turbopack）、MDX 内容流水线、以及基础机器学习工作流与我现有栈的接驳。所有上线都带 PR review 轨迹。',
    categories: [
      {
        name: '编程语言',
        intro: '平时主要用的开发与数据分析语言。',
        skills: [
          { name: 'TypeScript', level: 4 },
          { name: 'JavaScript (ES2022+)', level: 4 },
          { name: 'Python', level: 5 },
          { name: 'SQL', level: 5 },
          { name: 'Bash / Shell', level: 3 },
          { name: 'HTML / CSS', level: 5 },
        ],
      },
      {
        name: '框架与运行时',
        intro: '生产站点和应用的主力框架。',
        skills: [
          { name: 'Next.js（App Router）', level: 5 },
          { name: 'React', level: 4 },
          { name: 'Tailwind CSS', level: 4 },
          { name: 'Node.js', level: 4 },
          { name: 'MDX + 内容即代码', level: 4 },
          { name: 'Sanity / Headless CMS', level: 3 },
        ],
      },
      {
        name: '数据分析',
        intro: '数据侧的技能栈。',
        skills: [
          { name: 'pandas / numpy', level: 5 },
          { name: 'scikit-learn（基础机器学习）', level: 3 },
          { name: '数据建模（星型模型 / 宽表）', level: 5 },
          { name: '指标体系设计', level: 5 },
          { name: 'SEO + 关键词研究（Trends / KD / 意图）', level: 4 },
          { name: '数据可视化（自建 + BI）', level: 4 },
        ],
      },
      {
        name: '基础与发布',
        intro: '怎么把东西送上线并保持运行。',
        skills: [
          { name: 'Vercel', level: 4 },
          { name: 'Cloudflare Pages / Workers', level: 4 },
          { name: 'GitHub Actions / CI', level: 3 },
          { name: 'Plausible 隐私分析', level: 3 },
          { name: 'Pagefind（客户端搜索）', level: 3 },
          { name: 'Vercel Analytics', level: 3 },
        ],
      },
      {
        name: '行业经验',
        intro: '真正交付过的行业场景。',
        skills: [
          { name: '金融 · 风控与授信', level: 5 },
          { name: '电信 · 用户生命周期与套餐', level: 5 },
          { name: '本地生活 · 商户分析', level: 4 },
          { name: '内容安全 · 策略与模型评估', level: 4 },
          { name: 'AI 产品 · 研究-产品闭环', level: 4 },
          { name: '公民透明度 · 公开记录工作', level: 3 },
        ],
      },
    ],
  },
};

export type Channel = {
  label: string;
  value: string;
  href: string;
  hint: string;
};

export const CONTACT_CONTENT: Localized<{
  pageTitle: string;
  intro: string;
  channels: Channel[];
  availabilityLabel: string;
  availabilityBody: string;
  expectationHeading: string;
  expectations: string[];
}> = {
  en: {
    pageTitle: 'Contact',
    intro:
      'Pick whichever channel fits the conversation — fast for casual, structured for project work. I read everything but respond in priority order.',
    channels: [
      {
        label: 'X (Twitter)',
        value: '@Chaifly',
        href: 'https://x.com/Chaifly',
        hint: 'My primary public channel for updates and casual conversation.',
      },
      {
        label: 'Email',
        value: 'hello@aicoder.ink',
        href: 'mailto:hello@aicoder.ink',
        hint: 'For collaboration, partnership, or longer questions.',
      },
      {
        label: 'GitHub',
        value: 'github.com/chaifly',
        href: 'https://github.com/chaifly',
        hint: 'Open an issue or PR on any of my public repos.',
      },
      {
        label: 'Project notes',
        value: 'aicoder.ink/blog',
        href: '/blog',
        hint: 'Longer-form updates — subscribe via RSS or just read when curious.',
      },
    ],
    availabilityLabel: 'Currently',
    availabilityBody:
      'Open to short-term collaboration on data products, research pipelines and content-led sites. Async-friendly, CN + UK hours overlap.',
    expectationHeading: 'How I handle inbound',
    expectations: [
      'Twitter DMs → best for short, casual notes; I usually reply within a day.',
      'Email → best for substantive questions, partnerships or anything that needs context.',
      'GitHub issues → for bugs / discussions on a specific repo or site.',
      'If something is clearly commercial, please mention timeline and scope up front so I can respond usefully.',
    ],
  },
  zh: {
    pageTitle: '联系我',
    intro:
      '挑一个适合的渠道就行：日常交流用 X，正式合作或需要上下文的问题用邮件。我会按优先级回复。',
    channels: [
      {
        label: 'X (Twitter)',
        value: '@Chaifly',
        href: 'https://x.com/Chaifly',
        hint: '日常更新和轻量交流的主要渠道。',
      },
      {
        label: '邮箱',
        value: 'hello@aicoder.ink',
        href: 'mailto:hello@aicoder.ink',
        hint: '合作 / 合作邀约 / 偏正式问题。',
      },
      {
        label: 'GitHub',
        value: 'github.com/chaifly',
        href: 'https://github.com/chaifly',
        hint: '在我的公开仓库上开 issue 或 PR。',
      },
      {
        label: '博客',
        value: 'aicoder.ink/blog',
        href: '/blog',
        hint: '长文记录——可以订阅 RSS，或偶尔翻一翻。',
      },
    ],
    availabilityLabel: '当下状态',
    availabilityBody:
      '对短期的数据产品、研究流水线、内容驱动站合作持开放态度。异步友好，时区上中国 + 英国时段有重叠。',
    expectationHeading: '我的处理习惯',
    expectations: [
      'X 私信：偏短、日常交流，通常一天内回复。',
      '邮箱：偏正式、合作或需要上下文的问题。',
      'GitHub issue：针对具体仓库或站点的 bug / 讨论。',
      '如果是明显的商业沟通，请直接带上时间线与范围，我才能给出有意义的回复。',
    ],
  },
};

export type BlogPost = {
  slug: string;
  date: string;
  readingMinutes: number;
  tagsEn: string[];
  tagsZh: string[];
  titleEn: string;
  titleZh: string;
  summaryEn: string;
  summaryZh: string;
  bodyEn: string[];
  bodyZh: string[];
};

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'first-month',
    date: '2024-11-12',
    readingMinutes: 4,
    tagsEn: ['personal', 'shipping', 'review'],
    tagsZh: ['个人', '上线', '复盘'],
    titleEn: 'First month building small projects on my personal site',
    titleZh: '个人网站一周一项目首月记',
    summaryEn:
      'Reflecting on the first month of trying to ship one small project a week — what worked, what didn’t, and what I’m changing.',
    summaryZh:
      '复盘在一周一个小项目节奏下的首月经历，什么有效，什么无效，下一步要改什么。',
    bodyEn: [
      'It has actually been almost two months already. If I exclude the initial learning period, that leaves a bit more than one month of real execution, roughly keeping a pace of one small project per week. I started from being completely unfamiliar with the whole process, and now I more or less understand the end-to-end flow. Traffic-wise, though, there is not much to show yet — maybe it simply needs time.',
      'The first project was purely an experiment, inspired by the classic [useless web] pattern. Just a single-page site in a similar style. Unsurprisingly, the results were pretty average, but I also did not set high expectations for it.',
      'The second project was a small browser game hub. I followed advice that “games are easier to get traffic” and targeted keywords around unblocked games. At first I collected games manually from GitHub, and only later did I manage to get an embeddable games list directly from publishers. There were a few twists along the way, and when the site finally went live I had some hopes for it — but performance has still been underwhelming. Realistically, if the game list is that easy to obtain, anyone can build a similar site.',
      'On the operations side, I have invested very little time so far. I almost did not build backlinks or do any serious promotion, which is clearly something I need to fix going forward.',
      'The remaining projects are more or less in the same category; I will probably introduce them in future posts when I have more data points.',
      'For the next project, I want to try building a small SaaS product. The exact direction is still under consideration, but I am looking forward to exploring it — wish me luck.',
    ],
    bodyZh: [
      '其实已经快两个月了。去掉最开始的学习期，留下的「真正执行时间」差不多有一个月，基本保持一周一个项目的节奏。一开始我对整个链路完全生疏，到现在算把端到端流程摸清了。流量数据倒是真的还看不到——可能只是需要时间。',
      '第一个项目是纯实验，参考了经典的「useless web / 不要点」思路，就做了一个单页站。意料之中效果平平，我自己对它也没抱太高预期。',
      '第二个项目是做浏览器小游戏聚合站。听人讲「游戏是更容易起量的赛道」，就选了 unblocked games 这条关键词方向。一开始是从 GitHub 上手动扒游戏列表，后来才搞到一份能直接嵌入的 publisher 列表。中间折腾了几次，站点上线时我有点期待，但实际表现还是低于预期。说到底，游戏列表如果谁都能拿到，那这条赛道谁都能做。',
      '运营侧到现在花的时间还很少，外链和正经推广基本没做，这块明显是我接下来要补的。',
      '剩下的几个项目大致同一类，等我再积累些数据点再单独写一篇介绍。',
      '下一个项目我想试试做一款小 SaaS，具体方向还在考虑，但我很期待去探索——祝我好运。',
    ],
  },
  {
    slug: 'shipping-techpulse',
    date: '2026-01-18',
    readingMinutes: 7,
    tagsEn: ['techpulse', 'seo', 'research', 'process'],
    tagsZh: ['TechPulse', 'SEO', '研究', '流程'],
    titleEn: 'Shipping TechPulse: a keyword-research pipeline play-by-play',
    titleZh: '把 TechPulse 上线：一个关键词研究流水线的全过程',
    summaryEn:
      'How I went from “iPhone 18 sounds like an SEO opportunity” to a live editorial Apple site — the data, the decisions and the parts I’d do differently.',
    summaryZh:
      '从「iPhone 18 听起来是个 SEO 机会」到真正上一个 Apple 编辑站，本文把这背后的数据、决策和可以改进的点都摊开。',
    bodyEn: [
      'TechPulse (techpulse.press) is the most recent project I’ve shipped, and the first one where the upstream research was more interesting than the site itself. So this post is mostly about that pipeline and what it took to turn it into a live site without making any of the obvious mistakes.',
      'Step one was deciding whether the opportunity was real. I ran the iPhone 18 keyword cluster through my standard scoring: monthly US volume, average keyword difficulty, intent mix, brand / trademark risk, and seasonality profile. The numbers came back unusually clean: 100 keywords, 256K monthly volume, average KD 19.1, 81% informational intent, and a strong seasonal peak every September that maps onto Apple’s launch window.',
      'The brand had to be Apple-safe. No “iPhone” or “Apple” in the domain (trademark risk), no model-year anchor (iPhone 18 becomes old in 24 months), short and pronounceable, and on a TLD Google already trusts for news / editorial. After a few hours of brainstorming and one false start, I landed on techpulse + the .press TLD. Two syllables, no trademark conflict, future-proof for iPhone 19, iPhone Fold and visionOS coverage.',
      'Content architecture was decided by intent. News and rumor pages for time-sensitive stories with a status field (Confirmed / Credible / Possible / Speculative) and a primary-source link on every claim. Spec hub pages for each device with a structured spec table. FAQ pages for question-form queries that target “People also ask” and featured snippets. Compare / Best pages for commercial-intent queries. The first sprint shipped 36 pages covering iPhone 18 lineup, iPhone Fold and iOS 27.',
      'E-E-A-T was a hard gate, not a checklist. Every article lives in MDX with a frontmatter status machine (draft → review → approved) — only “approved” can ship. Changes go through Git pull requests; the diff is the audit trail and the editor’s approval is a literal review on the PR. AI assists with drafting and editing only. No AI-generated quotes, no AI-invented data, no auto-publish.',
      'For tech, I went static-first: Next.js (App Router), Tailwind CSS, Cloudflare Pages for global delivery, Pagefind for client-side search, Beehiiv for the newsletter, Plausible for privacy-respecting analytics. The same MDX source feeds the site, the RSS feed and any future partner syndication.',
      'What I’d do differently next time: build the site 4 months ahead instead of 3 (the iPhone 18 cluster has more headroom than I realised), and start the Cancel Tracker from day one — once a city starts debating an ALPR exit, the conversation moves fast.',
      'If you’re thinking about something similar, the single biggest unlock for me was treating keyword research as an upstream product, not a one-off SEO task. It changes what you ship, what you name it, what you build on day one, and what you don’t bother with at all.',
    ],
    bodyZh: [
      'TechPulse（techpulse.press）是我最近上线的项目，也是第一个「上游研究本身比站点更有意思」的项目。所以这篇主要写流水线，以及如何把它稳妥地变成一个能真正上线的站点，而不是踩那些最常见的坑。',
      '第一步是判断这个机会是不是真的。我把 iPhone 18 词簇跑了一遍标准的打分：US 月搜索量、平均 KD、意图分布、品牌 / 商标风险、季节性。得到的数据非常干净：100 个词、月搜索量 256K、平均 KD 19.1、81% 信息查询意图、每年 9 月的高峰恰好压在 Apple 发布窗口。',
      '品牌名必须避开 Apple 的商标风险：域名里不能带 “iPhone” 或 “Apple”（商标），不能绑死在某个型号年（iPhone 18 两年后就过时），要短、好发音，TLD 选 Google 已经信任的、用于新闻 / 资讯的。几个小时脑暴加一次走偏之后，定下来 techpulse + .press 两个音节，无商标冲突，未来能自然覆盖 iPhone 19、iPhone Fold、visionOS。',
      '内容架构以「搜索意图」为单位：News / Rumors 走时效性新闻，每条带 Confirmed / Credible / Possible / Speculative 状态字段和一手信源；Specs 是按机型组织的结构化规格 hub；FAQ 用问答型 H2 / H3 直接对「People also ask」和精选摘要；Compare / Best 页吃商业意图。第一个 sprint 一共交付 36 页，覆盖 iPhone 18 系列、iPhone Fold 和 iOS 27。',
      'E-E-A-T 不是清单，是硬关卡：每篇文章都是 MDX 文件，frontmatter 状态机 draft → review → approved，只有 approved 能上线；变更全部走 Git PR，diff 即审计，编辑的 review 字面写在 PR 上；AI 只参与草稿与润色，不生成引用、不编造数据、不自动发布。',
      '技术栈选了静态优先：Next.js（App Router）+ Tailwind CSS、Cloudflare Pages 全球静态分发、Pagefind 客户端搜索、Beehiiv 做 Newsletter、Plausible 做隐私优先流量分析。同一个 MDX 数据源同时驱动站点、RSS 与未来的合作伙伴分发。',
      '如果下一次重新做，我会提前 4 个月而不是 3 个月建站（iPhone 18 这个词簇比我预想的窗口更宽），并且 Cancel Tracker 从 day one 就开始做——一旦某个城市开始讨论退出 ALPR，对话推进的速度会非常快。',
      '如果你也在想类似的事，对我帮助最大的一个转变是把关键词研究当成「上游产品」来做，而不是一次性 SEO 任务。它会改变你交付什么、怎么命名、第一天就建什么、以及哪些东西从头到尾不做。',
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
