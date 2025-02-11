import { notFound } from 'next/navigation';
import { getProjects, getPageConfig } from '@/lib/content-loader';
import { ProjectDetails } from '@/components/layout/ProjectDetails';
import { Base } from '@/templates/Base';

type DynamicPageParams = {
  params: Promise<{ slug: string }>;
};

export default async function Page({ params }: DynamicPageParams) {
  const slug = (await params).slug;

  const { projects } = getProjects();
  const pageConfig = getPageConfig();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound(); // Retorna um 404 se o projeto não for encontrado
  }

  return (
    <Base {...pageConfig}>
      <ProjectDetails project={project} />
    </Base>
  );
}
