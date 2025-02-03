import { getAboutSection } from '@/lib/content-loader';
import { About } from '@/templates/About';

export default function Home() {
  const data = getAboutSection();

  return <About data={data} />;
}
