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
        'min-h-[calc(100vh-4rem)] flex relative py-8 sm:py-16 md:py-24 scroll-mt-16',
        className,
      )}
    >
      {children}
    </section>
  );
};

// export function SectionContainer({ children, className, ...props }: SectionContainerProps) {
//   return (
//     <section
//       className={cn(
//         'py-16 sm:py-20 md:py-24 relative',
//         'first:pt-32 last:pb-32',
//         className
//       )}
//       {...props}
//     >
//       {children}
//     </section>
//   );
// }
