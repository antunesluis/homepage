import { render, RenderResult } from '@testing-library/react';
import { ThemeProvider } from 'next-themes';

export const renderTheme = (children: React.ReactNode): RenderResult => {
  return render(
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      {children}
    </ThemeProvider>,
  );
};
