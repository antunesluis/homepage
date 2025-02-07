import Link from 'next/link';
import { Paragraph } from '@/components/ui/Typography';
import type { ToolBoxElement } from '@/types/content';

export type ToolboxItemProps = {
  technology: ToolBoxElement;
};

export function ToolboxItem({ technology }: ToolboxItemProps) {
  // const Icon = technology.icon;

  return (
    <Link
      href={technology.href}
      target="_blank"
      rel="noopener"
      className="flex items-center gap-2 p-3 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
    >
      {/* <Icon className="w-5 h-5 text-primary" /> */}

      <Paragraph className="font-medium text-sm">{technology.label}</Paragraph>
    </Link>
  );
}
