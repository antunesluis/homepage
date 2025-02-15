import { getAboutSection } from '@/lib/data-loader';
import { About } from '@/templates/About';

export default function Home() {
  const data = getAboutSection();

  return <About data={data} />;
}
