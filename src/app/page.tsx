import { Header } from '@/components/layout/Header';
import { HeroSection } from '@/components/sections/Hero';
import { Button } from '@/components/ui/Button';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
      <Button variant="danger">Danger</Button>
    </>
  );
}
