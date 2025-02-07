import Link from 'next/link';
import Image from 'next/image';
import type { ProjectCard } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';

type ProjectCardProps = {
  project: ProjectCard;
};

// export function ProjectCard({ project }: ProjectCardProps) {
//   return (
//     <Link href={`/projects/${project.slug}`}>
//       <div className="group relative bg-surface rounded-xl border border-border overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1">
//         <div className="relative h-64 p-2">
//           <Image
//             src={project.coverImage.url}
//             alt={project.coverImage.alt}
//             fill
//             className="object-cover rounded-lg transition duration-300 group-hover:scale-105"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-surface/80 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
//         </div>
//
//         <div className="p-6 space-y-4">
//           <Heading
//             level="h3"
//             className="group-hover:text-primary transition-colors"
//           >
//             {project.title}
//           </Heading>
//           <Paragraph variant="muted" className="line-clamp-2">
//             {project.introduction}
//           </Paragraph>
//
//           <div className="flex flex-wrap gap-2 pt-2">
//             {project.technologies.map((tech) => (
//               <span
//                 key={tech}
//                 className="px-3 py-1 text-sm bg-mutedElement rounded-full border border-border/50 dark:bg-surface-hover"
//               >
//                 {tech}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </Link>
//   );
// }

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

        <div className="p-4 py-2 space-y-3">
          <Heading level="h3">{title}</Heading>
          <Paragraph variant="muted">{introduction}</Paragraph>
          {/* <p className="text-muted-foreground line-clamp-2">{introduction}</p> */}

          <div className="flex flex-wrap gap-2 py-5">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-2 py-1 text-sm bg-surface rounded-full border-border-hover border dark:bg-surface-hover"
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
