import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page not found · AI Coder · Chen',
  description:
    'The page you are looking for does not exist or has been moved. Head back to the home page or browse projects.',
  robots: { index: false, follow: false },
};

const LINKS = [
  { href: '/', en: 'Back to home', zh: '返回首页' },
  { href: '/projects', en: 'Browse projects', zh: '浏览项目' },
  { href: '/blog', en: 'Read the blog', zh: '阅读博客' },
  { href: '/contact', en: 'Get in touch', zh: '联系我' },
];

export default function NotFound() {
  return (
    <section className="section">
      <div className="container container-tight">
        <div
          className="card"
          style={{
            textAlign: 'center',
            padding: 'clamp(2.5rem, 6vw, 4rem) 1.5rem',
            boxShadow: 'var(--shadow-2)',
          }}
        >
          <p
            className="card-eyebrow"
            style={{ marginBottom: '0.75rem', color: 'var(--live)' }}
          >
            404 · Page not found
          </p>
          <h1 style={{ marginBottom: '0.75rem' }}>
            This page slipped between the cracks.
          </h1>
          <p
            style={{
              color: 'var(--ink-3)',
              maxWidth: '38ch',
              margin: '0 auto 2rem',
            }}
          >
            The URL you tried doesn&apos;t match any route on this site — it may
            have moved with the recent design pass, or the link might be slightly
            off.
          </p>
          <ul
            style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.6rem',
              justifyContent: 'center',
            }}
          >
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="button button-secondary"
                  style={{ paddingInline: '1rem' }}
                >
                  {link.en}
                  <span
                    style={{
                      color: 'var(--ink-4)',
                      marginLeft: '0.4rem',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.78rem',
                    }}
                  >
                    · {link.zh}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
