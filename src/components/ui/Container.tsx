import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-10',
        className,
      )}
    >
      {children}
    </div>
  );
};
