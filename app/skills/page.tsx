import type { Metadata } from 'next';
import LocaleShell from '../../components/LocaleShell';
import PersonJsonLd from '../../components/PersonJsonLd';
import { SKILLS_CONTENT } from '../../lib/content';

export const metadata: Metadata = {
  title: 'Skills & experience',
  description:
    'Languages, frameworks, data and domain areas Chen works in — with proficiency levels for each.',
  alternates: { canonical: 'https://www.aicoder.ink/skills' },
};

function LevelDots({ level }: { level: 1 | 2 | 3 | 4 | 5 }) {
  return (
    <span className="skill-level" aria-label={`level ${level} of 5`}>
      {[1, 2, 3, 4, 5].map((d) => (
        <span key={d} className={d <= level ? 'skill-level-dot on' : 'skill-level-dot'} />
      ))}
    </span>
  );
}

function renderSkills(locale: 'en' | 'zh') {
  const c = SKILLS_CONTENT[locale];
  const skillSummary = c.categories
    .flatMap((cat) => cat.skills.filter((s) => s.level >= 4).map((s) => s.name));
  return (
    <section className="container skills-page">
      <header className="skills-header">
        <h1>{c.pageTitle}</h1>
        <p>{c.pageIntro}</p>
      </header>

      <div className="skills-grid">
        {c.categories.map((cat) => (
          <article key={cat.name} className="skills-card">
            <h2>{cat.name}</h2>
            <p className="lead">{cat.intro}</p>
            <ul>
              {cat.skills.map((s) => (
                <li key={s.name}>
                  <span>{s.name}</span>
                  <LevelDots level={s.level} />
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <div className="container-tight" style={{ marginTop: '2.5rem' }}>
        <div className="availability-strip">
          <span className="availability-dot" />
          <span>
            <strong>{c.addingHeading}:</strong> {c.addingText}
          </span>
        </div>
      </div>

      <PersonJsonLd
        name="Chen"
        jobTitle="AI-empowered developer & data practitioner"
        url="https://www.aicoder.ink"
        sameAs={['https://x.com/Chaifly', 'https://github.com/chaifly']}
        skills={skillSummary}
      />
    </section>
  );
}

function SkillsEn() {
  return renderSkills('en');
}

function SkillsZh() {
  return renderSkills('zh');
}

export default function SkillsPage() {
  return <LocaleShell en={<SkillsEn />} zh={<SkillsZh />} />;
}

