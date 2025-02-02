import { Header } from '@/components/layout/Header';
import { Hero } from '@/components/sections/Hero';
import { Footer } from '@/components/ui/Footer';
import {
  getConfigData,
  getHeroContent,
  getNavigationLinks,
} from '@/lib/content-loader';

export default function Home() {
  const heroContent = getHeroContent();
  const navigationLinks = getNavigationLinks();
  const { logoText, footerText } = getConfigData();

  return (
    <>
      <Header links={navigationLinks} logoText={logoText} />
      <Hero data={heroContent} />
      <Footer text={footerText} />
    </>
  );
}

// import { ProjectCard } from '@/components/ui/ProjectCard';
//
// export default function Home() {
//   return (
//     <>
//       <ProjectCard />
//     </>
//   );
// }
