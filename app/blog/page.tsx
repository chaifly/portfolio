"use client";

import { usePathname, useRouter } from 'next/navigation';

const BLOG_POSTS = [
  {
    slug: 'first-blog',
    titleEn: 'First Month Building Small Projects on My Personal Site',
    titleZh: '个人网站创业尝试首月记',
    summaryEn:
      'A reflection on the first month of trying to ship one small project a week on my personal website, from zero experience to a clearer workflow.',
    summaryZh:
      '记录在个人网站上尝试一周一个小项目的首月经历，从完全生疏到逐渐摸清整个流程，以及目前为止的收获与困惑。',
  },
];

export default function BlogIndexPage() {
  const router = useRouter();
  const pathname = usePathname();
  const isZhRoute = pathname?.startsWith('/zh');
  const locale: 'en' | 'zh' = isZhRoute ? 'zh' : 'en';

  const switchLocale = (nextLocale: 'en' | 'zh') => {
    if (!pathname) return;
    if (nextLocale === 'en') {
      const newPath = pathname.startsWith('/zh') ? pathname.replace(/^\/zh/, '') || '/' : pathname;
      router.push(newPath);
    } else {
      if (pathname.startsWith('/zh')) return;
      const newPath = pathname === '/' ? '/zh' : `/zh${pathname}`;
      router.push(newPath);
    }
  };

  const projectsHref = isZhRoute ? '/zh/projects' : '/projects';
  const blogIndexHref = isZhRoute ? '/zh/blog' : '/blog';

  const content =
    locale === 'en'
      ? {
          pageTitle: 'Blog',
          pageIntro:
            'Longer-form notes about my journey building small products on this personal site, including experiments, lessons learned and future plans.',
        }
      : {
          pageTitle: 'Blog 文章',
          pageIntro:
            '记录在这个个人网站上做小项目过程中的一些思考，包括尝试、踩坑、复盘和后续规划。',
        };

  return (
    <section className="blog-page">
      <div className="lang-toggle" aria-label="Language switcher">
        <button
          type="button"
          className={locale === 'en' ? 'active' : ''}
          onClick={() => switchLocale('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={locale === 'zh' ? 'active' : ''}
          onClick={() => switchLocale('zh')}
        >
          中文
        </button>
      </div>

      <header className="blog-header">
        <h1>{content.pageTitle}</h1>
        <p>{content.pageIntro}</p>
      </header>

      <div className="blog-layout">
        <div className="blog-main">
          {BLOG_POSTS.map((post) => (
            <article key={post.slug} className="blog-card">
              <h2>
                <a href={`${blogIndexHref}/${post.slug}`}>
                  {locale === 'en' ? post.titleEn : post.titleZh}
                </a>
              </h2>
              <p>{locale === 'en' ? post.summaryEn : post.summaryZh}</p>
            </article>
          ))}
        </div>

        <aside className="blog-sidebar">
          <h2>{locale === 'en' ? 'Navigation' : '导航'}</h2>
          <ul>
            <li>
              <a href={projectsHref}>
                {locale === 'en' ? 'Projects overview' : '前往项目介绍页'}
              </a>
            </li>
            <li>
              <a href={blogIndexHref}>
                {locale === 'en' ? 'All blog posts' : '所有 Blog 文章'}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
