import type { ReactNode } from 'react';
import type { Metadata } from 'next';

interface ProjectSlugLayoutProps {
  children: ReactNode;
}

interface ProjectSlugParams {
  params: { slug: string };
}

export async function generateMetadata(
  { params }: ProjectSlugParams,
): Promise<Metadata> {
  const { slug } = params;

  return {
    title: `Project: ${slug} | Chen\'s portfolio`,
    description: 'Project detail page from Chen\'s personal portfolio.',
    alternates: {
      canonical: `https://your-domain.com/projects/${slug}`,
    },
  };
}

export default function ProjectSlugLayout({ children }: ProjectSlugLayoutProps) {
  return children;
}
