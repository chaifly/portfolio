import type { Metadata } from 'next';
import LocaleShell from '../../components/LocaleShell';
import { CONTACT_CONTENT } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'How to reach Chen — channels, current availability, and how I handle inbound.',
  alternates: { canonical: 'https://www.aicoder.ink/contact' },
};

function ContactEn() {
  const c = CONTACT_CONTENT.en;
  return (
    <section className="container contact-page">
      <header className="contact-header">
        <h1>{c.pageTitle}</h1>
        <p>{c.intro}</p>
      </header>

      <div className="contact-grid">
        {c.channels.map((ch) => (
          <a key={ch.label} href={ch.href} className="channel-card">
            <span className="channel-card-label">{ch.label}</span>
            <span className="channel-card-value">{ch.value}</span>
            <span className="channel-card-hint">{ch.hint}</span>
          </a>
        ))}
      </div>

      <div className="container-tight">
        <div className="availability-strip">
          <span className="availability-dot" />
          <span>
            <strong>{c.availabilityLabel}:</strong> {c.availabilityBody}
          </span>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>{c.expectationHeading}</h2>
          <ul>
            {c.expectations.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function ContactZh() {
  const c = CONTACT_CONTENT.zh;
  return (
    <section className="container contact-page">
      <header className="contact-header">
        <h1>{c.pageTitle}</h1>
        <p>{c.intro}</p>
      </header>

      <div className="contact-grid">
        {c.channels.map((ch) => (
          <a key={ch.label} href={ch.href} className="channel-card">
            <span className="channel-card-label">{ch.label}</span>
            <span className="channel-card-value">{ch.value}</span>
            <span className="channel-card-hint">{ch.hint}</span>
          </a>
        ))}
      </div>

      <div className="container-tight">
        <div className="availability-strip">
          <span className="availability-dot" />
          <span>
            <strong>{c.availabilityLabel}:</strong> {c.availabilityBody}
          </span>
        </div>

        <div style={{ marginTop: '2rem' }}>
          <h2>{c.expectationHeading}</h2>
          <ul>
            {c.expectations.map((e, i) => (
              <li key={i}>{e}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default function ContactPage() {
  return <LocaleShell en={<ContactEn />} zh={<ContactZh />} />;
}

