import Link from 'next/link';
import { NavLinks } from '../NavLinks';
import { ThemeToggle } from '@/components/ui/ThemeToggle';
import { Container } from '@/components/ui/Container';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-surface border-b dark:border-b-0 border-border/40 backdrop-blur supports-[backdrop-filter]:bg-surface/80">
      <Container className="h-16 flex items-center justify-between">
        <Link
          href="/"
          className="text-foreground hover:text-foreground/80 transition-colors text-xl font-semibold"
        >
          Luis Fernando Antunes
        </Link>

        <div className="flex items-center gap-4 sm:gap-6">
          <NavLinks />
          <ThemeToggle />
        </div>
      </Container>
    </header>
  );
}
