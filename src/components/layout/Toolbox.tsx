import { Heading, Paragraph } from '@/components/ui/Typography';
import type { ToolBox } from '@/types/content';

export type ToolBoxProps = {
  data: ToolBox;
};

export function Toolbox({ data }: ToolBoxProps) {
  return (
    <div className="space-y-4">
      <Heading level="h2">{data.title}</Heading>
      <Paragraph variant="muted">{data.description}</Paragraph>

      <div className="grid grid-cols-4 sm:grid-cols-6 lg:grid-cols-8 gap-3">
        {data.technologies.map((tech) => (
          <div
            key={tech.id}
            className="relative group flex items-center justify-center p-8 rounded-xl bg-surface border border-border dark:bg-surface hover:bg-surface-hover transition-colors"
          >
            <tech.icon className="w-10 h-10 text-primary group-hover:opacity-0 transition-opacity" />
            <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-foreground">
              {tech.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
