import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Avatar } from '@/components/ui/Avatar';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { HeroContent } from '@/components/layout/HeroContent';
import { HeroSection } from '@/types/content';
import { Base } from '@/templates/Base';

export type HeroProps = {
  data: HeroSection;
};

export function Hero({ data }: HeroProps) {
  const { title, subtitle, content, avatarImage, socialLinks, config } = data;

  return (
    <Base {...config}>
      <SectionContainer className="min-h-[calc(100vh-5rem)] items-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />
        <Container className="relative">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-12 items-center">
            <div className="space-y-8">
              <HeroContent
                title={title}
                subtitle={subtitle}
                content={content}
              />
              <div className="pt-4">
                <SocialLinks links={socialLinks} />
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-20 dark:opacity-40" />
              <Avatar
                src={avatarImage.url}
                alt={avatarImage.alt}
                className="relative"
              />
            </div>
          </div>
        </Container>
      </SectionContainer>
    </Base>
  );
}
