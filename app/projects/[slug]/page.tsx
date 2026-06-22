import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  // Every project has its own dedicated route (e.g. /projects/calculate-central).
  // Any slug that resolves here is unknown, so surface a real 404 instead of
  // rendering the legacy placeholder copy.
  void params;
  notFound();
}
