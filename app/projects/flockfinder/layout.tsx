import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'flockfinder.online | Public-Records ALPR Transparency by Chen',
  description:
    'flockfinder.online is an independent civic transparency project that maps Automated License Plate Reader (ALPR) camera networks across U.S. cities using only public records and open government data. Operated by The Transparency Project, with no affiliation to Flock Group Inc. or any ALPR vendor.',
  keywords: [
    'flockfinder',
    'flockfinder.online',
    'ALPR',
    'Flock cameras',
    'license plate reader',
    'public records',
    'transparency',
    'The Transparency Project',
    'Chen',
  ],
  alternates: {
    canonical: 'https://www.aicoder.ink/projects/flockfinder',
  },
};

export default function FlockfinderLayout({ children }: { children: ReactNode }) {
  return children;
}

