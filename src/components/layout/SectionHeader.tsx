'use client';

import { Heading, Paragraph } from '@/components/ui/Typography';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

type SectionHeaderProps = {
  title: string;
  subtitle: string;
  level?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  className?: string;
};

export function SectionHeader({
  title,
  subtitle,
  level = 'h1',
  className,
}: SectionHeaderProps) {
  return (
    <motion.div
      className={cn('relative pb-8 mb-16 text-center', className)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <Heading level={level} className="mb-3">
          {title}
        </Heading>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Paragraph variant="muted">{subtitle}</Paragraph>
      </motion.div>

      <div className="absolute bottom-0 left-1/2 w-1/3 -translate-x-1/2">
        <motion.div
          className="h-px bg-border"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{
            delay: 0.4,
            duration: 0.8,
            ease: [0.65, 0, 0.35, 1],
          }}
          style={{ originX: 0.5 }}
        />
      </div>
    </motion.div>
  );
}
