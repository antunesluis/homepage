import { ProjectsGrid } from '@/components/layout/ProjectsGrid';
import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { ProjectSection } from '@/types/content';
import { Base } from '@/templates/Base';

export type ProjectsPageProps = {
  data: ProjectSection;
};

export default function Projects({ data }: ProjectsPageProps) {
  const { projects, title, config } = data;

  return (
    <Base {...config}>
      <SectionContainer>
        <Container>
          <h1 className="text-3xl font-bold text-foreground mb-8">{title}</h1>
          <ProjectsGrid projects={projects} />
        </Container>
      </SectionContainer>
    </Base>
  );
}
