"use client";

import { useState } from 'react';

export default function ContactPage() {
  const [locale, setLocale] = useState<'en' | 'zh'>('en');

  const content =
    locale === 'en'
      ? {
          title: 'Contact',
          body:
            'Share your preferred contact channels, such as email, LinkedIn, GitHub issues or a simple contact form.',
        }
      : {
          title: '联系我',
          body:
            '在这里提供你的主要联系方式，例如邮箱、LinkedIn、GitHub 或一个简单的联系表单。',
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
    </section>
  );
}
