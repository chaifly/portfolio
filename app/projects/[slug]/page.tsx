interface ProjectPageProps {
  params: { slug: string };
}

export default function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = params;

  return (
    <section>
      <h1>Project: {slug}</h1>
      <p>This is a placeholder for the project detail page. You can render rich content based on the slug.</p>
    </section>
  );
}
