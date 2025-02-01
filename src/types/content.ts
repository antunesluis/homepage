import type { LucideProps } from 'lucide-react';
import type { ReactElement } from 'react';

export type SocialPlatform = 'github' | 'linkedin' | 'email';

export type SocialLink = {
  id: SocialPlatform;
  label: string;
  href: `https://${string}` | `mailto:${string}`;
  icon: (props: LucideProps) => ReactElement;
};

export type HeroSection = {
  title: string;
  subtitle: string;
  content: string;
  resumeUrl: string;
  avatarUrl: string;
  avatarAlt: string;
  socialLinks: SocialLink[];
};

export type ProjectSection = {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  imageAlt: string;
  githubUrl?: `https://${string}`;
  liveUrl?: `https://${string}`;
  date: string; // Formato: YYYY-MM
};

export type AboutSection = {
  title: string;
  description: string;
  skills: string[];
};
