'use client';

import {
  EmailIcon,
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from '@/config/icons';
import type { SocialPlatform, SocialLink } from '@/types/content';
import { cn } from '@/lib/utils';

const getIconComponent = (id: SocialPlatform) => {
  switch (id) {
    case 'github':
      return GithubIcon;
    case 'linkedin':
      return LinkedinIcon;
    case 'email':
      return EmailIcon;
    case 'instagram':
      return InstagramIcon;
    default:
      throw new Error(`Icon not found for: ${id}`);
  }
};

type SocialLinksProps = {
  links: SocialLink[];
  showText?: boolean;
};

export function SocialLinks({ links, showText = false }: SocialLinksProps) {
  return (
    <div className={showText ? 'flex flex-col gap-2' : 'flex gap-3'}>
      {links.map((link) => {
        const Icon = getIconComponent(link.id);

        return (
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
            {/* Icon container */}
            <div className="relative flex items-center justify-center">
              <div
                className={cn(
                  'absolute -inset-2 rounded-full opacity-0 transition-opacity',
                )}
              />
              <Icon
                className={cn(
                  'transition-transform duration-200',
                  showText ? 'w-5 h-5' : 'w-6 h-6',
                  !showText ? 'group-hover:scale-110' : 'group-hover:scale-100',
                )}
              />
            </div>

            {/* Text (when enabled) */}
            {showText && (
              <span className="text-sm font-body text-muted-foreground group-hover:text-foreground transition-colors">
                {link.label}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
