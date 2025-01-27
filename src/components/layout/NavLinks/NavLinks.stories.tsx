import type { Meta, StoryObj } from '@storybook/react';
import { NavLinks } from '.';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof NavLinks> = {
  title: 'Layout/NavLinks',
  component: NavLinks,
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-8 bg-background">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof NavLinks>;

export const Default: Story = {};

export const DarkMode: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
};
