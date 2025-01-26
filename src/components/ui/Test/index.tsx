import { cn } from '@/lib/utils';

interface TestProps {
  children: React.ReactNode;
  className?: string;
}

export function Test({ children, className }: TestProps) {
  return <div className={cn('text-3xl', className)}>{children}</div>;
}
