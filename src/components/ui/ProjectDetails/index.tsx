import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import type { ProjectDetails } from '@/types/content';

type ProjectDetailsProps = {
  project: ProjectDetails;
};

export function ProjectDetails({ project }: ProjectDetailsProps) {
  const {
    title,
    description,
    technologies,
    coverImage,
    githubUrl,
    liveUrl,
    images,
  } = project;

  return (
    <div className="space-y-8">
      <div className="relative h-64 rounded-lg overflow-hidden">
        <Image
          src={coverImage.url}
          alt={coverImage.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="space-y-4">
        <h1 className="text-3xl font-bold text-foreground">{title}</h1>
        <p className="text-lg text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-sm bg-muted rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && <Button variant="outline">Ver no GitHub</Button>}
          {liveUrl && <Button>Ver Projeto</Button>}
        </div>

        {images && images.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {images.map((image) => (
              <div key={image.url} className="relative h-48">
                <Image
                  src={image.url}
                  alt={image.alt}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
