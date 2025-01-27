import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '.';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof Header> = {
  title: 'Layout/Header',
  component: Header,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <Story />
      </ThemeProvider>
    ),
  ],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof Header>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
};
