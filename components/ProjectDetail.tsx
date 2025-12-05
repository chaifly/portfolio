"use client";

import type { ReactNode } from 'react';
import { usePathname, useRouter } from 'next/navigation';

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
];

function renderRichParagraph(text: string): ReactNode {
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

    return (
      <span key={`text-${index}`}>
        {part}
      </span>
    );
  });
}

export type ProjectDetailProps = {
  en: ProjectDetailContent;
  zh: ProjectDetailContent;
  currentSlug?: string;
};

export default function ProjectDetail({ en, zh, currentSlug }: ProjectDetailProps) {
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
  const otherProjects = OTHER_PROJECTS.filter(
    (project) => !currentSlug || project.slug !== currentSlug,
  );

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

      <h1>{content.title}</h1>

      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>{renderRichParagraph(p)}</p>
          ))}
          {section.listItems && section.listItems.length > 0 && (
            <ul>
              {section.listItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}

      <section>
        <p>
          {content.cta.prefix}
          <a href={content.cta.href} target="_blank" rel="noreferrer">
            {content.cta.text}
          </a>
          .
        </p>
      </section>

      {otherProjects.length > 0 && (
        <section>
          <h2>{locale === 'en' ? 'Other projects' : '其它项目'}</h2>
          <ul>
            {otherProjects.map((project) => (
              <li key={project.slug}>
                <a href={project.href}>
                  {locale === 'en' ? project.labelEn : project.labelZh}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}
