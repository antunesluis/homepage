import { notFound } from 'next/navigation';
import { getProjects } from '@/lib/content-loader';
import { ProjectDetails } from '@/components/ui/ProjectDetails';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Container } from '@/components/ui/Container';

type DynamicPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DynamicPageParams) {
  const slug = (await params).slug;

  const { projects } = getProjects();
  const project = projects.find((p) => p.slug === slug);

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
