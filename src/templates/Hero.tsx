'use client';

import { motion } from 'framer-motion';
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
        <Container className="relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-[1fr,auto] gap-8 lg:gap-12 items-center">
            {/* Hero Content */}
            <motion.div
              className="space-y-6 md:space-y-8 text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <HeroContent
                title={title}
                subtitle={subtitle}
                content={content}
              />
              <motion.div
                className="pt-4 flex justify-center md:justify-start w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <SocialLinks links={socialLinks} />
              </motion.div>
            </motion.div>

            {/* Avatar */}
            <motion.div
              className="flex justify-center md:justify-end order-first md:order-last"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <Avatar
                src={avatarImage.url}
                alt={avatarImage.alt}
                className="relative w-48 h-48 md:w-64 md:h-64"
              />
            </motion.div>
          </div>
        </Container>
      </SectionContainer>
    </Base>
  );
}
