import Link from 'next/link';
import Image from 'next/image';
import type { ProjectCard } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';

type ProjectCardProps = {
  project: ProjectCard;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, introduction, technologies, coverImage, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-surface rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-60 mx-2 my-3 overflow-hidden">
          <div className="group relative h-full w-full">
            <Image
              src={coverImage.url}
              alt={coverImage.alt}
              fill
              className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        <div className="p-4 py-2 space-y-3">
          <Heading level="h3">{title}</Heading>
          <Paragraph variant="muted">{introduction}</Paragraph>

          <div className="flex flex-wrap gap-2 py-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-border rounded-full border-border-hover border dark:bg-surface-hover"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
