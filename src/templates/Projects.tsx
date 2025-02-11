import { ProjectsGrid } from '@/components/layout/ProjectGrid';
import { Container } from '@/components/shared/Container';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ProjectSection } from '@/types/content';
import { SectionHeader } from '@/components/layout/SectionHeader';

export type ProjectsPageProps = {
  data: ProjectSection;
};

export default function Projects({ data }: ProjectsPageProps) {
  const { projects, title, subtitle } = data;

  return (
    <SectionContainer>
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />
        <ProjectsGrid projects={projects} />
      </Container>
    </SectionContainer>
  );
}
