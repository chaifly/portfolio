'use client';

import { usePathname, useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * Bilingual page shell. Accepts two pre-rendered React subtrees (`en` and
 * `zh`) and shows the one matching the current URL locale. The two subtrees
 * are rendered server-side; this client component only chooses which one
 * mounts. Children cannot be a render function — that's not serializable
 * across the RSC boundary.
 */
type LocaleShellProps = {
  en: ReactNode;
  zh: ReactNode;
  toggleLabels?: { en: string; zh: string };
};

export default function LocaleShell({
  en,
  zh,
  toggleLabels,
}: LocaleShellProps) {
  const router = useRouter();
  const pathname = usePathname();
  const isZhRoute = pathname?.startsWith('/zh');
  const locale: 'en' | 'zh' = isZhRoute ? 'zh' : 'en';

  const switchLocale = (nextLocale: 'en' | 'zh') => {
    if (!pathname) return;
    if (nextLocale === 'en') {
      const newPath = pathname.startsWith('/zh')
        ? pathname.replace(/^\/zh/, '') || '/'
        : pathname;
      router.push(newPath);
    } else {
      if (pathname.startsWith('/zh')) return;
      const newPath = pathname === '/' ? '/zh' : `/zh${pathname}`;
      router.push(newPath);
    }
  };

  const enLabel = toggleLabels?.en ?? 'EN';
  const zhLabel = toggleLabels?.zh ?? '中文';

  return (
    <>
      <div className="lang-toggle" aria-label="Language switcher">
        <button
          type="button"
          className={locale === 'en' ? 'active' : ''}
          onClick={() => switchLocale('en')}
        >
          {enLabel}
        </button>
        <button
          type="button"
          className={locale === 'zh' ? 'active' : ''}
          onClick={() => switchLocale('zh')}
        >
          {zhLabel}
        </button>
      </div>
      {locale === 'en' ? en : zh}
    </>
  );
}

