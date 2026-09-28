import LocaleShell from '../../components/LocaleShell';
import {
  PROJECTS,
  CATEGORY_LABEL_EN,
  CATEGORY_LABEL_ZH,
} from '../../lib/projects';
import { PROJECTS_CONTENT } from '../../lib/content';

function StatusPill({ status }: { status: 'live' | 'shipped' | 'sunset' }) {
  const cls = status === 'live' ? 'badge badge-live' : 'badge';
  const label =
    status === 'live' ? 'Live' : status === 'shipped' ? 'Shipped' : 'Sunset';
  return <span className={cls}>{label}</span>;
}

function ProjectsBody({ locale }: { locale: 'en' | 'zh' }) {
  const c = PROJECTS_CONTENT[locale];
  const catLabel =
    locale === 'en' ? CATEGORY_LABEL_EN : CATEGORY_LABEL_ZH;
  return (
    <section className="container projects-page">
      <header className="projects-header">
        <span className="eyebrow">{c.title}</span>
        <h1>{PROJECTS.length} shipped projects</h1>
        <p>{c.intro}</p>
      </header>

      <div className="projects-grid">
        {PROJECTS.map((p) => (
          <article key={p.slug} className="project-card">
            <div className="project-card-meta">
              <span>{catLabel[p.category]}</span>
              <span className="project-card-meta-dot" />
              <span>Since {p.since}</span>
            </div>
            <h3>{p.name}</h3>
            <p>{p.summary}</p>
            <div className="project-links">
              <a href={`/projects/${p.slug}`}>
                {locale === 'en' ? 'Read case' : '看案例'}
              </a>
              {p.externalUrl ? (
                <a href={p.externalUrl} target="_blank" rel="noreferrer">
                  {p.externalLabel ?? (locale === 'en' ? 'Open live' : '打开线上')}
                </a>
              ) : null}
              <StatusPill status={p.status} />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function ProjectsEn() {
  return <ProjectsBody locale="en" />;
}

function ProjectsZh() {
  return <ProjectsBody locale="zh" />;
}

export default function ProjectsPage() {
  return <LocaleShell en={<ProjectsEn />} zh={<ProjectsZh />} />;
}

