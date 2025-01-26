import React from 'react';
import type { Preview } from '@storybook/react';
import { inter, poppins, robotoMono } from '../src/lib/fonts';
import '../src/styles/globals.css';

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
      values: [
        { name: 'light', value: '#f9fafb' },
        { name: 'dark', value: '#111827' },
      ],
    },
  },
  decorators: [
    (Story) => (
      <div
        className={`${inter.variable} ${robotoMono.variable} ${poppins.variable}`}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
