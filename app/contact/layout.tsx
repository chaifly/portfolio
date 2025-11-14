import type { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Chen - X @Chaifly',
  description:
    'Contact Chen via X (Twitter) at @Chaifly for collaboration, questions, and project updates.',
  keywords: [
    'Chen',
    'Contact',
    '联系我',
    'X',
    'Twitter',
    'Chaifly',
  ],
  alternates: {
    canonical: 'https://your-domain.com/contact',
  },
};

export default function ContactLayout({ children }: { children: ReactNode }) {
  return children;
}
