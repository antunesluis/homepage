'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationItems } from '@/types/content';

export type NavLinksProps = {
  links: NavigationItems[];
};

export function NavLinks({ links = [] }: NavLinksProps) {
  const pathname = usePathname();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative inline-flex flex-col items-center px-2 py-2',
              'text-md transition-colors duration-200',
              'hover:text-foreground/80',
              isActive ? 'text-foreground font-medium' : 'text-foreground/60',
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="relative">
              {item.label}
              {/* Linha inferior */}
              <span
                className={cn(
                  'absolute -bottom-1 left-0 w-full h-[2px] bg-primary',
                  ' transform scale-x-0 transition-all duration-200',
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0',
                )}
                style={{
                  transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
