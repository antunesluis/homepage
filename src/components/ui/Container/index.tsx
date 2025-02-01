import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export const Container = ({ children, className }: ContainerProps) => {
  // className={cn(
  //   'mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 2xl:max-w-6xl',
  //   className,
  // )}

  return (
    <div
      className={cn('mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8', className)}
    >
      {children}
    </div>
  );
};
