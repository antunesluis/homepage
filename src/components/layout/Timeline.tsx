import { Heading, Paragraph } from '@/components/ui/Typography';
import type { TimeLine } from '@/types/content';

export function Timeline({ data }: { data: TimeLine }) {
  return (
    <div className="space-y-6">
      <Heading level="h2">{data.title}</Heading>

      <div className="space-y-6">
        {data.events.map((event, index) => (
          <div className="relative pl-6" key={event.text}>
            {/* Linha vertical (centralizada no ponto) */}
            {index !== data.events.length - 1 && (
              <div
                className="absolute left-[5.5px] top-4 h-[calc(100%-16px)] w-px bg-border"
                style={{ transform: 'translateX(-50%)' }}
              />
            )}

            {/* Ponto (centralizado com a linha) */}
            <div className="absolute left-0 top-1 h-3 w-3 rounded-full bg-primary" />

            {/* Conteúdo */}
            <div className="space-y-1">
              <time className="text-sm font-medium text-muted-foreground">
                {event.date}
              </time>
              <Paragraph className="font-medium">{event.text}</Paragraph>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
