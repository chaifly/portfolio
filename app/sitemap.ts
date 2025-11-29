import type { MetadataRoute } from 'next';

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aicoder.ink').replace(/\/+$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '/',
    '/about',
    '/skills',
    '/projects',
    '/projects/calculate-central',
    '/projects/GemGuidePro',
    '/projects/PuzzleZone',
    '/projects/UselessWeb',
    '/projects/epitaph',
    '/contact',
  ];

  const now = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
