import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Projects | Chen\'s portfolio',
  description:
    'Overview of Chen\'s main projects, including Calculate Central, PuzzleZone and Useless Web, each with dedicated detail pages.',
  keywords: [
    'Chen',
    'Projects',
    'Calculate Central',
    'PuzzleZone',
    'Useless Web',
    '作品集',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects',
  },
};

export default function ProjectsLayout({ children }: { children: ReactNode }) {
  return children;
}
