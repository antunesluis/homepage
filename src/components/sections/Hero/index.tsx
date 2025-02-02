import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { Avatar } from '@/components/ui/Avatar';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { HeroContent } from '@/components/layout/HeroContent';
import { HeroSection } from '@/types/content';

export type HeroProps = {
  data: HeroSection;
};

export function Hero({ data }: HeroProps) {
  const { title, subtitle, content, avatarImage, socialLinks } = data;

  return (
    <SectionContainer className="items-center">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,auto] gap-10 items-center">
          <HeroContent title={title} subtitle={subtitle} content={content} />
          <Avatar src={avatarImage.url} alt={avatarImage.alt} />
        </div>

        <div className="flex gap-4 mt-4 items-center">
          <SocialLinks links={socialLinks} />
        </div>
      </Container>
    </SectionContainer>
  );
}
