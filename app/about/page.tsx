import type { Metadata } from 'next';
import LocaleShell from '../../components/LocaleShell';
import PersonJsonLd from '../../components/PersonJsonLd';
import Linkify from '../../components/Linkify';
import { ABOUT_CONTENT } from '../../lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Chen — an AI-empowered developer and data practitioner: trajectory from data analytics to shipping niche web products, plus the four working rules I try to keep.',
  alternates: { canonical: 'https://www.aicoder.ink/about' },
};

const PERSON_LD = (
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
);

function AboutEn() {
  const c = ABOUT_CONTENT.en;
  return (
    <section className="container about-page">
      <header className="about-header">
        <h1>{c.pageTitle}</h1>
      </header>

      <div className="container-tight">
        {c.introParagraphs.map((p, i) => (
          <p key={i}>
            <Linkify text={p} />
          </p>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: '3rem' }}>
        <span className="eyebrow">{c.timelineHeading}</span>
        <p>{c.timelineIntro}</p>
      </div>
      <div className="container-tight">
        <div className="timeline">
          {c.timeline.map((entry) => (
            <div key={entry.year} className="timeline-item">
              <div className="timeline-year">{entry.year}</div>
              <h3>{entry.title}</h3>
              <p>
                <Linkify text={entry.body} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-head" style={{ marginTop: '3rem' }}>
        <span className="eyebrow">{c.valuesHeading}</span>
        <p>{c.valuesIntro}</p>
      </div>
      <div className="container-tight">
        <div className="values-grid">
          {c.values.map((v) => (
            <div key={v.title} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-tight" style={{ marginTop: '2.5rem' }}>
        <div className="section-head">
          <h2>{c.closerHeading}</h2>
          <p>{c.closerBody}</p>
        </div>
      </div>
      {PERSON_LD}
    </section>
  );
}

function AboutZh() {
  const c = ABOUT_CONTENT.zh;
  return (
    <section className="container about-page">
      <header className="about-header">
        <h1>{c.pageTitle}</h1>
      </header>

      <div className="container-tight">
        {c.introParagraphs.map((p, i) => (
          <p key={i}>
            <Linkify text={p} />
          </p>
        ))}
      </div>

      <div className="section-head" style={{ marginTop: '3rem' }}>
        <span className="eyebrow">{c.timelineHeading}</span>
        <p>{c.timelineIntro}</p>
      </div>
      <div className="container-tight">
        <div className="timeline">
          {c.timeline.map((entry) => (
            <div key={entry.year} className="timeline-item">
              <div className="timeline-year">{entry.year}</div>
              <h3>{entry.title}</h3>
              <p>
                <Linkify text={entry.body} />
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="section-head" style={{ marginTop: '3rem' }}>
        <span className="eyebrow">{c.valuesHeading}</span>
        <p>{c.valuesIntro}</p>
      </div>
      <div className="container-tight">
        <div className="values-grid">
          {c.values.map((v) => (
            <div key={v.title} className="value-card">
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="container-tight" style={{ marginTop: '2.5rem' }}>
        <div className="section-head">
          <h2>{c.closerHeading}</h2>
          <p>{c.closerBody}</p>
        </div>
      </div>
      {PERSON_LD}
    </section>
  );
}

export default function AboutPage() {
  return <LocaleShell en={<AboutEn />} zh={<AboutZh />} />;
}
