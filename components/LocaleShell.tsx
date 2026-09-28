'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

/**
 * Bilingual page shell. Accepts two pre-rendered React subtrees (`en` and
 * `zh`) and shows the one matching the current URL locale. The two subtrees
 * are rendered server-side; this client component only chooses which one
 * mounts. Children cannot be a render function — that's not serializable
 * across the RSC boundary.
 *
 * Note: the language toggle itself was moved out into HeaderLangSwitch so
 * pages don't waste a full row on it. LocaleShell now just picks the tree.
 */
type LocaleShellProps = {
  en: ReactNode;
  zh: ReactNode;
};

export default function LocaleShell({ en, zh }: LocaleShellProps) {
  const pathname = usePathname();
  const locale: 'en' | 'zh' = pathname?.startsWith('/zh') ? 'zh' : 'en';
  return <>{locale === 'en' ? en : zh}</>;
}
