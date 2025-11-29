import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Chen\'s portfolio',
  description:
    "Overview of Chen's main projects, including Calculate Central, GemGuidePro.com, PuzzleZone, Useless Web, and Digital Epitaphs, each with dedicated detail pages.",
  keywords: [
    'Chen',
    'Projects',
    'Calculate Central',
    'GemGuidePro',
    'GemGuidePro.com',
    'PuzzleZone',
    'Useless Web',
    'Digital Epitaphs',
    '作品集',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects',
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
