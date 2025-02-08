import '@/styles/globals.css';
import { inter, poppins, robotoMono } from '@/lib/fonts';
import { ThemeProvider } from 'next-themes';
import { AnimatePresence } from 'framer-motion';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
            {children}
          </ThemeProvider>
        </AnimatePresence>
      </body>
    </html>
  );
}
