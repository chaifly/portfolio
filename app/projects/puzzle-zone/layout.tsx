import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PuzzleZone | Browser Games Hub by Chen',
  description:
    'Alternative route for the PuzzleZone browser games hub. Canonical URL points to the main /projects/PuzzleZone page.',
  keywords: [
    'PuzzleZone',
    'Browser games',
    'HTML5 games',
    'Chen',
  ],
  alternates: {
    canonical: 'https://your-domain.com/projects/PuzzleZone',
  },
};

export default function PuzzleZoneAltLayout({ children }: { children: ReactNode }) {
  return children;
}
