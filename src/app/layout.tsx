import '@/styles/globals.css';
import { inter, poppins, robotoMono } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getPageConfig } from '@/lib/data-loader';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { navigationLinks, logoText, footerText } = getPageConfig();

  return (
    <html
      suppressHydrationWarning
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${poppins.variable}`}
    >
      <body>
        <AnimatePresence mode="wait">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header links={navigationLinks} logoText={logoText} />
            {children}
            <Footer text={footerText} />
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
