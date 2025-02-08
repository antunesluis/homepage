import { cn } from '@/lib/utils';

type TechBadgeProps = {
  tech: string;
  className?: string;
};

export function TechBadge({ tech, className }: TechBadgeProps) {
  return (
    <span
      className={cn(
        'px-3 py-1 text-sm font-medium',
        'bg-surface border border-border rounded-full',
        'hover:bg-surface-hover transition-colors',
        className,
      )}
    >
      {tech}
    </span>
  );
}
