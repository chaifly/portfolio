"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();
  const pathname = usePathname();
  const isZhRoute = pathname?.startsWith('/zh');
  const locale: 'en' | 'zh' = isZhRoute ? 'zh' : 'en';

  const switchLocale = (nextLocale: 'en' | 'zh') => {
    if (!pathname) return;
    if (nextLocale === 'en') {
      const newPath = pathname.startsWith('/zh') ? pathname.replace(/^\/zh/, '') || '/' : pathname;
      router.push(newPath);
    } else {
      if (pathname.startsWith('/zh')) return;
      const newPath = pathname === '/' ? '/zh' : `/zh${pathname}`;
      router.push(newPath);
    }
  };

  const content =
    locale === 'en'
      ? {
          heroTitle: "Hi, I'm Chen 👋",
          heroSubtitle:
            'An AI-empowered developer focused on crafting great product experiences.',
          heroIntro:
            'This is my personal portfolio where I share my work in web development, system design, and product experiments.',
          projectsHeading: 'Featured Projects',
          projects: [
            {
              id: 'calc',
              name: 'Calculate Central',
              description:
                'An online calculator toolkit that turns complex formulas and workflows into intuitive web tools.',
              internalHref: '/projects/calculate-central',
              externalHref: 'https://calccentral.net/',
              externalLabel: 'Open live site',
            },
            {
              id: 'gemguide',
              name: 'GemGuidePro.com',
              description:
                'An AI-assisted content platform for gemstone and birthstone buying guides, powered by a headless CMS and automated deployment.',
              internalHref: '/projects/GemGuidePro',
              externalHref: 'https://gemguidepro.com/',
              externalLabel: 'Visit GemGuidePro.com',
            },
            {
              id: 'puzzle',
              name: 'PuzzleZone',
              description:
                'An embedded web game hub with 300+ browser games integrated via iframes.',
              internalHref: '/projects/PuzzleZone',
              externalHref: 'https://puzzlezone.online/',
              externalLabel: 'Play games online',
            },
            {
              id: 'useless',
              name: 'Useless Web',
              description:
                "My first experimental project: a playful 'don&apos;t click' style collection of useless websites with user submissions.",
              internalHref: '/projects/UselessWeb',
              externalHref: 'https://www.uselessweb.net/',
              externalLabel: 'Visit the experiment',
            },
            {
              id: 'epitaph',
              name: 'Digital Epitaphs',
              description:
                'A digital memorial project that collects epitaphs and life stories to build an online space for remembrance and reflection.',
              internalHref: '/projects/epitaph',
              externalHref: 'https://epitaph.world/',
              externalLabel: 'Visit the memorial',
            },
            {
              id: 'emojitik',
              name: 'Tiktok Emojis',
              description:
                "The ultimate TikTok secret emoji code library with mobile-first one-click copy and visual emotional indexing.",
              internalHref: '/projects/emojitik',
              externalHref: 'https://emojitik.com/',
              externalLabel: 'Open Emojitik.com',
            },
            {
              id: 'techpulse',
              name: 'TechPulse',
              description:
                "A keyword-research-backed Apple hardware site: iPhone 18, iPhone Fold and more. Built from a Google Trends pipeline that identified a 256K-vol, low-KD iPhone 18 cluster as a long-term SEO opportunity.",
              internalHref: '/projects/techpulse',
              externalHref: 'https://techpulse.press/',
              externalLabel: 'Visit TechPulse.press',
            },
          ],
        }
      : {
          heroTitle: '你好，我是 Chen 👋',
          heroSubtitle: '一名追求极致体验的 AI 开发者',
          heroIntro:
            '这是我的个人作品集，我会在这里持续分享在 Web 开发、系统设计以及产品实践方面的经验和项目。',
          projectsHeading: '精选项目',
          projects: [
            {
              id: 'calc',
              name: 'Calculate Central',
              description:
                '一个将复杂公式和多步骤流程封装为直观在线工具的计算器集合站。',
              internalHref: '/projects/calculate-central',
              externalHref: 'https://calccentral.net/',
              externalLabel: '打开线上站点',
            },
            {
              id: 'gemguide',
              name: 'GemGuidePro.com',
              description:
                '一个专注宝石与诞生石购买指南的 AI 赋能内容平台，基于 Headless CMS 与自动化部署工作流构建。',
              internalHref: '/projects/GemGuidePro',
              externalHref: 'https://gemguidepro.com/',
              externalLabel: '访问 GemGuidePro.com',
            },
            {
              id: 'puzzle',
              name: 'PuzzleZone',
              description:
                '一个通过 iframe 聚合 300+ 款浏览器小游戏的在线小游戏站。',
              internalHref: '/projects/PuzzleZone',
              externalHref: 'https://puzzlezone.online/',
              externalLabel: '在线试玩小游戏',
            },
            {
              id: 'useless',
              name: 'Useless Web',
              description:
                '我的第一个尝试性项目：以「不要点」形式呈现的无用网站集合，并支持用户提交链接。',
              internalHref: '/projects/UselessWeb',
              externalHref: 'https://www.uselessweb.net/',
              externalLabel: '访问这个小实验',
            },
            {
              id: 'epitaph',
              name: 'Digital Epitaphs',
              description:
                '一个收集世界各地墓志铭及其背后故事的数字纪念项目，用数字空间承载缅怀与思考。',
              internalHref: '/projects/epitaph',
              externalHref: 'https://epitaph.world/',
              externalLabel: '访问线上站点',
            },
            {
              id: 'emojitik',
              name: 'Tiktok Emojis',
              description:
                '一个专注 TikTok 隐藏表情代码（如 [cry]）的垂直工具站，提供移动优先的一键复制与可视化情绪索引体验。',
              internalHref: '/projects/emojitik',
              externalHref: 'https://emojitik.com/',
              externalLabel: '访问 Emojitik.com',
            },
            {
              id: 'techpulse',
              name: 'TechPulse',
              description:
                '由关键词研究驱动上线的 Apple 硬件编辑站：覆盖 iPhone 18、iPhone Fold 等。立项依据来自一个 Google Trends 流水线，识别出月搜索量 256K、平均 KD 仅 19 的 iPhone 18 词簇是长期 SEO 机会。',
              internalHref: '/projects/techpulse',
              externalHref: 'https://techpulse.press/',
              externalLabel: '访问 TechPulse.press',
            },
          ],
        };

  const primaryCtaLabel = locale === 'en' ? 'View Work' : '查看作品';
  const secondaryCtaLabel = locale === 'en' ? 'Contact Me' : '联系我';

  return (
    <>
      <section className="hero">
        <div className="hero-inner">
          <div className="lang-toggle" aria-label="Language switcher">
            <button
              type="button"
              className={locale === 'en' ? 'active' : ''}
              onClick={() => switchLocale('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={locale === 'zh' ? 'active' : ''}
              onClick={() => switchLocale('zh')}
            >
              中文
            </button>
          </div>

          <div className="hero-text">
            <p className="hero-eyebrow">
              {locale === 'en' ? 'AI · Web · Product' : 'AI · Web · 产品'}
            </p>
            <h1 className="hero-title">{content.heroTitle}</h1>
            <h2 className="hero-subtitle">{content.heroSubtitle}</h2>
            <p className="hero-intro">{content.heroIntro}</p>

            <div className="hero-actions">
              <a href="#projects" className="hero-button">
                {primaryCtaLabel}
              </a>
              <a href="/contact" className="hero-secondary-button">
                {secondaryCtaLabel}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="home-projects" id="projects">
        <h2>{content.projectsHeading}</h2>
        <div className="home-projects-grid">
          {content.projects.map((project) => (
            <article key={project.id} className="project-card">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.internalHref}>More details</a>
                <a
                  href={project.externalHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  {project.externalLabel}
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
