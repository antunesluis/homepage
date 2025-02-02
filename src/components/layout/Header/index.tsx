import Link from 'next/link';
import { NavLinks } from '../NavLinks';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';
import { NavigationItem } from '@/types/content';

export type HeaderProps = {
  links: NavigationItem[];
  logoText: string;
};

export function Header({ links = [], logoText }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b border-border/40 backdrop-blur supports-[backdrop-filter]:bg-surface/80 dark:border-b-0 dark:bg-background">
      <Container className="h-16 flex items-center justify-between border-border">
        <Link
          href="/"
          className="text-foreground hover:text-foreground/80 transition-colors text-xl font-semibold"
        >
          {logoText}
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <NavLinks links={links} />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
