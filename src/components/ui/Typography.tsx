// src/components/ui/Typography.tsx
import { cn } from '@/lib/utils';

type HeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  children: React.ReactNode;
  className?: string;
  gradient?: boolean; // Nova prop para gradiente
};

export function Heading({
  level,
  children,
  className,
  gradient = false,
}: HeadingProps) {
  const Tag = level;

  const sizes = {
    h1: 'text-4xl md:text-5xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
  };

  return (
    <Tag
      className={cn(
        'font-heading',
        sizes[level],
        gradient
          ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent'
          : 'text-heading',
        className,
      )}
    >
      {children}
    </Tag>
  );
}

type ParagraphProps = {
  children: React.ReactNode;
  className?: string;
  variant?: 'body' | 'muted';
};

export function Paragraph({
  children,
  className,
  variant = 'body',
}: ParagraphProps) {
  const color = variant === 'muted' ? 'text-muted' : 'text-body';
  return (
    <p className={cn('font-body text-base', color, className)}>{children}</p>
  );
}
