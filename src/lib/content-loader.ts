import * as Icons from '@/config/icons';
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
  AboutSection,
  Technology,
  ToolBoxElement,
  ToolBox,
} from '@/types/content';
import { LucideProps } from 'lucide-react';
import { ReactElement } from 'react';

const getSocialIconComponent = (
  id: SocialPlatform,
): ((props: LucideProps) => ReactElement) => {
  switch (id) {
    case 'github':
      return Icons.GithubIcon;
    case 'linkedin':
      return Icons.LinkedinIcon;
    case 'email':
      return Icons.EmailIcon;
    default:
      throw new Error(`Ícone não encontrado para: ${id}`);
  }
};

const getTechIconComponent = (
  id: Technology,
): ((props: LucideProps) => ReactElement) => {
  switch (id) {
    case 'typescript':
      return Icons.TypescriptIcon;
    // case 'react':
    //   return Icons.ReactIcon;
    case 'node':
      return Icons.NodeIcon;
    // case 'next':
    //   return Icons.NextJsIcon;
    // case 'neovim':
    //   return Icons.NeovimIcon;
    default:
      throw new Error(`Ícone não encontrado para: ${id}`);
  }
};

export function getSocialLinks(): SocialLink[] {
  return LinksContent.socialLinks.map((link) => ({
    id: link.id as SocialPlatform,
    label: link.label,
    href: link.href as `https://${string}` | `mailto:${string}`,
    icon: getSocialIconComponent(link.id as SocialPlatform),
  }));
}

export function getTechnologies(): ToolBoxElement[] {
  return LinksContent.technologies.map((link) => ({
    id: link.id as Technology,
    label: link.label,
    href: link.href as `https://${string}`,
    icon: getTechIconComponent(link.id as Technology),
  }));
}

export function getNavigationLinks(): NavigationItem[] {
  return ConfigContent.navigationLinks as NavigationItem[];
}

export function getPageConfig(): PageConfig {
  return ConfigContent as PageConfig;
}

export function getToolbox(): ToolBox {
  return {
    ...SectionsContent.about.toolbox,
    technologies: getTechnologies(),
  };
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

export function getAboutSection(): AboutSection {
  return {
    ...SectionsContent.about,
    config: getPageConfig(),
    socialLinks: getSocialLinks(),
    toolbox: getToolbox(),
  } as AboutSection;
}
