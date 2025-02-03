import { Heading, Paragraph } from '@/components/ui/Typography';

type HeroContentProps = {
  title: string;
  subtitle: string;
  content: string;
};

export function HeroContent({ title, subtitle, content }: HeroContentProps) {
  return (
    <div className="flex flex-col space-y-6">
      <Heading level="h1" gradient>
        {title}
      </Heading>
      <Paragraph variant="muted">{subtitle}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </div>
  );
}
