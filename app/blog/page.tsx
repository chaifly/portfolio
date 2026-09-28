import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Longer-form notes from Chen — process, research, and lessons from shipping niche products.',
  alternates: { canonical: 'https://www.aicoder.ink/blog' },
};

function formatDate(iso: string, locale: 'en' | 'zh') {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogIndexPage() {
  // Bilingual index: render the locale-aware slug route via JS only on click.
  // For SEO + SSG, the page itself shows both languages (en list + zh list).
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="container blog-page">
      <header className="blog-header">
        <span className="eyebrow">Blog</span>
        <h1>Notes from the shipping log</h1>
        <p>
          Longer-form notes on the projects I’m running: process, research,
          data and lessons from shipping one product a week.
        </p>
      </header>

      <div className="blog-layout">
        <div className="blog-main">
          {sorted.map((post) => (
            <article key={post.slug} className="blog-card blog-card-clickable">
              <div className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date, 'en')}</time>
                <span className="blog-meta-dot" />
                <span>{post.readingMinutes} min read</span>
              </div>
              <h2>
                <a
                  href={`/blog/${post.slug}`}
                  className="blog-card-title-link"
                  aria-label={`Read “${post.titleEn}”`}
                >
                  {post.titleEn}
                </a>
              </h2>
              <p>{post.summaryEn}</p>
              <div className="project-card-meta" style={{ marginTop: '0.65rem' }}>
                {post.tagsEn.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <span className="project-card-meta-dot" />}#{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="blog-sidebar">
          <h2>{'Navigation'}</h2>
          <ul>
            <li><a href="/projects">{'Projects overview'}</a></li>
            <li><a href="/skills">{'Skills & experience'}</a></li>
            <li><a href="/about">{'About me'}</a></li>
            <li><a href="/contact">{'Contact'}</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
