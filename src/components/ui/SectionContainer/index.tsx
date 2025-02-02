import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export type SectionContainerProps = {
  children: ReactNode;
  className?: string;
};

export const SectionContainer = ({
  id,
  children,
  className,
}: SectionContainerProps & { id?: string }) => {
  return (
    <section
      id={id}
      className={cn(
        'min-h-[calc(100vh-4rem)] flex relative py-16 sm:py-24 md:py-32 scroll-mt-16',
        className,
      )}
    >
      {children}
    </section>
  );
};
