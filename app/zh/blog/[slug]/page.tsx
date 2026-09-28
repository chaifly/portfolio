import { notFound } from 'next/navigation';
import Linkify from '../../../../components/Linkify';
import { BLOG_POSTS, getBlogPost } from '../../../../lib/content';

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
      <div className="blog-main">
        <div className="blog-meta">
          <time dateTime={post.date}>{formatDate(post.date, 'zh')}</time>
          <span className="blog-meta-dot" />
          <span>{post.readingMinutes} 分钟阅读</span>
        </div>
        <h1>{post.titleZh}</h1>
        <p style={{ fontSize: '1.1rem', color: 'var(--ink-3)' }}>
          <Linkify text={post.summaryZh} />
        </p>
        <div className="project-card-meta" style={{ margin: '0 0 1.5rem' }}>
          {post.tagsZh.map((t, i) => (
            <span key={t}>
              {i > 0 && <span className="project-card-meta-dot" />}#{t}
            </span>
          ))}
        </div>
        {post.bodyZh.map((p, i) => (
          <p key={i}>
            <Linkify text={p} />
          </p>
        ))}
      </div>
    </article>
  );
}
