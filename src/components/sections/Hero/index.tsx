import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { getHeroContent } from '@/lib/content-loader';
import Image from 'next/image';

export function Hero() {
  const { title, subtitle, content, avatarUrl, avatarAlt, socialLinks } =
    getHeroContent();

  return (
    <SectionContainer className="min-h-[calc(100vh-4rem)] flex items-center">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,auto] gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {title}
            </h1>
            <p className="text-md text-muted-foreground">{subtitle}</p>
            <p className="text-lg">{content}</p>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 relative flex justify-center md:justify-end">
              <Image
                src={avatarUrl}
                alt={avatarAlt}
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="flex gap-4 mt-4 items-center">
          {socialLinks.map((link) => (
            <a
              key={link.id}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-2 rounded-lg transition-all duration-300"
            >
              <div className="absolute inset-0 rounded-lg bg-gray-400/0 backdrop-blur-sm transition-all duration-300 group-hover:bg-gray-400/10" />
              <link.icon className="w-6 h-6 relative z-10 transition-transform duration-300 group-hover:scale-110" />
            </a>
          ))}
        </div>
      </Container>
    </SectionContainer>
  );
}
