import { Button } from '@/components/ui/Button';
import { Container } from '@/components/ui/Container';
import { SectionContainer } from '@/components/ui/SectionContainer';
import { socialLinks } from '@/config/social-links';
import Image from 'next/image';

export function Hero() {
  return (
    <SectionContainer className="min-h-[calc(100vh-4rem)] flex items-center">
      <Container>
        <div className="w-full grid grid-cols-1 md:grid-cols-[1fr,auto] gap-10 items-center">
          <div className="flex flex-col space-y-6">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tight">
                <span className="text-foreground">
                  Hey, I'm Luis Antunes! 👋
                </span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>

            <div className="flex gap-4 mt-4">
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

            <div className="flex flex-wrap gap-4">
              <Button size="lg">Resume Download</Button>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 ring-4 ring-background">
              <Image
                src="/images/avatar.jpg"
                alt="Developer"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </SectionContainer>
  );
}
