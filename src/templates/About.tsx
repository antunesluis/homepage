import { SectionContainer } from '@/components/ui/SectionContainer';
import { AboutSection } from '@/types/content';
import { Base } from '@/templates/Base';
import { Paragraph, Heading } from '@/components/ui/Typography';
import { Container } from '@/components/ui/Container';
import { Toolbox } from '@/components/layout/Toolbox';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { Button } from '@/components/ui/Button';
import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';

export type AboutProps = {
  data: AboutSection;
};

export function About({ data }: AboutProps) {
  const { title, subtitle, whoIAm, config, toolbox, socialLinks } = data;

  return (
    <Base {...config}>
      <SectionContainer>
        <Container>
          {/* Header Section */}
          <div className="relative pb-8 mb-16 text-center">
            <Heading level="h1" className="mb-3">
              {title}
            </Heading>
            <Paragraph variant="muted">{subtitle}</Paragraph>
            {/* Linha separadora */}
            <div className="absolute bottom-0 left-1/2 w-1/3 h-px bg-border -translate-x-1/2" />
          </div>

          {/* About Content Section */}
          <div className="space-y-16">
            {/* Who I Am Section */}
            <div>
              <Heading level="h2" className="mb-6">
                {whoIAm.title}
              </Heading>
              <Paragraph className="leading-relaxed">
                {whoIAm.apresentation}
              </Paragraph>
            </div>

            {/* Toolbox Section */}
            <div>
              <Toolbox data={toolbox} />
            </div>

            {/* On the web Section */}
            <div>
              <Heading level="h2" className="mb-6">
                {'On the web'}
              </Heading>
              <SocialLinks links={socialLinks} showText />
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                href="/docs/resume.pdf"
                external
                rightIcon={<ArrowDownToLine />}
              >
                Download Resume
              </Button>
              <Button
                variant="secondary"
                size="lg"
                href="https://github.com/antunesluis/portfolio"
                external
                rightIcon={<ArrowUpRight />}
              >
                View Source Code
              </Button>
            </div>
          </div>
        </Container>
      </SectionContainer>
    </Base>
  );
}

export default About;
