import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Logo from '../components/Logo';
import HeaderLangSwitch from '../components/HeaderLangSwitch';
import { PROJECTS } from '../lib/projects';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.aicoder.ink'),
  title: {
    default: 'AI Coder · Chen — AI-empowered developer',
    template: '%s · AI Coder · Chen',
  },
  description:
    'Personal site of Chen — an AI-empowered developer and data practitioner shipping one small product a week. Featured projects: Calculate Central, GemGuidePro, PuzzleZone, Useless Web, Digital Epitaphs, Emojitik, TechPulse and flockfinder.online.',
  keywords: [
    'Chen',
    'AI developer',
    'AI 开发者',
    'portfolio',
    'aicoder.ink',
    'Next.js',
    'keyword research',
    'civic transparency',
    'TechPulse',
    'techpulse.press',
    'flockfinder.online',
    'ALPR',
  ],
  openGraph: {
    title: 'AI Coder · Chen — AI-empowered developer',
    description:
      'Personal site of Chen — shipping one small product a week, with a keyword-research pipeline that decides what to build next.',
    url: 'https://www.aicoder.ink/',
    siteName: 'AI Coder · Chen',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'AI Coder · Chen — shipping one small product a week.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Coder · Chen — AI-empowered developer',
    description:
      'Personal site of Chen — shipping one small product a week, with a keyword-research pipeline that decides what to build next.',
    images: ['/og-image.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://www.aicoder.ink/' },
};

export const viewport: Viewport = {
  themeColor: '#0F172A',
};

function NavLinks() {
  return (
    <div className="nav-links">
      <a href="/">Home</a>
      <div className="nav-item-projects">
        <a href="/projects">Projects</a>
        <div className="nav-projects-dropdown" role="menu">
          {PROJECTS.map((p) => (
            <a key={p.slug} href={`/projects/${p.slug}`} role="menuitem">
              {p.name}
            </a>
          ))}
        </div>
      </div>
      <a href="/skills">Skills</a>
      <a href="/blog">Blog</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
    </div>
  );
}

function NavMobileToggle() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html:
          "(function(){var t=document.querySelector('.nav-toggle');var l=document.querySelector('.nav-links');if(t&&l){t.addEventListener('click',function(){l.classList.toggle('is-open');});}})();",
      }}
    />
  );
}

function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <div className="footer-meta">
          <strong>AI Coder · Chen</strong>
          Shipping one small product a week, with a keyword-research
          pipeline that decides what to build next. Independent. Async-friendly.
        </div>
        <div>
          <h3>Sitemap</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/projects">Projects</a></li>
            <li><a href="/skills">Skills</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
        <div>
          <h3>Currently building</h3>
          <ul>
            <li><a href="/projects/techpulse">TechPulse</a></li>
            <li><a href="/projects/flockfinder">flockfinder.online</a></li>
            <li><a href="/projects/GemGuidePro">GemGuidePro</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer-bottom">
        <span>
          © {year} AI Coder · Chen. All projects are independently operated.
        </span>
        <span>
          <a href="https://x.com/Chaifly" rel="noreferrer">
            X / @Chaifly
          </a>
          {' · '}
          <a href="https://github.com/chaifly" rel="noreferrer">
            GitHub
          </a>
          {' · '}
          <a href="/sitemap.xml">Sitemap</a>
        </span>
      </div>
    </footer>
  );
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header className="site-header">
          <nav className="main-nav">
            <Logo />
            <NavLinks />
            <HeaderLangSwitch />
            <button
              type="button"
              className="nav-toggle"
              aria-label="Open menu"
            >
              Menu
            </button>
          </nav>
          <NavMobileToggle />
        </header>
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
