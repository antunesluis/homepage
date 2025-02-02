import Link from 'next/link';
import Image from 'next/image';
import type { ProjectCard } from '@/types/content';

type ProjectCardProps = {
  project: ProjectCard;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const { title, introduction, technologies, coverImage, slug } = project;

  return (
    <Link href={`/projects/${slug}`}>
      <div className="bg-surface rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        <div className="relative h-60 mx-2 my-3">
          <Image
            src={coverImage.url}
            alt={coverImage.alt}
            fill
            className="object-cover rounded-lg"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="p-6 space-y-3">
          <h3 className="text-xl font-semibold text-foreground">{title}</h3>
          <p className="text-muted-foreground line-clamp-2">{introduction}</p>

          <div className="flex flex-wrap gap-2">
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
