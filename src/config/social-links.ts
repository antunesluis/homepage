import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/config/icons';

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    icon: GithubIcon,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    icon: LinkedinIcon,
  },
  {
    id: 'email',
    label: 'Email',
    href: 'mailto:your@email.com',
    icon: Mail,
  },
] as const;

export type SocialLinkId = (typeof socialLinks)[number]['id'];
