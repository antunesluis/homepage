import Projects from '@/templates/Projects';
import { getProjects } from '@/lib/content-loader';

export default function ProjectsPage() {
  const projectSectionData = getProjects();

  return (
    <>
      <Projects data={projectSectionData} />
    </>
  );
}
