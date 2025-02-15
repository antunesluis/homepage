import { getUsesSection } from '@/lib/data-loader';
import { Uses } from '@/templates/Uses';

export default function Home() {
  const data = getUsesSection();

  return <Uses data={data} />;
}
