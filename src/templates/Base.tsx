import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import type { PageConfig } from '@/types/content';

type BaseProps = {
  children: React.ReactNode;
} & PageConfig;

export function Base({
  children,
  navigationLinks,
  logoText,
  footerText,
}: BaseProps) {
  return (
    <>
      <Header links={navigationLinks} logoText={logoText} />
      <main>{children}</main>
      <Footer text={footerText} />
    </>
  );
}
