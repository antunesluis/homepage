import { SectionContainer } from '@/components/ui/SectionContainer';
import { AboutSection } from '@/types/content';
import { Base } from '@/templates/Base';
import { Paragraph } from '@/components/ui/Typography';

export type AboutProps = {
  data: AboutSection;
};

export function About({ data }: AboutProps) {
  const { title, config } = data;

  return (
    <Base {...config}>
      <SectionContainer className="items-center">
        <Paragraph>{title}</Paragraph>
      </SectionContainer>
    </Base>
  );
}
