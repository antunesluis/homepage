import { Button } from '@/components/ui/Button';
import Image from 'next/image';

type ProjectCardProps = {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  onExpand: () => void;
};

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  onExpand,
}: ProjectCardProps) {
  return (
    <div className="bg-surface rounded-lg border border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
        <p className="text-muted-foreground line-clamp-2">{description}</p>

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

        <Button variant="outline" size="sm" onClick={onExpand}>
          Ver Detalhes
        </Button>
      </div>
    </div>
  );
}
