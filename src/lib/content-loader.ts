import { GithubIcon, LinkedinIcon, EmailIcon } from '@/config/icons';
import SectionsContent from '@/content/sections.json';
import SocialLinksContent from '@/content/social-links.json';
import {
  SocialLink,
  HeroSection,
  ProjectSection,
  SocialPlatform,
} from '@/types/content';
import { LucideProps } from 'lucide-react';
import { ReactElement } from 'react';

const getIconComponent = (
  id: SocialPlatform,
): ((props: LucideProps) => ReactElement) => {
  switch (id) {
    case 'github':
      return GithubIcon;
    case 'linkedin':
      return LinkedinIcon;
    case 'email':
      return EmailIcon;
    default:
      throw new Error(`Ícone não encontrado para: ${id}`);
  }
};

export function getHeroContent(): HeroSection {
  return {
    ...SectionsContent.hero,
    socialLinks: getSocialLinks(),
  };
}

export function getProjects(): ProjectSection[] {
  return SectionsContent.projects as ProjectSection[];
}

export function getSocialLinks(): SocialLink[] {
  return SocialLinksContent.socialLinks.map((link) => ({
    id: link.id as SocialPlatform,
    label: link.label,
    href: link.href as `https://${string}` | `mailto:${string}`,
    icon: getIconComponent(link.id as SocialPlatform),
  }));
}
