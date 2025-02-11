// src/app/layout.tsx
import '@/styles/globals.css';
import { inter, poppins, robotoMono } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header'; // Importe o Header
import { Footer } from '@/components/layout/Footer'; // Importe o Footer (se necessário)
import { getPageConfig } from '@/lib/content-loader'; // Função para carregar o PageConfig

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
