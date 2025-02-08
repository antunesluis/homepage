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

export function getSocialLinks(): SocialLink[] {
  return LinksContent.socialLinks.map((link) => ({
    id: link.id as SocialPlatform,
    label: link.label,
    href: link.href as `https://${string}` | `mailto:${string}`,
  }));
}

export function getTechnologies(): ToolBoxElement[] {
  return LinksContent.technologies.map((link) => ({
    id: link.id as Technology,
    label: link.label,
    href: link.href as `https://${string}`,
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
