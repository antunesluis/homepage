import { GithubIcon, LinkedinIcon, EmailIcon } from '@/config/icons';
import SectionsContent from '@/content/sections.json';
import LinksContent from '@/content/links.json';
import ConfigContent from '@/content/config-content.json';
import {
  SocialLink,
  HeroSection,
  ProjectSection,
  SocialPlatform,
  NavigationItem,
  PageConfig,
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

export function getSocialLinks(): SocialLink[] {
  return LinksContent.socialLinks.map((link) => ({
    id: link.id as SocialPlatform,
    label: link.label,
    href: link.href as `https://${string}` | `mailto:${string}`,
    icon: getIconComponent(link.id as SocialPlatform),
  }));
}

export function getNavigationLinks(): NavigationItem[] {
  return ConfigContent.navigationLinks as NavigationItem[];
}

export function getPageConfig(): PageConfig {
  return ConfigContent as PageConfig;
}

export function getHeroContent(): HeroSection {
  return {
    ...SectionsContent.hero,
    socialLinks: getSocialLinks(),
    config: getPageConfig(),
  } as HeroSection;
}

export function getProjects(): ProjectSection {
  return {
    ...SectionsContent.projects,
    config: getPageConfig(),
  } as ProjectSection;
}
