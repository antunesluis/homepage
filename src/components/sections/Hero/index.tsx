import { Typography } from '@/components/ui/Typography';

export function HeroSection() {
  return (
    <section className="py-20">
      <Typography.h1 weight="bold" font="poppins" className="mb-4">
        Olá, eu sou o Luis
      </Typography.h1>

      <Typography.lead className="mb-6">
        Desenvolvedor Frontend & UX Engineer
      </Typography.lead>

      <Typography.lead weight="semibold" className="text-2xl">
        Transformando ideias em experiências digitais
      </Typography.lead>

      <Typography.muted className="mt-4">
        Especializado em React, TypeScript e UX Design
      </Typography.muted>
    </section>
  );
}
