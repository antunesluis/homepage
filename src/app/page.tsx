import { getHeroContent } from '@/lib/data-loader';
import { Hero } from '@/templates/Hero';

export default function Home() {
  const data = getHeroContent();

  return <Hero data={data} />;
}
