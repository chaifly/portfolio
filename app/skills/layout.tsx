import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skills & Experience | Chen',
  description:
    'Core technical skills and domain experience of Chen as a data analyst and AI-focused developer, including Python, SQL, metrics, and industry experience.',
  keywords: [
    'Chen',
    '技能',
    'Skills',
    '数据分析',
    'AI开发者',
    'Data analyst',
    'Experience',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/skills',
  },
};

export default function SkillsLayout({ children }: { children: ReactNode }) {
  return children;
}
