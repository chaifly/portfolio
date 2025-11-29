import ProjectDetail from '../../../components/ProjectDetail';

export default function GemGuideProPage() {
  return (
    <ProjectDetail
      currentSlug="GemGuidePro"
      en={{
        title: 'GemGuidePro.com – AI-Driven Gemstone Guide Platform',
        sections: [
          {
            heading: 'Overview',
            paragraphs: [
              'GemGuidePro.com is an authoritative content platform focused on transparent, beginner-friendly guides for gemstones and birthstones.',
              'It addresses information asymmetry in the jewellery market by providing 4Cs evaluation, care instructions, and practical buying advice, with monetisation achieved through affiliate partnerships.',
            ],
          },
          {
            heading: 'Technology & Architecture',
            listItems: [
              'Next.js with Static Export for ultra-fast, SEO-friendly content pages.',
              'Sanity.io as a headless CMS to manage structured articles, guides, and affiliate recommendations.',
              'Cloudflare Pages for globally distributed, zero-downtime deployment.',
              'Cloudflare DNS plus SSL/CDN for secure, low-latency access worldwide.',
            ],
          },
          {
            heading: 'Automated Content-as-Code Workflow',
            paragraphs: [
              'The project is built around a “content-as-code” mindset: every content change flows through the same automated pipeline as code.',
            ],
            listItems: [
              'Sanity Webhooks trigger builds whenever editors click “Publish” in the CMS.',
              'Cloudflare Pages pulls the latest content and redeploys the site automatically.',
              'GitOps-style configuration keeps infrastructure and workflows reproducible and easy to maintain.',
            ],
          },
          {
            heading: 'Impact & Personal Contributions',
            listItems: [
              'Designed and implemented the end-to-end architecture from domain setup to production deployment.',
              'Built a content library covering 12 monthly birthstone guides and several foundational education articles.',
              'Defined an AI-assisted content pipeline for keyword research, draft generation, and visual asset creation (logo and illustrations).',
            ],
          },
        ],
        cta: {
          prefix: 'To read the live gemstone guides, please ',
          text: 'visit GemGuidePro.com',
          href: 'https://gemguidepro.com/',
        },
      }}
      zh={{
        title: 'GemGuidePro.com - 宝石与诞生石指南内容平台',
        sections: [
          {
            heading: '项目概述',
            paragraphs: [
              'GemGuidePro.com 是一个专注于宝石和诞生石购买指南的专业内容平台，为普通消费者提供清晰、可信的决策信息。',
              '项目希望解决珠宝消费中的信息不对称问题，围绕 4C 评估、保养方式和购买建议，输出结构化、可执行的内容，并通过联盟营销实现内容变现。',
            ],
          },
          {
            heading: '技术栈与架构',
            listItems: [
              '基于 Next.js 并使用静态导出，实现高性能、SEO 友好的内容页面。',
              '采用 Sanity.io 作为 Headless CMS，统一管理文章、指南和产品推荐等结构化内容，支持非技术同事独立发布。',
              '使用 Cloudflare Pages 作为前端托管与 CDN，实现全球加速与零停机部署。',
              '通过 Cloudflare DNS 与 SSL/CDN 配置，保证全站 HTTPS 以及全球范围内稳定、低延迟的访问体验。',
            ],
          },
          {
            heading: '内容即代码工作流',
            paragraphs: [
              '整个项目按照「内容即代码」的理念搭建，让内容更新与代码部署共用同一套自动化流水线。',
            ],
            listItems: [
              '在 Sanity 后台点击「发布」会通过 Webhook 自动触发 Cloudflare Pages 的构建与部署。',
              '结合 GitOps 思路管理配置，使内容更新、构建与环境配置都可追溯、可复制。',
              '在不依赖后端团队的前提下，让小团队也能稳定运营高质量内容站点。',
            ],
          },
          {
            heading: '核心成果与个人贡献',
            listItems: [
              '从 0 设计并实现了 Headless CMS + 静态站点 + CDN 的整体架构与自动化部署流程。',
              '搭建了覆盖 12 个月诞生石指南和多篇核心教育文章的内容库，为后续 SEO 积累打下基础。',
              '构建 AI 辅助的内容生产管线，涵盖选题与关键词、文章初稿撰写以及站点 Logo / 文章配图等资产生成。',
            ],
          },
        ],
        cta: {
          prefix: '如果你想查看线上宝石与诞生石指南，请 ',
          text: '访问 GemGuidePro.com',
          href: 'https://gemguidepro.com/',
        },
      }}
    />
  );
}
