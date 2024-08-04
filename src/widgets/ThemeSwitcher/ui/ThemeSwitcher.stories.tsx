import type { Meta, StoryObj } from '@storybook/react'

import { ThemeSwitcher } from './ThemeSwitcher.tsx'

const meta: Meta<typeof ThemeSwitcher> = {
  title: 'widgets/ThemeSwitcher',
  component: ThemeSwitcher,
}

export default meta
type Story = StoryObj<typeof ThemeSwitcher>

export const Default: Story = {
  args: {},
}
