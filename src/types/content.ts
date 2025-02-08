export type URLString = `https://${string}` | `mailto:${string}`;
export type DateString = `${number}-${number}-${number}`; // YYYY-MM-DD

export type SocialPlatform = 'github' | 'linkedin' | 'email';

export type Technology =
  | 'typescript'
  | 'react'
  | 'node'
  | 'javascript'
  | 'next'
  | 'neovim';

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  href: URLString;
};

export type ToolBoxElement = {
  id: Technology;
  label: string;
  href: URLString;
};

export type NavigationItem = {
  label: string;
  href: `/${string}`;
  external?: boolean;
};

export type PageConfig = {
  footerText: string;
  logoText: string;
  navigationLinks: NavigationItem[];
};

export type ImageData = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type ProjectCard = {
  title: string;
  introduction: string;
  technologies: Technology[];
  coverImage: ImageData;
  date: DateString;
  slug: string;
};

export type ProjectDetails = {
  description: string;
  githubUrl?: URLString;
  liveUrl?: URLString;
  images?: ImageData[];
} & ProjectCard;

export type ProjectSection = {
  config: PageConfig;
  title: string;
  subtitle: string;
  projects: ProjectDetails[];
};

export type HeroSection = {
  title: string;
  subtitle: string;
  content: string;
  resumeUrl: string;
  avatarImage: ImageData;
  socialLinks: SocialLink[];
  config: PageConfig;
};

export type TimeLine = {
  title: string;
  events: {
    date: DateString;
    text: string;
  }[];
};

export type ToolBox = {
  title: string;
  description: string;
  technologies: ToolBoxElement[];
};

export type WhoIAm = {
  title: string;
  apresentation: string;
};

export type AboutSection = {
  title: string;
  subtitle: string;
  avatarImage: ImageData;
  whoIAm: WhoIAm;
  toolbox: ToolBox;
  timeline: TimeLine;
  socialLinks: SocialLink[];
  config: PageConfig;
};
