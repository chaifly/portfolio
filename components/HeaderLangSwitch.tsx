'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';

/**
 * Compact EN / 中文 pill that lives in the top-right of the site header.
 * Resolves the current locale from the URL (so it works in both server and
 * client renders — server gives a sensible initial render, client updates
 * after hydration) and produces matching locale-prefixed links on click.
 *
 * Lives outside LocaleShell so pages don't have to render their own switch.
 */
export default function HeaderLangSwitch({
  labels,
}: {
  labels?: { en: string; zh: string };
}) {
  const pathname = usePathname() ?? '/';
  const isZh = pathname.startsWith('/zh');
  const enLabel = labels?.en ?? 'EN';
  const zhLabel = labels?.zh ?? '中文';

  const enHref = isZh ? pathname.replace(/^\/zh/, '') || '/' : pathname;
  const zhHref = isZh ? pathname : pathname === '/' ? '/zh' : `/zh${pathname}`;

  return (
    <div
      className="lang-switch"
      role="group"
      aria-label={isZh ? '语言切换' : 'Language switcher'}
    >
      <Link
        href={enHref}
        className={isZh ? '' : 'is-active'}
        aria-label="English version"
        prefetch={false}
      >
        {enLabel}
      </Link>
      <Link
        href={zhHref}
        className={isZh ? 'is-active' : ''}
        aria-label="中文版"
        prefetch={false}
      >
        {zhLabel}
      </Link>
    </div>
  );
}
