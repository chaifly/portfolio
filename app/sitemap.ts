import type { MetadataRoute } from 'next';
import { PROJECTS } from '../lib/projects';
import { BLOG_POSTS } from '../lib/content';

const BASE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.aicoder.ink').replace(/\/+$/, '');

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    '/',
    '/about',
    '/skills',
    '/projects',
    '/blog',
    '/contact',
    '/zh',
    '/zh/about',
    '/zh/skills',
    '/zh/projects',
    '/zh/blog',
    '/zh/contact',
  ];

  const projectRoutes = PROJECTS.flatMap((p) => [
    `/projects/${p.slug}`,
    `/zh/projects/${p.slug}`,
  ]);

  const blogRoutes = BLOG_POSTS.flatMap((p) => [
    `/blog/${p.slug}`,
    `/zh/blog/${p.slug}`,
  ]);

  const routes = [...staticRoutes, ...projectRoutes, ...blogRoutes];
  const now = new Date();

  return routes.map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '/' ? 1 : 0.7,
  }));
}

