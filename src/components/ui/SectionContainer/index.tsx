import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export const SectionContainer = ({
  children,
  className,
}: SectionContainerProps) => {
  return (
    <div
      className={cn('relative py-16 sm:py-24 md:py-32 scroll-mt-16', className)}
    >
      {children}
    </div>
  );
};
