import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Chen - AI开发者',
  description:
    '个人作品集，展示了 Chen 的技术经验和项目，包括 Calculate Central 等代表作品。',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body>
        <header>
          <nav className="main-nav">
            <a href="/">Home</a> | <a href="/about">About</a> |{' '}
            <a href="/skills">Skills</a> |{' '}
            <div className="nav-item-projects">
              <a href="/projects">Projects</a>
              <div className="nav-projects-dropdown">
                <a href="/projects/calculate-central">Calculate Central</a>
                <a href="/projects/PuzzleZone">PuzzleZone</a>
                <a href="/projects/UselessWeb">Useless Web</a>
              </div>
            </div>{' '}
            | <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <small>© {new Date().getFullYear()} My Portfolio</small>
        </footer>
      </body>
    </html>
  );
}
