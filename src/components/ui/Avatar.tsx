import Image from 'next/image';
import { cn } from '@/lib/utils';

type AvatarProps = {
  src: string;
  alt: string;
  className?: string;
};

export function Avatar({ src, alt, className }: AvatarProps) {
  return (
    <div
      className={cn(
        'w-64 h-64 rounded-full overflow-hidden border-4 border-border dark:border-border-hover relative',
        className,
      )}
    >
      <Image src={src} alt={alt} fill priority className="object-cover" />
    </div>
  );
}
