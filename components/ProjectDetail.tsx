"use client";

import { useState } from 'react';

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

export type ProjectDetailProps = {
  en: ProjectDetailContent;
  zh: ProjectDetailContent;
};

export default function ProjectDetail({ en, zh }: ProjectDetailProps) {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');
  const content = locale === 'en' ? en : zh;

  return (
    <section>
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

      <h1>{content.title}</h1>

      {content.sections.map((section) => (
        <section key={section.heading}>
          <h2>{section.heading}</h2>
          {section.paragraphs?.map((p) => (
            <p key={p}>{p}</p>
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
    </section>
  );
}
