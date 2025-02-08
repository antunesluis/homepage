import { Heading, Paragraph } from '@/components/ui/Typography';

type HeroContentProps = {
  title: string;
  subtitle: string;
  content: string;
};

export function HeroContent({ title, subtitle, content }: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-4 sm:space-y-6">
      <Heading level="h1" gradient>
        {title}
      </Heading>
      <Paragraph variant="muted" className="text-lg sm:text-xl">
        {subtitle}
      </Paragraph>
      <Paragraph className="text-base sm:text-lg"> {content}</Paragraph>
    </div>
  );
}
