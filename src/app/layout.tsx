import '@/styles/globals.css';

import { inter, poppins, robotoMono } from '@/lib/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoMono.variable} ${poppins.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
