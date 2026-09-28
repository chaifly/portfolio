import LocaleShell from '../components/LocaleShell';
import PersonJsonLd from '../components/PersonJsonLd';
import Linkify from '../components/Linkify';
import { HOME_CONTENT } from '../lib/content';
import { PROJECTS, CATEGORY_LABEL_EN, CATEGORY_LABEL_ZH, buildProjectLinkifyTokens } from '../lib/projects';

function StatusPill({ status }: { status: 'live' | 'shipped' | 'sunset' }) {
  const cls = status === 'live' ? 'badge badge-live' : 'badge';
  const label = status === 'live' ? 'Live' : status === 'shipped' ? 'Shipped' : 'Sunset';
  return <span className={cls}>{label}</span>;
}

// Splits strings like "Currently building · TechPulse" so the part after
// " · " becomes a clickable link (using the auto token list). If there's no
// separator, the eyebrow is rendered as plain text.
function renderFeaturedEyebrow(eyebrow: string) {
  const sep = ' · ';
  const idx = eyebrow.lastIndexOf(sep);
  if (idx === -1) return eyebrow;
  const head = eyebrow.slice(0, idx);
  const tail = eyebrow.slice(idx + sep.length);
  return (
    <>
      {head}
      {sep}
      <Linkify text={tail} tokens={buildProjectLinkifyTokens()} />
    </>
  );
}

function HomeHero({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="hero-card">
      <a
        className="hero-card-row hero-card-row-link"
        href="https://techpulse.press/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">TechPulse</div>
        </div>
        <span className="badge badge-live">iPhone 18</span>
      </a>
      <a
        className="hero-card-row hero-card-row-link"
        href="https://flockfinder.online/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">flockfinder.online</div>
        </div>
        <span className="badge">ALPR</span>
      </a>
      <a
        className="hero-card-row hero-card-row-link"
        href="https://emojitik.com/"
        target="_blank"
        rel="noreferrer"
      >
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">Emojitik</div>
        </div>
        <span className="badge">{eyebrow}</span>
      </a>
    </div>
  );
}

function HomeProjectsGrid({ locale }: { locale: 'en' | 'zh' }) {
  const catLabel = locale === 'en' ? CATEGORY_LABEL_EN : CATEGORY_LABEL_ZH;
  return (
    <div className="home-projects-grid">
      {PROJECTS.map((p) => (
        <article key={p.slug} className="project-card project-card-clickable">
          <div className="project-card-meta">
            <span>{catLabel[p.category]}</span>
            <span className="project-card-meta-dot" />
            <span>Since {p.since}</span>
          </div>
          <h3>
            <a
              href={`/projects/${p.slug}`}
              className="project-card-title-link"
              aria-label={locale === 'en' ? `Open ${p.name} case study` : `打开 ${p.name} 项目详情`}
            >
              {p.name}
            </a>
          </h3>
          <p>{p.pitch}</p>
          <div className="project-links">
            {p.externalUrl ? (
              <a
                href={p.externalUrl}
                target="_blank"
                rel="noreferrer"
                className="project-link-external"
                aria-label={locale === 'en' ? `Open ${p.name} live site (new tab)` : `打开 ${p.name} 线上站点（新窗口）`}
              >
                {p.externalLabel ?? (locale === 'en' ? 'Open live' : '打开线上')}
              </a>
            ) : null}
            <StatusPill status={p.status} />
          </div>
        </article>
      ))}
    </div>
  );
}

function HomeBody() {
  const c = HOME_CONTENT.en;
  return (
    <>
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-text">
            <span className="hero-eyebrow">{c.heroEyebrow}</span>
            <h1 className="hero-title">
              {c.heroTitleEnPrefix}
              <em>{c.heroTitleHighlight}</em>
              {c.heroTitleSuffix}
            </h1>
            <p className="hero-subtitle">{c.heroSubtitle}</p>
            <p className="hero-intro">
              <Linkify text={c.heroIntro} />
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={c.primaryCta.href}>
                {c.primaryCta.label}
              </a>
              <a className="button button-secondary" href={c.secondaryCta.href}>
                {c.secondaryCta.label}
              </a>
            </div>
          </div>
          <HomeHero eyebrow="Editorial" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {c.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="home-featured">
            <div>
              <div className="home-featured-eyebrow">
                {renderFeaturedEyebrow(c.featuredEyebrow)}
              </div>
              <h2 className="home-featured-title">{c.featuredTitle}</h2>
              <p className="home-featured-body">
                <Linkify text={c.featuredBody} />
              </p>
              <div className="home-featured-actions">
                <a className="button button-accent" href={c.featuredPrimary.href}>
                  {c.featuredPrimary.label}
                </a>
                <a
                  className="button button-on-dark"
                  href={c.featuredSecondary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.featuredSecondary.label}
                </a>
              </div>
            </div>
            <aside className="home-featured-side">
              <div className="home-featured-side-list">
                {c.featuredFacts.map((f) => (
                  <div key={f.label} className="home-featured-side-row">
                    <span className="home-featured-side-label">{f.label}</span>
                    <strong>{f.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.projectsHeading}</span>
          </div>
          <HomeProjectsGrid locale="en" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{c.aboutHeading}</h2>
            <p>
              <Linkify text={c.aboutBody} />
            </p>
          </div>
          <a className="button button-secondary" href={c.aboutCta.href}>
            {c.aboutCta.label} →
          </a>
        </div>
      </section>

      <PersonJsonLd
        name="Chen"
        jobTitle="AI-empowered developer & data practitioner"
        url="https://www.aicoder.ink"
        sameAs={['https://x.com/Chaifly', 'https://github.com/chaifly']}
        knowsAbout={[
          'AI development',
          'Next.js',
          'Keyword research',
          'Civic transparency',
          'Data modelling',
          'Content-led products',
        ]}
      />
    </>
  );
}

function HomeBodyZh() {
  const c = HOME_CONTENT.zh;
  return (
    <>
      <section className="hero">
        <div className="hero-inner container">
          <div className="hero-text">
            <span className="hero-eyebrow">{c.heroEyebrow}</span>
            <h1 className="hero-title">
              {c.heroTitleEnPrefix}
              <em>{c.heroTitleHighlight}</em>
              {c.heroTitleSuffix}
            </h1>
            <p className="hero-subtitle">{c.heroSubtitle}</p>
            <p className="hero-intro">
              <Linkify text={c.heroIntro} />
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={c.primaryCta.href}>
                {c.primaryCta.label}
              </a>
              <a className="button button-secondary" href={c.secondaryCta.href}>
                {c.secondaryCta.label}
              </a>
            </div>
          </div>
          <HomeHero eyebrow="\u7f16\u8f91\u7ad9" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="stats">
            {c.stats.map((s) => (
              <div key={s.label} className="stat">
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <article className="home-featured">
            <div>
              <div className="home-featured-eyebrow">
                {renderFeaturedEyebrow(c.featuredEyebrow)}
              </div>
              <h2 className="home-featured-title">{c.featuredTitle}</h2>
              <p className="home-featured-body">
                <Linkify text={c.featuredBody} />
              </p>
              <div className="home-featured-actions">
                <a className="button button-accent" href={c.featuredPrimary.href}>
                  {c.featuredPrimary.label}
                </a>
                <a
                  className="button button-on-dark"
                  href={c.featuredSecondary.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {c.featuredSecondary.label}
                </a>
              </div>
            </div>
            <aside className="home-featured-side">
              <div className="home-featured-side-list">
                {c.featuredFacts.map((f) => (
                  <div key={f.label} className="home-featured-side-row">
                    <span className="home-featured-side-label">{f.label}</span>
                    <strong>{f.value}</strong>
                  </div>
                ))}
              </div>
            </aside>
          </article>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">{c.projectsHeading}</span>
          </div>
          <HomeProjectsGrid locale="zh" />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{c.aboutHeading}</h2>
            <p>
              <Linkify text={c.aboutBody} />
            </p>
          </div>
          <a className="button button-secondary" href={c.aboutCta.href}>
            {c.aboutCta.label} →
          </a>
        </div>
      </section>
    </>
  );
}

export default function HomePage() {
  return (
    <LocaleShell en={<HomeBody />} zh={<HomeBodyZh />} />
  );
}
