import { ProjectCard } from '@/components/ui/ProjectCard';
import type { ProjectDetails } from '@/types/content';

type ProjectsGridProps = {
  projects: ProjectDetails[];
};

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}
