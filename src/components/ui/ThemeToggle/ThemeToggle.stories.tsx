import type { Meta, StoryObj } from '@storybook/react';
import { ThemeToggle } from '.';
import { ThemeProvider } from 'next-themes';

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <ThemeProvider>
        <div className="p-4">
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ThemeToggle>;

export const Default: Story = {};

export const InDarkMode: Story = {
  parameters: {
    themes: {
      default: 'dark',
    },
  },
};

export const InContext: Story = {
  render: () => (
    <div className="flex items-center gap-4 p-8 rounded-lg bg-background">
      <span className="text-sm text-foreground">Alterar tema</span>
      <ThemeToggle />
    </div>
  ),
};
