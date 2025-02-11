'use client';

import { NavigationItem } from '@/types/content';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type MobileMenuProps = {
  links: NavigationItem[];
  isOpen: boolean;
  onClose: () => void;
};

export function MobileMenu({ links, isOpen, onClose }: MobileMenuProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/60 backdrop-blur-2xl backdrop-saturate-200 transition-all duration-500',
          'md:hidden',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-screen w-72 bg-background/95 backdrop-blur-xl backdrop-saturate-150',
          'border-l border-border/40 shadow-xl',
          'transform transition-all duration-500 ease-out',
          'md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-end px-4 border-b border-border/40">
          <button
            onClick={onClose}
            className="p-2 text-foreground/60 hover:text-foreground transition-colors duration-200 rounded-lg"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-1">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2.5 rounded-lg transition-all duration-200',
                      'text-foreground/60 hover:text-foreground',
                      'hover:bg-surface/80 hover:backdrop-blur-sm',
                      isActive
                        ? 'bg-surface/80 text-foreground font-medium'
                        : '',
                    )}
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border/40">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Tema</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
