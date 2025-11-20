import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Chen | AI developer & data professional',
  description:
    "About Chen, an AI-focused developer and data professional, including background across finance, telecom, local services and content safety.",
  keywords: [
    'Chen',
    '关于我',
    'About',
    'AI开发者',
    'AI developer',
    '数据分析',
    '作品集',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/about',
  },
};

export default function AboutLayout({ children }: { children: ReactNode }) {
  return children;
}
