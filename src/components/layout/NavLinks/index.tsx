'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const navigationItems = [
  { label: 'Home', href: '/' },
  { label: 'Projetos', href: '/projects' },
  { label: 'Sobre', href: '/about' },
  { label: 'Contato', href: '/contact' },
];

export function NavLinks() {
  // // Pega a rota atual
  const pathname = usePathname();
  // Estado para controlar qual item está com hover
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <nav className="hidden md:flex items-center gap-1">
      {navigationItems.map((item, index) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 relative rounded-lg text-sm transition-colors duration-200',
              'hover:text-foreground/80',
              isActive ? 'text-foreground font-medium' : 'text-foreground/60',
            )}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index && (
              <span
                className="absolute inset-0 rounded-lg bg-muted -z-10"
                style={{
                  transform: 'translateX(0)',
                  opacity: 1,
                  transition: 'all 0.2s ease-in-out',
                }}
              />
            )}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
