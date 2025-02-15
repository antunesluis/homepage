import { notFound } from 'next/navigation';
import { getProjects } from '@/lib/data-loader';
import { ProjectDetails } from '@/components/layout/ProjectDetails';

type PageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const { projects } = getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function Page({ params }: PageParams) {
  const { projects } = getProjects();
  const slug = (await params).slug;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return notFound();
  }

  return <ProjectDetails project={project} />;
}
