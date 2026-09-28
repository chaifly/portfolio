// ProjectDetail is a small composition shell: it lays out the locale toggle,
// title (with optional live badge), optional stats strip + tech chips above the
// rich content, then the rich content itself, then the closing CTA and an
// "Other projects" rail.

'use client';

import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Linkify from './Linkify';
import { buildProjectLinkifyTokens } from '../lib/projects';

export type ProjectDetailContent = {
  title: string;
  sections: {
    heading: string;
    paragraphs?: string[];
    listItems?: string[];
  }[];
  cta: {
    prefix: string;
    text: string;
    href: string;
  };
  external?: {
    label: string;
    href: string;
  };
};

const OTHER_PROJECTS = [
  {
    slug: 'calculate-central',
    href: '/projects/calculate-central',
    labelEn: 'Calculate Central',
    labelZh: 'Calculate Central 在线计算器工具集',
  },
  {
    slug: 'GemGuidePro',
    href: '/projects/GemGuidePro',
    labelEn: 'GemGuidePro.com',
    labelZh: 'GemGuidePro.com 宝石指南平台',
  },
  {
    slug: 'PuzzleZone',
    href: '/projects/PuzzleZone',
    labelEn: 'PuzzleZone',
    labelZh: 'PuzzleZone 在线小游戏中心',
  },
  {
    slug: 'UselessWeb',
    href: '/projects/UselessWeb',
    labelEn: 'Useless Web',
    labelZh: 'Useless Web 无用网站实验',
  },
  {
    slug: 'epitaph',
    href: '/projects/epitaph',
    labelEn: 'Digital Epitaphs',
    labelZh: '数字纪念碑',
  },
  {
    slug: 'techpulse',
    href: '/projects/techpulse',
    labelEn: 'TechPulse',
    labelZh: 'TechPulse 编辑级 Apple 硬件情报站',
  },
  {
    slug: 'flockfinder',
    href: '/projects/flockfinder',
    labelEn: 'flockfinder.online',
    labelZh: 'flockfinder.online - 由公开记录驱动的 ALPR 透明度站',
  },
];

// Renders a paragraph with two layers of substitution:
//   1. Special-case patterns ([cry] emoji code, Emojitik.com mention) —
//      short, hand-rolled splitters for the things that don't fit the
//      generic project-name auto-link rules.
//   2. Generic auto-linking of any project name or bare domain via
//      <Linkify />, so "TechPulse", "techpulse.press", "GemGuidePro", etc.
//      all become clickable links in the prose without per-paragraph edits.
function renderRichParagraph(text: string): ReactNode {
  const tokens = buildProjectLinkifyTokens();
  const parts = text.split(/(Emojitik\.com|\[cry\])/);

  return parts.map((part, index) => {
    if (part === 'Emojitik.com') {
      return (
        <a
          key={`emojitik-${index}`}
          href="https://emojitik.com/"
          target="_blank"
          rel="noreferrer"
        >
          Emojitik.com
        </a>
      );
    }

    if (part === '[cry]') {
      return (
        <a
          key={`cry-${index}`}
          href="https://emojitik.com/tiktok-emoji/cry"
          target="_blank"
          rel="noreferrer"
        >
          [cry]
        </a>
      );
    }

    if (!part) return null;

    return <Linkify key={`text-${index}`} text={part} tokens={tokens} />;
  });
}

export type ProjectDetailProps = {
  en: ProjectDetailContent;
  zh: ProjectDetailContent;
  currentSlug?: string;
  externalUrl?: string;
  externalLabel?: string;
  meta?: { label: string; value: string }[];
  stack?: string[];
};

export default function ProjectDetail({
  en,
  zh,
  currentSlug,
  externalUrl,
  externalLabel,
  meta,
  stack,
}: ProjectDetailProps) {
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
  const content = locale === 'en' ? en : zh;
  const liveUrl = content.external?.href ?? externalUrl;
  const liveLabel = content.external?.label ?? externalLabel;
  const otherProjects = OTHER_PROJECTS.filter(
    (project) => !currentSlug || project.slug !== currentSlug,
  );
  const tokens = buildProjectLinkifyTokens();

  return (
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

      <h1>
        {content.title}
        {liveUrl && (
          <a
            className="project-live-badge"
            href={liveUrl}
            target="_blank"
            rel="noreferrer"
          >
            {liveLabel ?? (locale === 'en' ? 'Visit live site ↗' : '访问线上站点 ↗')}
          </a>
        )}
      </h1>

      {meta && meta.length > 0 && (
        <div className="project-meta-stats" aria-label={locale === 'en' ? 'Project stats' : '项目数据'}>
          {meta.map((row) => (
            <div key={row.label} className="project-meta-stats-row">
              <span className="project-meta-stats-value">{row.value}</span>
              <span className="project-meta-stats-label">{row.label}</span>
            </div>
          ))}
        </div>
      )}

      {stack && stack.length > 0 && (
        <div className="project-stack" aria-label={locale === 'en' ? 'Tech stack' : '技术栈'}>
          {stack.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>
      )}

      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>{renderRichParagraph(p)}</p>
          ))}
          {section.listItems && section.listItems.length > 0 && (
            <ul>
              {section.listItems.map((item) => (
                <li key={item}>
                  <Linkify text={item} tokens={tokens} />
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section>
        <p>
          <Linkify text={content.cta.prefix} tokens={tokens} />
          <a href={content.cta.href} target="_blank" rel="noreferrer">
            {content.cta.text}
          </a>
          .
        </p>
      </section>

      {liveUrl && (
        <section className="project-cta">
          <a className="button button-primary" href={liveUrl} target="_blank" rel="noreferrer">
            {liveLabel ?? (locale === 'en' ? 'Visit live site ↗' : '访问线上站点 ↗')}
          </a>
        </section>
      )}

      <section>
        <h2>{locale === 'en' ? 'Other projects' : '其他项目'}</h2>
        <ul className="project-other-rail">
          {otherProjects.map((project) => (
            <li key={project.slug}>
              <a href={project.href}>
                {locale === 'en' ? project.labelEn : project.labelZh}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
