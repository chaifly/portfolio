import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'GemGuidePro.com | Gemstone Guide Platform by Chen',
  description:
    'GemGuidePro.com is an AI-assisted, headless content platform delivering trustworthy gemstone and birthstone buying guides with an automated content-as-code workflow.',
  keywords: [
    'GemGuidePro',
    'GemGuidePro.com',
    'Gemstone guides',
    'Birthstone guides',
    'Headless CMS',
    'Next.js',
    'Cloudflare Pages',
    'Chen',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects/GemGuidePro',
  },
};

export default function GemGuideProLayout({ children }: { children: ReactNode }) {
  return children;
}
