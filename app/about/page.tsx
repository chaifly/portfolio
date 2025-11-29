"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function AboutPage() {
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

  const personJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Chen',
    jobTitle: locale === 'en' ? 'Full-Stack Developer / Data Professional' : 'AI开发者 / 数据从业者',
    url: 'https://your-portfolio-domain.com',
    sameAs: [
      'https://github.com/your-github',
      'https://www.linkedin.com/in/your-linkedin',
    ],
    alumniOf: {
      '@type': 'CollegeOrUniversity',
      name: 'Your University Name',
    },
  };

  const content =
    locale === 'en'
      ? {
          title: 'About Me',
          body:
            "I'm Chen, an AI-focused developer and data professional with experience across finance, telecom, local services and content safety. I started from data analysis and data modeling, working with Python, SQL and metric systems to support product and business decisions, and gradually moved into building web products such as Calculate Central, PuzzleZone and Useless Web. On this site I share both my technical work and how I think about product design, aiming to demonstrate solid E-E-A-T: real-world experience, technical expertise, a track record of shipping projects, and a transparent way of presenting my work.",
        }
      : {
          title: '关于我',
          body:
            '你好，我是 Chen，一名偏向 AI 与数据方向的开发者与数据从业者，先后参与过金融、电信运营商、本地生活和内容安全等多个业务领域。职业起点是数据分析和数据建模，日常工作围绕 Python、SQL、指标体系与宽表建模，为产品和业务提供数据决策支持，并在此基础上逐步尝试把能力沉淀为在线产品，例如 Calculate Central 计算器工具集、PuzzleZone 小游戏站以及 Useless Web 实验项目。在这个站点里，我会尽量用清晰、可验证的方式呈现自己的项目和思考，以体现 E-E-A-T：真实经验、专业能力、可追溯的项目成果，以及对内容负责的态度。',
        };

  return (
    <>
      <section>
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

        <h1>{content.title}</h1>
        <p>{content.body}</p>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
    </>
  );
}
