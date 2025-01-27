import React from 'react';
import type { Preview } from '@storybook/react';
import { inter, poppins, robotoMono } from '../src/lib/fonts';
import '../src/styles/globals.css';
import { ThemeProvider } from 'next-themes';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'light',
      list: [
        { name: 'light', class: 'light', color: '#fafafa' },
        { name: 'dark', class: 'dark', color: '#09090b' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
      >
        <div
          className={`${inter.variable} ${robotoMono.variable} ${poppins.variable}`}
        >
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default preview;
