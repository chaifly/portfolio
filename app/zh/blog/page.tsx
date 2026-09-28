import type { Metadata } from 'next';
import { BLOG_POSTS } from '../../../lib/content';

export const metadata: Metadata = {
  title: '博客',
  description:
    'Chen 的长文记录——关于上线流程、研究与一周一个小项目的复盘。',
  alternates: { canonical: 'https://www.aicoder.ink/zh/blog' },
};

function formatDate(iso: string) {
  const d = new Date(iso);
  return d.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogIndexZhPage() {
  const sorted = [...BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1));

  return (
    <section className="container blog-page">
      <div className="lang-toggle" aria-label="Language switcher">
        <a href="/blog">EN</a>
        <a href="/zh/blog" className="active" aria-current="page">
          中文
        </a>
      </div>

      <header className="blog-header">
        <span className="eyebrow">博客</span>
        <h1>上线日志里的复盘</h1>
        <p>
          把我正在跑的项目——流程、研究、数据与一周一个小项目的经验——写成稍长一点的文章。
        </p>
      </header>

      <div className="blog-layout">
        <div className="blog-main">
          {sorted.map((post) => (
            <article key={post.slug} className="blog-card blog-card-clickable">
              <div className="blog-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span className="blog-meta-dot" />
                <span>{post.readingMinutes} 分钟阅读</span>
              </div>
              <h2>
                <a
                  href={`/zh/blog/${post.slug}`}
                  className="blog-card-title-link"
                  aria-label={`阅读《${post.titleZh}》`}
                >
                  {post.titleZh}
                </a>
              </h2>
              <p>{post.summaryZh}</p>
              <div className="project-card-meta" style={{ marginTop: '0.65rem' }}>
                {post.tagsZh.map((t, i) => (
                  <span key={t}>
                    {i > 0 && <span className="project-card-meta-dot" />}#{t}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <aside className="blog-sidebar">
          <h2>导航</h2>
          <ul>
            <li><a href="/zh/projects">项目总览</a></li>
            <li><a href="/zh/skills">技能与经验</a></li>
            <li><a href="/zh/about">关于我</a></li>
            <li><a href="/zh/contact">联系方式</a></li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
