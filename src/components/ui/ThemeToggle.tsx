'use client';

import { useTheme } from 'next-themes';
import { Button } from '@/components/ui/Button';
import { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <Button
        variant="ghost"
        size="sm"
        className="w-10 h-10 rounded-lg bg-surface/50 backdrop-blur-sm"
        disabled
        aria-hidden="true"
      >
        <div className="w-5 h-5 bg-border rounded-full animate-pulse" />
      </Button>
    );
  }

  const isDark = theme === 'dark';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      title={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
      className="relative w-10 h-10 rounded-lg group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Alternar para tema ${isDark ? 'claro' : 'escuro'}`}
    >
      {/* Efeito de hover */}
      <motion.div
        className={cn(
          'absolute inset-0 rounded-lg',
          'bg-primary/10 backdrop-blur-sm',
          'border border-border/30',
          'transition-colors duration-200',
        )}
        animate={{
          opacity: isHovered ? 1 : 0.7,
          scale: isHovered ? 1.05 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 20 }}
      />

      {/* Conteúdo principal */}
      <div className="relative w-full h-full flex items-center justify-center">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={theme}
            initial={{ rotate: -90, scale: 0.5, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 90, scale: 0.5, opacity: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 20,
              duration: 0.2,
            }}
          >
            {isDark ? (
              <Moon className="w-5 h-5 text-foreground/80 transition-colors group-hover:text-foreground" />
            ) : (
              <Sun className="w-5 h-5 text-foreground/80 transition-colors group-hover:text-foreground" />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </Button>
  );
}
