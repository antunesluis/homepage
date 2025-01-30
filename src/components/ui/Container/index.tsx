import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div className={cn('mx-auto max-w-4xl px-4 sm:px-6 lg:px-8', className)}>
      {children}
    </div>
  );
};
