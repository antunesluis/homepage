'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { NavigationItem } from '@/types/content';

type MobileNavLinksProps = {
  links: NavigationItem[];
  onClose: () => void;
};

export function MobileNavLinks({ links, onClose }: MobileNavLinksProps) {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col p-4 space-y-2">
      {links.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              'px-4 py-2 rounded-lg transition-colors',
              'text-foreground hover:bg-surface-hover',
              isActive && 'bg-surface-hover font-medium',
            )}
            onClick={onClose}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
