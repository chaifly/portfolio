import LocaleShell from '../components/LocaleShell';
import PersonJsonLd from '../components/PersonJsonLd';
import { HOME_CONTENT } from '../lib/content';
import { PROJECTS, CATEGORY_LABEL_EN, CATEGORY_LABEL_ZH } from '../lib/projects';

function StatusPill({ status }: { status: 'live' | 'shipped' | 'sunset' }) {
  const cls = status === 'live' ? 'badge badge-live' : 'badge';
  const label = status === 'live' ? 'Live' : status === 'shipped' ? 'Shipped' : 'Sunset';
  return <span className={cls}>{label}</span>;
}

function HomeHero({ eyebrow }: { eyebrow: string }) {
  return (
    <div className="hero-card" aria-hidden="true">
      <div className="hero-card-row">
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">TechPulse</div>
        </div>
        <span className="badge badge-live">iPhone 18</span>
      </div>
      <div className="hero-card-row">
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">flockfinder.online</div>
        </div>
        <span className="badge">ALPR</span>
      </div>
      <div className="hero-card-row">
        <div>
          <div className="hero-card-label">Live</div>
          <div className="hero-card-name">GemGuidePro</div>
        </div>
        <span className="badge">{eyebrow}</span>
      </div>
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
            <p className="hero-intro">{c.heroIntro}</p>
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
              <div className="home-featured-eyebrow">{c.featuredEyebrow}</div>
              <h2 className="home-featured-title">{c.featuredTitle}</h2>
              <p className="home-featured-body">{c.featuredBody}</p>
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
          <div className="home-projects-grid">
            {PROJECTS.map((p) => (
              <article key={p.slug} className="project-card">
                <div className="project-card-meta">
                  <span>{CATEGORY_LABEL_EN[p.category]}</span>
                  <span className="project-card-meta-dot" />
                  <span>Since {p.since}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.pitch}</p>
                <div className="project-links">
                  <a href={`/projects/${p.slug}`}>Details</a>
                  {p.externalUrl ? (
                    <a href={p.externalUrl} target="_blank" rel="noreferrer">
                      {p.externalLabel ?? 'Open live'}
                    </a>
                  ) : null}
                  <StatusPill status={p.status} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{c.aboutHeading}</h2>
            <p>{c.aboutBody}</p>
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
            <p className="hero-intro">{c.heroIntro}</p>
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
              <div className="home-featured-eyebrow">{c.featuredEyebrow}</div>
              <h2 className="home-featured-title">{c.featuredTitle}</h2>
              <p className="home-featured-body">{c.featuredBody}</p>
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
          <div className="home-projects-grid">
            {PROJECTS.map((p) => (
              <article key={p.slug} className="project-card">
                <div className="project-card-meta">
                  <span>{CATEGORY_LABEL_ZH[p.category]}</span>
                  <span className="project-card-meta-dot" />
                  <span>Since {p.since}</span>
                </div>
                <h3>{p.name}</h3>
                <p>{p.pitch}</p>
                <div className="project-links">
                  <a href={`/projects/${p.slug}`}>\u8be6\u60c5</a>
                  {p.externalUrl ? (
                    <a href={p.externalUrl} target="_blank" rel="noreferrer">
                      {p.externalLabel ?? '\u6253\u5f00\u7ebf\u4e0a'}
                    </a>
                  ) : null}
                  <StatusPill status={p.status} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>{c.aboutHeading}</h2>
            <p>{c.aboutBody}</p>
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

