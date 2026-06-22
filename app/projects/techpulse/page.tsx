import ProjectDetail from '../../../components/ProjectDetail';

export default function TechPulsePage() {
  return (
    <ProjectDetail
      currentSlug="techpulse"
      externalUrl="https://techpulse.press/"
      externalLabel="Visit TechPulse.press ↗"
      en={{
        title: 'TechPulse - A Keyword-Research-Backed Apple Hardware Site',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'TechPulse (techpulse.press) is an editorial Apple hardware intelligence site covering the iPhone 18 lineup, iPhone Fold, iOS 27 and more. It was not built on a hunch - it is the direct output of a separate keyword-research project I run to identify long-term SEO opportunities.',
              'The site exists because the data pointed at one conclusion: the Apple hardware keyword cluster has the rare combination of high search volume, low competitive density (KD), and an information-intent profile that plays to a small, fast, content-led site.',
            ],
          },
          {
            heading: 'Where the idea came from: the keyword research',
            paragraphs: [
              'TechPulse is the direct build of my Google Trends & keyword research pipeline. The pipeline scrapes Google Trends "Daily Search Trends" and "Year in Search 2025" (US locale), combines them with deep keyword mining, and ranks candidates by long-term potential.',
            ],
            listItems: [
              'Apple / iPhone was identified as a top-tier long-term candidate: a Year-in-Search evergreen topic with a strong seasonal peak every September.',
              '50,003 iPhone-related keywords were mined, totaling 67.5M monthly US search volume, with 81% informational intent - the ideal shape for a content site.',
              'The iPhone 18 cluster specifically: 100 keywords / 256K monthly volume / average KD 19.1 - new-model terms are wide open because no site has owned them yet.',
              'Sub-clusters with the lowest entry friction: iPhone 18 Pro (KD 9.5), iPhone 18 Pro Max (KD 9.8), iPhone 18 release date (KD 28.7), iPhone 18 design (KD 16.3).',
              'Decision: build the site 3 months ahead of the September 2026 iPhone 18 launch - the SEO pre-heating window where informational intent peaks and big sites have not yet published roundups.',
            ],
          },
          {
            heading: 'Why "TechPulse" and why .press',
            paragraphs: [
              'The domain was selected against a hard rule set drawn from the same research: never put "iPhone" or "Apple" in the domain (trademark risk), never pin the name to a model year (iPhone 18 becomes old in 24 months), short and pronounceable, and prefer a TLD Google already trusts for news/intelligence content.',
            ],
            listItems: [
              'techpulse = 8 characters, two syllables ("tek-puls"), no Apple trademark, no model-year anchor.',
              '.press is a Google-trusted niche TLD for news / editorial content, signalling intent at the SERP level.',
              'The .press TLD lets the brand cover future beats (iPhone 19, iPhone Fold, visionOS, etc.) without a rebrand.',
            ],
          },
          {
            heading: 'Content architecture: 4 pillars, 36 pages in Sprint 1',
            paragraphs: [
              'TechPulse is built around four content pillars, each designed to answer a different kind of search intent the research surfaced:',
            ],
            listItems: [
              'News & Rumors - individual rumor pages with a status field (Confirmed / Credible / Possible / Speculative) and a primary-source link on every claim.',
              'Specs - device hub pages for iPhone 18 / 18 Pro / 18 Pro Max / 18e / Air 2 / Fold, each backed by a structured spec sheet.',
              'FAQ - question-form H2/H3 with direct Yes/No answers, designed to win Google "People also ask" and featured snippets.',
              'Compare / Best - side-by-side spec tables and "best iPhone case / best carrier deal" comparison pages for commercial-intent queries.',
            ],
          },
          {
            heading: 'E-E-A-T by design, not by checklist',
            paragraphs: [
              'AI-generated content at scale is exactly what Google Helpful Content penalises, so the editorial workflow is built around human review as a hard gate:',
            ],
            listItems: [
              'Every article lives in MDX with a frontmatter status machine: draft → review → approved. Only "approved" can be published.',
              'Changes go through Git pull requests - the diff is the audit trail, and the editor\'s approval is a literal review on the PR.',
              'Every claim carries a Confidence field (Confirmed / Credible / Possible / Speculative) and at least one primary-source link.',
              'Structured data (Organization, Person, Article, FAQPage, BreadcrumbList) is generated from the same source files, not bolted on later.',
              'AI assists with drafting and editing only. No AI-generated quotes, no AI-invented data, no auto-publish.',
            ],
          },
          {
            heading: 'Tech stack & launch',
            listItems: [
              'Next.js (App Router) + Tailwind CSS for a fast, content-first site with zero runtime database dependencies.',
              'Cloudflare Pages for global static delivery and zero-downtime deploys on every approved PR.',
              'Pagefind for client-side full-text search across the rumour and spec libraries.',
              'Beehiiv for the newsletter; Plausible for privacy-respecting traffic analytics.',
              'Content + structured data live together in MDX + data/*.json, so the same source feeds the site, the RSS feed and any future partner syndication.',
            ],
          },
        ],
        cta: {
          prefix: 'The site is live and tracking the iPhone 18 news cycle now: ',
          text: 'open TechPulse.press',
          href: 'https://techpulse.press/',
        },
        external: {
          label: 'Visit TechPulse.press ↗',
          href: 'https://techpulse.press/',
        },
      }}
      zh={{
        title: 'TechPulse - 由关键词研究驱动上线的 Apple 硬件站',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'TechPulse（techpulse.press）是一个面向 iPhone 18 系列、iPhone Fold、iOS 27 等的 Apple 硬件编辑站。它不是凭感觉建的——它是我独立维护的关键词研究流水线筛选出来的「长期 SEO 机会」的直接落地。',
              '之所以做这个站，是因为数据指向同一个结论：Apple 硬件关键词群同时具备高搜索量、低竞争密度（KD）和适合内容站的信息查询意图分布——这是小而快的内容站最稀缺的机会。',
            ],
          },
          {
            heading: '立项依据：Google Trends 与关键词研究',
            paragraphs: [
              'TechPulse 是我自建的「Google Trends + 关键词研究」流水线的产物。流水线抓取 Google Trends 的 Daily Search Trends 与 Year in Search 2025（US locale），再做长尾词深挖、聚类和打分，最终给出长期潜力候选清单。',
            ],
            listItems: [
              'Apple / iPhone 被识别为顶级长期候选：Year in Search 常青主题，每年 9 月有强季节性高峰。',
              '围绕 iPhone 的关键词库共 50,003 个，US 月总搜索量 67.5M，81% 是信息查询意图——典型的内容站盘面。',
              'iPhone 18 子集群：100 词 / 月搜索量 256K / 平均 KD 19.1——新机型词几乎没有站占据，先发优势窗口明确。',
              '门槛最低的几个子集群：iPhone 18 Pro（KD 9.5）、iPhone 18 Pro Max（KD 9.8）、iPhone 18 release date（KD 28.7）、iPhone 18 design（KD 16.3）。',
              '节奏：在 2026 年 9 月 iPhone 18 发布前 3 个月建站——信息查询意图的搜索高峰窗口，大站尚未产出汇总稿。',
            ],
          },
          {
            heading: '为什么是「TechPulse」+ .press',
            paragraphs: [
              '域名选型沿用同一份研究产出的硬规则：域名里不能带 "iPhone" 或 "Apple"（商标风险）；不能绑死型号年（iPhone 18 两年后就过时）；要短、好发音；TLD 优先选 Google 已经建立信任的 niche TLD。',
            ],
            listItems: [
              'techpulse = 8 字符 / 双音节（"tek-puls"），无 Apple 商标，无型号年绑定。',
              '.press 是 Google 信任的 niche 新闻 / 资讯 TLD，在 SERP 上一眼就能传达「编辑站」定位。',
              '该 TLD 让品牌可以自然覆盖未来主题（iPhone 19、iPhone Fold、visionOS 等），无需换域。',
            ],
          },
          {
            heading: '内容架构：4 大支柱 + Sprint 1 36 页',
            paragraphs: [
              'TechPulse 内容围绕 4 大支柱展开，分别对应研究里识别出的不同搜索意图：',
            ],
            listItems: [
              'News & Rumors - 每条传闻独立成页，附信心字段（Confirmed / Credible / Possible / Speculative）和一手来源链接。',
              'Specs - iPhone 18 / 18 Pro / 18 Pro Max / 18e / Air 2 / Fold 的设备 hub 页，结构化规格表。',
              'FAQ - 问句式 H2 / H3 + 直接的 Yes/No 答案，专门狙 Google「People also ask」和精选摘要。',
              'Compare / Best - 横向规格对比表 +「最佳 iPhone 保护壳 / 最佳运营商 Deal」类对比页，吃商业意图流量。',
            ],
          },
          {
            heading: 'E-E-A-T：把人工审核做成硬关卡',
            paragraphs: [
              '批量 AI 内容正是 Google Helpful Content 系统打压的对象，所以编辑流程把「人类编辑审核」作为发布硬门禁：',
            ],
            listItems: [
              '每篇文章都是 MDX 文件，frontmatter 状态机：draft → review → approved，只有 approved 可以发布。',
              '内容变更走 Git Pull Request，diff 即审计日志，编辑审核是 PR 上的真实 review。',
              '每条结论都带 Confidence 字段（Confirmed / Credible / Possible / Speculative）和至少一条一手来源链接。',
              'Organization / Person / Article / FAQPage / BreadcrumbList 等结构化数据与内容同一源生成，不是事后贴上去。',
              'AI 仅用于草稿与润色；不生成引用、不编造数据、不自动发布。',
            ],
          },
          {
            heading: '技术栈与上线',
            listItems: [
              'Next.js（App Router）+ Tailwind CSS，零运行时数据库，内容优先。',
              'Cloudflare Pages 提供全球静态分发与零停机发布：每次 approved PR 即部署。',
              'Pagefind 提供客户端全文搜索，覆盖传闻与规格库。',
              'Beehiiv 做 Newsletter，Plausible 做隐私优先的流量分析。',
              '内容 + 结构化数据共生在 MDX + data/*.json，站点、RSS、未来的合作伙伴分发共用同一数据源。',
            ],
          },
        ],
        cta: {
          prefix: '站点已上线，正在追踪 iPhone 18 整个发布周期：',
          text: '打开 TechPulse.press',
          href: 'https://techpulse.press/',
        },
        external: {
          label: '访问 TechPulse.press ↗',
          href: 'https://techpulse.press/',
        },
      }}
    />
  );
}
