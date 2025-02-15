import Link from 'next/link';
import type { ProjectCard } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { TechBadge } from '@/components/ui/TechBadge';
import { BlurImage } from '@/components/ui/BlurImage';

type ProjectCardProps = {
  project: ProjectCard;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, introduction, technologies, coverImage, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative bg-white dark:bg-surface rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <div className="relative h-60">
          <BlurImage
            src={coverImage.url}
            alt={coverImage.alt}
            fill
            className="rounded-xl"
            imageClassName="object-cover transition-transform duration-100"
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
          />
        </div>

        <div className="p-6 space-y-4">
          <Heading level="h3" className="font-semibold">
            {title}
          </Heading>
          <Paragraph variant="muted" className="line-clamp-2">
            {introduction}
          </Paragraph>

          <div className="flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <TechBadge key={tech} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
