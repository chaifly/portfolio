import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Calculate Central | Online Calculator Toolkit by Chen',
  description:
    'Calculate Central is an online calculator toolkit that turns complex, multi-step formulas into intuitive web tools, built by Chen.',
  keywords: [
    'Calculate Central',
    'Online calculator toolkit',
    'Chen',
    'Financial calculators',
    'Web tools',
  ],
  alternates: {
    canonical: 'https://your-domain.com/projects/calculate-central',
  },
};

export default function CalculateCentralLayout({ children }: { children: ReactNode }) {
  return children;
}
