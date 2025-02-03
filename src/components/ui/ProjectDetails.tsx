import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { ProjectDetails } from '@/types/content';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Container } from '@/components/ui/Container';
import { Heading, Paragraph } from '@/components/ui/Typography';

type ProjectDetailsProps = {
  project: ProjectDetails;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const { title, introduction, description, githubUrl, liveUrl, images } =
    project;

  return (
    <SectionContainer>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          {/* Título e Introdução */}
          <div className="space-y-4">
            <Heading level="h2" className="font-bold">
              {title}
            </Heading>
            <Paragraph variant="muted">{introduction}</Paragraph>
          </div>

          {/* <div className="flex flex-wrap gap-2"> */}
          {/*   {technologies.map((tech) => ( */}
          {/*     <span */}
          {/*       key={tech} */}
          {/*       className="px-2 py-1 text-sm bg-border border-border-hover border rounded-full dark:bg-surface-hover" */}
          {/*     > */}
          {/*       {tech} */}
          {/*     </span> */}
          {/*   ))} */}
          {/* </div> */}

          {/* Botões */}
          <div className="flex gap-4">
            {githubUrl && <Button>Source Code</Button>}
            {liveUrl && <Button>Visit Website</Button>}
          </div>

          {/* Imagens */}
          {images && images.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {images.map((image) => (
                <div
                  key={image.url}
                  className="relative w-full h-[500px] rounded-lg overflow-hidden"
                >
                  <Image
                    src={image.url}
                    alt={image.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 780px"
                  />
                </div>
              ))}
            </div>
          )}

          {/* Descrição */}
          <Paragraph>{description}</Paragraph>
        </div>
      </Container>
    </SectionContainer>
  );
}
