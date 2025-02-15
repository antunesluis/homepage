import { TypeAnimation } from 'react-type-animation';
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
      <div className="text-lg sm:text-xl text-muted">
        <TypeAnimation
          sequence={[500, subtitle, 1000, () => {}]}
          cursor={true}
          speed={45}
          className="font-body text-lg sm:text-xl text-muted block"
          style={{
            display: 'inline-block',
            whiteSpace: 'pre-line',
          }}
          deletionSpeed={65}
          repeat={Infinity}
        />
      </div>
      <Paragraph className="text-base sm:text-lg">{content}</Paragraph>
    </div>
  );
}
