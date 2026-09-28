import { notFound } from 'next/navigation';
import { BLOG_POSTS, getBlogPost } from '../../../lib/content';

type Params = { slug: string };

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

function formatDate(iso: string, locale: 'en' | 'zh') {
  const d = new Date(iso);
  return d.toLocaleDateString(locale === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

export default function BlogPostPage({ params }: { params: Params }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  return (
    <article className="container blog-page">
      <div className="lang-toggle" aria-label="Language switcher">
        <a href={`/blog/${post.slug}`} className="active" aria-current="page">
          EN
        </a>
        <a href={`/zh/blog/${post.slug}`}>中文</a>
      </div>

      <div className="blog-main">
        <div className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date, 'en')}</time>
          <span className="blog-meta-dot" />
          <span>{post.readingMinutes} min read</span>
        </div>
        <h1>{post.titleEn}</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-3)' }}>
          {post.summaryEn}
        </p>
        <div className="project-card-meta" style={{ margin: '0 0 1.5rem' }}>
          {post.tagsEn.map((t, i) => (
            <span key={t}>
              {i > 0 && <span className="project-card-meta-dot" />}#{t}
            </span>
          ))}
        </div>
        {post.bodyEn.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </article>
  );
}

