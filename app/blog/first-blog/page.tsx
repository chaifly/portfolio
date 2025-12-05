"use client";

import { usePathname, useRouter } from 'next/navigation';

export default function FirstBlogPage() {
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

      <div className="blog-layout">
        <article className="blog-main">
          {locale === 'en' ? (
            <>
              <h1>First Month Building Small Projects on My Personal Site</h1>
              <p>
                It has actually been almost two months already. If I exclude the initial
                learning period, that leaves a bit more than one month of real
                execution, roughly keeping a pace of one small project per week. I
                started from being completely unfamiliar with the whole process, and now
                I more or less understand the end-to-end flow. Traffic-wise, though,
                there is not much to show yet — maybe it simply needs time.
              </p>
              <p>
                The first project was purely an experiment, inspired by the classic{' '}
                <a
                  href="https://www.uselessweb.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  [don't click]
                </a>
                . It was just a single-page site in a similar style. Unsurprisingly, the
                results were pretty average, but I also did not set high expectations for
                it.
              </p>
              <p>
                The second project was a small browser game hub. I followed advice that
                “games are easier to get traffic” and targeted keywords around
                unblocked games. At first I collected games manually from GitHub, and
                only later did I manage to get an embeddable games list directly from
                publishers. There were a few twists along the way, and when the site
                finally went live I had some hopes for it — but performance has still
                been underwhelming. Realistically, if the game list is that easy to
                obtain, anyone can build a similar site.
              </p>
              <p>
                On the operations side, I have invested very little time so far. I
                almost did not build backlinks or do any serious promotion, which is
                clearly something I need to fix going forward.
              </p>
              <p>
                The remaining projects are more or less in the same category; I will
                probably introduce them in future posts when I have more data points.
              </p>
              <p>
                For the next project, I want to try building a small SaaS product. The
                exact direction is still under consideration, but I am looking forward
                to exploring it — wish me luck.
              </p>
            </>
          ) : (
            <>
              <h1>个人网站创业尝试首月记</h1>
              <p>
                其实已经过了快 2 个月，除去刚开始的学习时间，算下来差不多有 1 个多月的正式尝试，基本保持了一周一个小项目的节奏。从最初对整个流程完全生疏，到现在对端到端的链路大致摸清了，但目前还没有获得太多流量上的收获……可能需要一个过程吧。
              </p>
              <p>
                第一个项目纯粹是尝试，模仿了 Useless Web 做的经典{' '}
                <a
                  href="https://www.uselessweb.net/"
                  target="_blank"
                  rel="noreferrer"
                >
                  [don't click]
                </a>
                ，就一个单独页面，结果自然是一般般，好在一开始也没有抱太高期望。
              </p>
              <p>
                第二个项目是小游戏站，当时听从建议说游戏更容易获得流量，于是围绕
                unblocked game 做关键词。一开始是通过 GitHub 自己去搜集可嵌入的游戏，后来才从发行商那里批量拿到了可嵌入的游戏列表。整个过程中也有一些小波折，最终上线时还是抱有不少期待，但结果并不理想。想想也合理，这么容易拿到的游戏列表，大家都可以做出类似的网站。
              </p>
              <p>
                在运营投入上，目前自己花的时间太少，几乎没有认真做外链和推广，这一点是后续需要补上的。
              </p>
              <p>
                剩下几个项目的情况也差不多，有机会再慢慢介绍吧，也许等数据和结论更清晰的时候会更有意思。
              </p>
              <p>
                下一个项目，打算尝试做一个小型 SaaS 产品，具体方向还在考虑中，敬请期待，也祝自己好运。
              </p>
            </>
          )}
        </article>

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
                {locale === 'en' ? 'All blog posts' : '其它 Blog 文章'}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
