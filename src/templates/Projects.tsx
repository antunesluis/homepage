import { ProjectsGrid } from '@/components/layout/ProjectGrid';
import { Container } from '@/components/shared/Container';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { ProjectSection } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { Base } from '@/templates/Base';

export type ProjectsPageProps = {
  data: ProjectSection;
};

export default function Projects({ data }: ProjectsPageProps) {
  const { projects, title, subtitle, config } = data;
  return (
    <Base {...config}>
      <SectionContainer>
        <Container>
          <div className="mb-16 relative pb-8 text-center">
            <Heading level="h1" className="mb-4">
              {title}
            </Heading>
            <Paragraph variant="muted">{subtitle}</Paragraph>
            {/* Linha separadora */}
            <div className="absolute bottom-0 left-1/2 w-1/3 h-px bg-border -translate-x-1/2" />
          </div>
          <ProjectsGrid projects={projects} />
        </Container>
      </SectionContainer>
    </Base>
  );
}
