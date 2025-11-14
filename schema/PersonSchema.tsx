type PersonSchemaProps = {
  name: string;
  url: string;
  image?: string;
  sameAs?: string[];
  description?: string;
  jobTitle?: string;
};

export default function PersonSchema(props: PersonSchemaProps) {
  const { name, url, image, sameAs, description, jobTitle } = props;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name,
    url,
    image,
    sameAs,
    description,
    jobTitle,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
