"use client";

import { useState } from 'react';

export default function HomePage() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');

  const content =
    locale === 'en'
      ? {
          heroTitle: 'I am Chen, a AI-empowered developer',
          heroBody:
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
                "My first experimental project: a playful 'don't click' style collection of useless websites with user submissions.",
              internalHref: '/projects/UselessWeb',
              externalHref: 'https://www.uselessweb.net/',
              externalLabel: 'Visit the experiment',
            },
          ],
        }
      : {
          heroTitle: '我是 Chen，一位AI开发者',
          heroBody:
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
          ],
        };

  return (
    <>
      <section className="hero">
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

        <div className="hero-content">
          <h1>{content.heroTitle}</h1>
          <p>{content.heroBody}</p>
        </div>
      </section>

      <section className="home-projects">
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
