import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle } from '.'

const meta: Meta<typeof ThemeToggle> = {
  title: 'UI/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered'
  },
  tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof ThemeToggle>

export const Default: Story = {
  args: {
    children: 'ThemeToggle Component'
  }
}

