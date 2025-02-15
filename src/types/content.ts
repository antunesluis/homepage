export type URLString = `https://${string}` | `mailto:${string}`;
export type DateString = `${number}-${number}-${number}`; // YYYY-MM-DD

export type SocialPlatform = 'github' | 'linkedin' | 'email' | 'instagram';

export type Technology =
  | 'typescript'
  | 'react'
  | 'node'
  | 'javascript'
  | 'next'
  | 'neovim'
  | 'html'
  | 'css'
  | 'python'
  | 'postgresql'
  | 'linux'
  | 'java'
  | 'golang'
  | 'cpp';

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
  whoIAm: WhoIAm;
  toolbox: ToolBox;
  timeline: TimeLine;
  socialLinks: SocialLink[];
};

export type UsesItem = {
  iconUrl: string;
  title: string;
  subtitle: string;
  href?: string;
  description?: string;
};

export type UsesCategory = {
  title: string;
  description?: string;
  items: UsesItem[];
};

export type UsesSection = {
  title: string;
  subtitle: string;
  categories: UsesCategory[];
};
