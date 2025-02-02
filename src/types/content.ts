import type { LucideProps } from 'lucide-react';
import type { ReactElement } from 'react';

export type SocialPlatform = 'github' | 'linkedin' | 'email';

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  href: `https://${string}` | `mailto:${string}`;
  icon: (props: LucideProps) => ReactElement;
};

export type NavigationItem = {
  label: string;
  href: `/${string}`;
};

export type ImageData = {
  url: string;
  alt: string;
  width?: number;
  height?: number;
};

export type HeroSection = {
  title: string;
  subtitle: string;
  content: string;
  resumeUrl: string;
  avatarImage: ImageData;
  socialLinks: SocialLink[];
};

export type ProjectCard = {
  title: string;
  introduction: string;
  technologies: string[];
  coverImage: ImageData;
  date: `${number}-${number}-${number}`; // Formato: YYYY-MM-DD
  slug: string;
};

export type ProjectDetails = {
  description: string;
  githubUrl?: `https://${string}`;
  liveUrl?: `https://${string}`;
  images?: ImageData[];
} & ProjectCard;

export type ProjectSection = {
  title: string;
  projects: ProjectDetails[];
};

export type AboutSection = {
  title: string;
  description: string;
  skills: string[];
};

export type ConfigData = {
  footerText: string;
  logoText: string;
};
