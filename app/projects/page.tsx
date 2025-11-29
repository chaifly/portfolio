"use client";

import { useState } from 'react';

const projectsEn = [
  {
    slug: 'calculate-central',
    title: 'Calculate Central',
    summary:
      'An online calculator toolkit that turns complex, multi-step formulas into intuitive web tools.',
  },
  {
    slug: 'PuzzleZone',
    title: 'PuzzleZone',
    summary:
      'An unblocked browser game hub with 300+ embedded HTML5 games across multiple genres.',
  },
  {
    slug: 'UselessWeb',
    title: 'Useless Web',
    summary:
      "A 'don't click' style collection of useless websites that also accepts user-submitted links.",
  },
  {
    slug: 'GemGuidePro',
    title: 'GemGuidePro.com',
    summary:
      'An AI-driven headless content platform for transparent gemstone and birthstone buying guides, with an automated content-as-code workflow.',
  },
  {
    slug: 'epitaph',
    title: 'Digital Epitaphs',
    summary:
      'A digital memorial project that curates epitaphs and the stories behind them, exploring the meaning and value of life.',
  },
];

const projectsZh = [
  {
    slug: 'calculate-central',
    title: 'Calculate Central',
    summary:
      '一个将复杂、多步骤公式封装为直观在线工具的计算器集合站点。',
  },
  {
    slug: 'PuzzleZone',
    title: 'PuzzleZone',
    summary:
      '一个聚合 300+ 款 HTML5 小游戏的在线游戏站，支持在校园或公司等环境下访问。',
  },
  {
    slug: 'UselessWeb',
    title: 'Useless Web',
    summary:
      '一个以「不要点」形式呈现的无用网站集合，同时支持用户提交新的无用网址。',
  },
  {
    slug: 'GemGuidePro',
    title: 'GemGuidePro.com',
    summary:
      '一个专注宝石与诞生石购买指南的 AI 赋能内容平台，基于 Next.js、Sanity 与 Cloudflare Pages 搭建，并通过自动化工作流实现「内容即代码」。',
  },
  {
    slug: 'epitaph',
    title: 'Digital Epitaphs',
    summary:
      '一个收集世界各地墓志铭及其背后故事的数字纪念项目，尝试一起思考生命的意义与价值。',
  },
];

export default function ProjectsPage() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');
  const content =
    locale === 'en'
      ? { heading: 'Projects', intro: 'A quick overview of my main projects, each with a short description and a dedicated detail page.', list: projectsEn }
      : { heading: '项目列表', intro: '这里列出当前已完成或正在维护的主要项目，每个项目都有独立的详情页。', list: projectsZh };

  return (
    <section className="projects-page">
      <div className="lang-toggle" aria-label="Language switcher">
        <button
          type="button"
          className={locale === 'en' ? 'active' : ''}
          onClick={() => setLocale('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={locale === 'zh' ? 'active' : ''}
          onClick={() => setLocale('zh')}
        >
          中文
        </button>
      </div>

      <header className="projects-header">
        <h1>{content.heading}</h1>
        <p>{content.intro}</p>
      </header>

      <div className="projects-grid" aria-label={content.heading}>
        {content.list.map((project) => (
          <article key={project.slug} className="project-card">
            <h2>
              <a href={`/projects/${project.slug}`}>{project.title}</a>
            </h2>
            <p>{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
