'use client';

import { useState } from 'react';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';
import { NavigationItem } from '@/types/content';
import { MobileMenuToggle } from './MobileMenuToggle';
import { MobileMenu } from './MobileMenu';

export type HeaderProps = {
  links: NavigationItem[];
  logoText: string;
};

export function Header({ links, logoText }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-background border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-background/80 dark:border-0 dark:border-b-0 dark:bg-background">
        <Container className="h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-foreground hover:text-foreground/80 transition-colors text-xl font-semibold"
          >
            {logoText}
          </Link>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6">
              <NavLinks links={links} />
              <ThemeToggle />
            </div>

            {/* Mobile Toggle */}
            <MobileMenuToggle
              isOpen={isMenuOpen}
              action={() => setIsMenuOpen(!isMenuOpen)}
            />
          </div>
        </Container>
      </header>

      {/* Mobile Menu */}
      <MobileMenu
        links={links}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
