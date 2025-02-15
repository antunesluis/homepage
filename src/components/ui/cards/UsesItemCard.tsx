import Link from 'next/link';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { UsesItem } from '@/types/content';
import { Heading, Paragraph } from '@/components/ui/Typography';

type UsesItemCardProps = {
  item: UsesItem;
  className?: string;
};

export function UsesItemCard({ item, className }: UsesItemCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300, damping: 10 }}
      className={cn(
        'group relative rounded-lg border border-border',
        'bg-white backdrop-blur-sm dark:bg-surface dark:hover:bg-surface-hover/60',
        'hover:bg-surface hover:shadow-lg hover:shadow-primary/5',
        'transition-all duration-300 ease-in-out',
        className,
      )}
    >
      <Link
        href={item.href || '#'}
        className="block px-4 py-8 h-full"
        target={item.href ? '_blank' : undefined}
        rel={item.href ? 'noopener noreferrer' : undefined}
      >
        <div className="flex flex-row items-center md:flex-col md:items-stretch h-full">
          <div className="flex-shrink-0 flex items-center justify-center md:mb-4">
            <div className="relative w-24 h-24 md:w-36 md:h-36">
              <Image
                src={item.iconUrl}
                alt={item.title}
                fill
                className="object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex-grow flex flex-col justify-center md:items-center ml-4 md:ml-0">
            <Heading level="h4" className="font-semibold mb-2 md:text-center">
              {item.title}
            </Heading>
            <Paragraph
              variant="muted"
              className="text-sm lg:text-sm md:text-center"
            >
              {item.subtitle}
            </Paragraph>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
