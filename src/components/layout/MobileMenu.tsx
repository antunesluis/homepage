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
          'fixed inset-0 z-40 bg-black/50 backdrop-blur-sm transition-opacity',
          'md:hidden',
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible',
        )}
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          'fixed top-0 right-0 z-50 h-screen w-64 bg-background border-l border-border',
          'transform transition-transform duration-300 ease-in-out',
          'md:hidden',
          isOpen ? 'translate-x-0' : 'translate-x-full',
        )}
      >
        {/* Header */}
        <div className="h-16 flex items-center justify-end px-4 border-b border-border">
          <button
            onClick={onClose}
            className="p-2 text-foreground/60 hover:text-foreground/80 rounded-lg"
            aria-label="Fechar menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Navigation */}
        <nav className="p-4">
          <ul className="space-y-2">
            {links.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'block px-4 py-2 rounded-lg transition-colors',
                      'text-foreground/60 hover:text-foreground/80',
                      'hover:bg-surface hover:text-foreground',
                      isActive ? 'bg-surface text-foreground font-medium' : '',
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
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-border">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted">Tema</span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </>
  );
}
