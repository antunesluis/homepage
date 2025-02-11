'use client';

import { Container } from '@/components/shared/Container';
import { SectionContainer } from '@/components/shared/SectionContainer';
import { Avatar } from '@/components/ui/Avatar';
import { SocialLinks } from '@/components/ui/navigation/SociaLinks';
import { HeroContent } from '@/components/layout/HeroContent';
import { HeroSection } from '@/types/content';
import { Base } from '@/templates/Base';
import { FadeIn } from '@/components/shared/Animate';
import { motion } from 'framer-motion';

export type HeroProps = {
  data: HeroSection;
};

export function Hero({ data }: HeroProps) {
  const { title, subtitle, content, avatarImage, socialLinks, config } = data;

  return (
    <Base {...config}>
      <SectionContainer className="flex items-center justify-center min-h-[calc(100vh-4rem)]">
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            {/* Conteúdo do Hero */}
            <div className="space-y-6 md:space-y-8 text-center md:text-left">
              <FadeIn>
                <HeroContent
                  title={title}
                  subtitle={subtitle}
                  content={content}
                />
              </FadeIn>

              <div className="pt-4 flex justify-center md:justify-start w-full">
                <FadeIn delay={0.2}>
                  <SocialLinks links={socialLinks} />
                </FadeIn>
              </div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              {/* Avatar */}
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.5 }}
              >
                <Avatar
                  src={avatarImage.url}
                  alt={avatarImage.alt}
                  className="relative w-48 h-48 md:w-64 md:h-64"
                />
              </motion.div>
            </div>
          </div>
        </Container>
      </SectionContainer>
    </Base>
  );
}
