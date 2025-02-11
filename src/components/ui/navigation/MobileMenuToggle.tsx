'use client';

import { Button } from '@/components/ui/Button';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

type MobileMenuToggleProps = {
  isOpen: boolean;
  action: () => void;
  className?: string;
};

export function MobileMenuToggle({
  isOpen,
  action,
  className,
}: MobileMenuToggleProps) {
  return (
    <Button
      variant="ghost"
      size="sm"
      className={cn(
        'md:hidden w-9 h-9 px-0 rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-primary/50',
        className,
      )}
      onClick={action}
      aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
    >
      {isOpen ? (
        <X className="h-5 w-5 transition-transform" />
      ) : (
        <Menu className="h-5 w-5 transition-transform" />
      )}
    </Button>
  );
}
