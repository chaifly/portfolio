import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Useless Web | Don&apos;t Click Experiment by Chen',
  description:
    "Useless Web is Chen&apos;s first experimental project, a playful 'don&apos;t click' style collection of useless websites with user submissions.",
  keywords: [
    'Useless Web',
    'Don&apos;t click',
    'Experimental project',
    'Useless websites',
    'Chen',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects/UselessWeb',
  },
};

export default function UselessWebLayout({ children }: { children: ReactNode }) {
  return children;
}
