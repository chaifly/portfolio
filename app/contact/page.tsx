"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');

  const content =
    locale === 'en'
      ? {
          title: 'Contact',
          body:
            'You can reach me on X (Twitter) at @Chaifly. This is currently my primary public channel for sharing updates and project notes.',
          xLabel: 'Visit my X profile',
          xUrl: 'https://x.com/Chaifly',
        }
      : {
          title: '联系我',
          body:
            '目前我主要通过 X 账号 @Chaifly 对外分享更新和项目进展，如果你有合作或交流需求，可以在 X 上私信或 @ 我。',
          xLabel: '前往我的 X 个人主页',
          xUrl: 'https://x.com/Chaifly',
        };

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
      <p>{content.body}</p>
      <p>
        <a href={content.xUrl} target="_blank" rel="noreferrer">
          {content.xLabel}
        </a>
      </p>
    </section>
  );
}
