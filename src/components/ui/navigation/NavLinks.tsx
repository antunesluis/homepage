'use client';

import { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types/content';

export type NavLinksProps = {
  links: NavigationItem[];
};

export function NavLinks({ links = [] }: NavLinksProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-3">
      {links.map((item, index) => {
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'relative inline-flex items-center px-3 py-2',
              'text-md font-medium font-heading',
              'transition-colors duration-200 ease-in-out',
              hoveredIndex === index
                ? 'text-primary'
                : 'text-foreground/70 hover:text-foreground/90',
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className="relative">
              {item.label}
              <span
                className={cn(
                  'absolute -bottom-0.5 left-0 h-[2px] w-full',
                  'bg-gradient-to-r from-secondary/80 to-secondary/60',
                  'transform origin-left transition-all duration-200 ease-out',
                  hoveredIndex === index ? 'scale-x-100' : 'scale-x-0',
                )}
                style={{
                  transformOrigin: 'left center',
                }}
              />
            </span>
          </Link>
        );
      })}
    </nav>
  );
}
