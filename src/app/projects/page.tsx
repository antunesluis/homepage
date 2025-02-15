import Projects from '@/templates/Projects';
import { getProjects } from '@/lib/data-loader';

export default function ProjectsPage() {
  const projectSectionData = getProjects();

  return (
    <>
      <Projects data={projectSectionData} />
    </>
  );
}
