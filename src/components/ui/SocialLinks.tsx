import { SocialLink } from '@/types/content';
import { cn } from '@/lib/utils';

type SocialLinksProps = {
  links: SocialLink[];
  showText?: boolean;
};

export function SocialLinks({ links, showText = false }: SocialLinksProps) {
  return (
    <div className={showText ? 'flex flex-col gap-2' : 'flex gap-3'}>
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            'group flex items-center transition-all',
            showText
              ? 'w-fit p-3 rounded-lg hover:bg-surface gap-4'
              : 'p-2 rounded-lg hover:bg-surface-hover',
          )}
        >
          {/* Container do ícone */}
          <div className="relative flex items-center justify-center">
            <div
              className={cn(
                'absolute -inset-2 rounded-full opacity-0 transition-opacity',
                'group-hover:opacity-100 bg-primary/10',
              )}
            />
            <link.icon
              className={cn(
                'transition-transform duration-200',
                showText ? 'w-5 h-5' : 'w-6 h-6',
                !showText ? 'group-hover:scale-110' : 'group-hover:scale-100',
              )}
            />
          </div>

          {/* Texto (quando habilitado) */}
          {showText && (
            <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              {link.label}
            </span>
          )}
        </a>
      ))}
    </div>
  );
}
