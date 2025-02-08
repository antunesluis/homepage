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
      <SectionContainer className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        {/* Gradiente de fundo */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10" />

        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            {/* Conteúdo do Hero */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <HeroContent
                title={title}
                subtitle={subtitle}
                content={content}
              />

              <div className="pt-4 flex justify-center md:justify-start w-full">
                <SocialLinks links={socialLinks} />
              </div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              {/* Efeito de gradiente */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 to-secondary/30 blur-2xl opacity-20 dark:opacity-40 rounded-full" />

              {/* Avatar */}
              <Avatar
                src={avatarImage.url}
                alt={avatarImage.alt}
                className="relative w-48 h-48 md:w-64 md:h-64"
              />
            </div>
          </div>
        </Container>
      </SectionContainer>
    </Base>
  );
}
