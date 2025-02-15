'use client';

import { useState } from 'react';
import { Heading, Paragraph } from '@/components/ui/Typography';
import type { ToolBox, Technology } from '@/types/content';
import {
  JavaIcon,
  NodeIcon,
  TypescriptIcon,
  GolangIcon,
  ReactIcon,
  HtmlIcon,
  CssIcon,
  PythonIcon,
  PostgresIcon,
  LinuxIcon,
  JavascriptIcon,
  NextIcon,
  NeovimIcon,
  CppIcon,
} from '@/config/icons';
import { cn } from '@/lib/utils';

const getTechIcon = (id: Technology) => {
  switch (id) {
    case 'typescript':
      return TypescriptIcon;
    case 'node':
      return NodeIcon;
    case 'java':
      return JavaIcon;
    case 'golang':
      return GolangIcon;
    case 'react':
      return ReactIcon;
    case 'html':
      return HtmlIcon;
    case 'css':
      return CssIcon;
    case 'python':
      return PythonIcon;
    case 'postgresql':
      return PostgresIcon;
    case 'linux':
      return LinuxIcon;
    case 'javascript':
      return JavascriptIcon;
    case 'next':
      return NextIcon;
    case 'neovim':
      return NeovimIcon;
    case 'cpp':
      return CppIcon;
    default:
      throw new Error(`Icon not found for: ${id}`);
  }
};

export type ToolBoxProps = {
  data: ToolBox;
};

export function Toolbox({ data }: ToolBoxProps) {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <div className="space-y-6">
      <Heading level="h2">{data.title}</Heading>
      <Paragraph variant="muted">{data.description}</Paragraph>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
        {data.technologies.map((tech) => {
          const Icon = getTechIcon(tech.id);

          return (
            <div
              key={tech.id}
              className="relative group flex flex-col items-center justify-center p-6 rounded-xl bg-surface border border-border hover:bg-surface-hover transition-colors cursor-pointer"
              onClick={() =>
                setActiveTech(activeTech === tech.id ? null : tech.id)
              }
              onBlur={() => setActiveTech(null)}
            >
              {/* Ícone */}
              <div className="w-16 h-16 flex items-center justify-center">
                <Icon className="w-full h-full text-primary" />
              </div>

              {/* Label */}
              <span
                className={cn(
                  'absolute inset-0 flex items-center justify-center',
                  'bg-surface/90 backdrop-blur-sm rounded-xl',
                  'opacity-0 group-hover:opacity-100 transition-opacity', // Hover desktop
                  'md:group-hover:scale-100', // Evita conflito com mobile
                  activeTech === tech.id ? 'opacity-100' : '', // Active mobile
                )}
              >
                <span className="text-sm font-medium text-foreground text-center px-2">
                  {tech.label}
                </span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
