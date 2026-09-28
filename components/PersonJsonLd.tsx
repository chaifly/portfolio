type PersonJsonLdProps = {
  name: string;
  jobTitle: string;
  url: string;
  sameAs?: string[];
  knowsAbout?: string[];
  skills?: string[];
};

export default function PersonJsonLd(props: PersonJsonLdProps) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: props.name,
    jobTitle: props.jobTitle,
    url: props.url,
    sameAs: props.sameAs,
    knowsAbout: props.knowsAbout,
    skills: props.skills,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

