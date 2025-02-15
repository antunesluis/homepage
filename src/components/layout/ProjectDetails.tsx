import { Button } from '@/components/ui/Button';
import type { ProjectDetails } from '@/types/content';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Container } from '@/components/shared/Container';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { TechBadge } from '@/components/ui/TechBadge';
import { ArrowUpRight } from 'lucide-react';
import { BlurImage } from '@/components/ui/BlurImage';

type ProjectDetailsProps = {
  project: ProjectDetails;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const {
    title,
    introduction,
    description,
    githubUrl,
    liveUrl,
    images,
    technologies,
  } = project;

  return (
    <SectionContainer>
      <Container className="max-w-4xl">
        <div className="space-y-8">
          {/* Header Section */}
          <div className="space-y-6">
            <Heading level="h1" className="font-bold">
              {title}
            </Heading>
            <Paragraph variant="muted" className="text-lg">
              {introduction}
            </Paragraph>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <TechBadge key={tech} tech={tech} />
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            {githubUrl && (
              <Button
                variant="primary"
                size="lg"
                href={githubUrl}
                external
                rightIcon={<ArrowUpRight />}
              >
                View Source Code
              </Button>
            )}
            {liveUrl && (
              <Button
                variant="primary"
                size="lg"
                href={liveUrl}
                external
                rightIcon={<ArrowUpRight />}
              >
                Visit Website
              </Button>
            )}
          </div>

          {/* Project Images */}
          {images && images.length > 0 && (
            <div className="grid grid-cols-1 gap-6">
              {images.map((image) => (
                <div
                  key={image.url}
                  className="relative aspect-video rounded-lg overflow-hidden border border-border"
                >
                  <BlurImage
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

          {/* Project Description */}
          <div className="prose prose-sm sm:prose-base dark:prose-invert max-w-none">
            {description}
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
}
