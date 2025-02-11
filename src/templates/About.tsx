import { ArrowUpRight, ArrowDownToLine } from 'lucide-react';
import { Paragraph, Heading } from '@/components/ui/Typography';
import { SocialLinks } from '@/components/ui/navigation/SociaLinks';
import { Button } from '@/components/ui/Button';
import { Container } from '@/components/shared/Container';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { SectionHeader } from '@/components/layout/SectionHeader';
import { Toolbox } from '@/components/layout/Toolbox';
import { AboutSection } from '@/types/content';

export type AboutProps = {
  data: AboutSection;
};

export function About({ data }: AboutProps) {
  const { title, subtitle, whoIAm, toolbox, socialLinks } = data;

  return (
    <SectionContainer>
      <Container>
        <SectionHeader title={title} subtitle={subtitle} />

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
  );
}

export default About;
