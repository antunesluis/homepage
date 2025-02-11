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
        'min-h-[100dvh] flex relative',
        'py-12 sm:py-16 md:py-20 lg:py-24',
        'scroll-mt-16',
        className,
      )}
    >
      {children}
    </section>
  );
};
