import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PuzzleZone | Unblocked Browser Games Hub by Chen',
  description:
    'PuzzleZone is an unblocked browser games hub with 300+ embedded HTML5 games across multiple genres, created as a learning project by Chen.',
  keywords: [
    'PuzzleZone',
    'Browser games',
    'HTML5 games',
    'Unblocked games',
    'Chen',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects/PuzzleZone',
  },
};

export default function PuzzleZoneLayout({ children }: { children: ReactNode }) {
  return children;
}
