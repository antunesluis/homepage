import type { Meta, StoryObj } from '@storybook/react';
import { Test } from '.';

const meta: Meta<typeof Test> = {
  title: 'UI/Test',
  component: Test,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Test>;

export const Default: Story = {
  args: {
    children: 'Test Component',
  },
};
