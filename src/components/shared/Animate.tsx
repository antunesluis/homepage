'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

type BaseAnimationProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
};

export const FadeIn = ({
  children,
  className,
  delay = 0,
  duration = 0.5,
}: BaseAnimationProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration, ease: 'easeInOut' }}
    className={cn(className)}
    style={{ willChange: 'opacity, transform' }}
  >
    {children}
  </motion.div>
);

export const ScaleIn = ({
  children,
  className,
  delay = 0,
  duration = 0.8,
}: BaseAnimationProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration, ease: 'anticipate' }}
    className={cn(className)}
  >
    {children}
  </motion.div>
);

export const HoverScale = ({ children }: BaseAnimationProps) => (
  <motion.div whileHover={{ scale: 1.05 }}>{children}</motion.div>
);
