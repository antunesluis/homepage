import { SocialLink } from '@/types/content';

type SocialLinksProps = {
  links: SocialLink[];
};

export function SocialLinks({ links }: SocialLinksProps) {
  return (
    <div className="flex gap-4">
      {links.map((link) => (
        <a
          key={link.id}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-2 rounded-lg transition-all duration-300"
        >
          <div className="absolute inset-0 rounded-lg bg-gray-400/0 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-400/10" />
          <link.icon className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </a>
      ))}
    </div>
  );
}
