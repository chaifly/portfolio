import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found | Chen',
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <section style={{ padding: '3rem 0' }}>
      <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>404 - Page not found</h1>
      <p style={{ color: '#4B5563', marginBottom: '1.5rem' }}>
        The page you are looking for does not exist or has been moved.
      </p>
      <p>
        <a href="/" style={{ color: '#2563EB' }}>
          Back to home
        </a>
        {' · '}
        <a href="/projects" style={{ color: '#2563EB' }}>
          Browse projects
        </a>
      </p>
    </section>
  );
}
