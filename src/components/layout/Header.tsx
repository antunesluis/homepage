'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { NavLinks } from './NavLinks';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { NavigationItem } from '@/types/content';
import { MobileMenuToggle } from './MobileMenuToggle';
import { MobileMenu } from './MobileMenu';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export type HeaderProps = {
  links: NavigationItem[];
  logoText: string;
};

export function Header({ links, logoText }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const changeBackground = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    document.addEventListener('scroll', changeBackground);
    return () => {
      document.removeEventListener('scroll', changeBackground);
    };
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          'fixed inset-x-0 top-4 z-50 mx-auto',
          'max-w-5xl px-4 sm:px-6 lg:px-8',
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={cn(
            'h-[60px] rounded-2xl px-8',
            'bg-background/30 shadow-sm',
            'saturate-100 backdrop-blur-[10px]',
            'border border-border/40',
            'transition-colors duration-200',
            isScrolled ? 'bg-background/80 border-border/60' : '',
          )}
        >
          <div className="h-full flex items-center justify-between">
            {/* Skip Nav Link - Escondido por padrão, visível apenas com foco */}
            <a
              href="#skip-nav"
              className="bg-background rounded-lg border border-border focus:ring-2 focus:ring-primary/50
                       fixed left-4 top-4 -translate-y-20 p-2 font-medium
                       transition-transform focus:translate-y-0"
            >
              <span>Pular para o conteúdo principal</span>
            </a>

            <Link
              href="/"
              className="relative text-foreground hover:text-foreground/80 transition-colors duration-200 text-xl font-semibold"
            >
              {logoText}
            </Link>

            <div className="relative flex items-center gap-4 sm:gap-6">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-6">
                <NavLinks links={links} />
                <div className="w-px h-6 bg-border/40 dark:bg-border/20" />
                <ThemeToggle />
              </div>

              {/* Mobile Toggle */}
              <MobileMenuToggle
                isOpen={isMenuOpen}
                action={() => setIsMenuOpen(!isMenuOpen)}
              />
            </div>
          </div>
        </div>
      </motion.header>

      {/* Espaçador para compensar o header fixed */}
      <div className="h-24" />

      {/* Mobile Menu */}
      <MobileMenu
        links={links}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
      />
    </>
  );
}
