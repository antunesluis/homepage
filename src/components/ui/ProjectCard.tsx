import Link from 'next/link';
import Image from 'next/image';
import type { ProjectCard } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';
import { TechBadge } from '@/components/ui/TechBadge';

type ProjectCardProps = {
  project: ProjectCard;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, introduction, technologies, coverImage, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
      <div className="group relative bg-white dark:bg-surface rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
        <div className="relative h-60">
          <Image
            src={coverImage.url}
            alt={coverImage.alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
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
