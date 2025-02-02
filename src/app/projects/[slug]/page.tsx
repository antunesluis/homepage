import { notFound } from 'next/navigation';
import { getProjects } from '@/lib/content-loader';
import { ProjectDetails } from '@/components/ui/ProjectDetails';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Container } from '@/components/ui/Container';

export default function ProjectDetailsPage({
  params,
}: {
  params: { slug: string };
}) {
  const { projects } = getProjects();
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound(); // Retorna um 404 se o projeto não for encontrado
  }

  return (
    <SectionContainer>
      <Container>
        <ProjectDetails project={project} />
      </Container>
    </SectionContainer>
  );
}
