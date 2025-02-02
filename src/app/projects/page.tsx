import { Header } from '@/components/layout/Header';
import Projects from '@/components/sections/Projects';
import { Footer } from '@/components/ui/Footer';
import {
  getConfigData,
  getNavigationLinks,
  getProjects,
} from '@/lib/content-loader';

export default function ProjectsPage() {
  const projectSectionData = getProjects();
  const navigationLinks = getNavigationLinks();
  const { logoText, footerText } = getConfigData();

  return (
    <>
      <Header links={navigationLinks} logoText={logoText} />
      <Projects data={projectSectionData} />
      <Footer text={footerText} />
    </>
  );
}
