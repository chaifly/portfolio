import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TechPulse | Editorial Apple Hardware Intelligence by Chen',
  description:
    "TechPulse (techpulse.press) is editorial-grade reporting on Apple's hardware roadmap - release dates, specs and rumors for the iPhone 18 lineup, iPhone Fold and more, verified against primary sources.",
  keywords: [
    'TechPulse',
    'techpulse.press',
    'Apple hardware intelligence',
    'iPhone 18',
    'iPhone Fold',
    'Apple rumors',
    'Editorial reporting',
    'Chen',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects/techpulse',
  },
};

export default function TechPulseLayout({ children }: { children: ReactNode }) {
  return children;
}
