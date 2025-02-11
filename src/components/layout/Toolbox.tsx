'use client';

import { useState } from 'react';
import { Heading, Paragraph } from '@/components/ui/Typography';
import type { ToolBox, Technology } from '@/types/content';
import { NodeIcon, TypescriptIcon } from '@/config/icons';
import { cn } from '@/lib/utils';

const getTechIcon = (id: Technology) => {
  switch (id) {
    case 'typescript':
      return TypescriptIcon;
    case 'node':
      return NodeIcon;
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
    <div className="space-y-4">
      <Heading level="h2">{data.title}</Heading>
      <Paragraph variant="muted">{data.description}</Paragraph>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        {data.technologies.map((tech) => {
          const Icon = getTechIcon(tech.id);

          return (
            <div
              key={tech.id}
              className="relative group flex items-center justify-center p-4 sm:p-6 md:p-8 rounded-xl bg-surface border border-border dark:bg-surface hover:bg-surface-hover transition-colors cursor-pointer"
              onClick={() =>
                setActiveTech(activeTech === tech.id ? null : tech.id)
              }
              onBlur={() => setActiveTech(null)}
            >
              {/* Ícon */}
              <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary transition-opacity duration-200" />

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
