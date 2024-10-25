import type { Meta, StoryObj } from '@storybook/react'

import { LanguageSwitcher } from './LanguageSwitcher.tsx'

const meta: Meta<typeof LanguageSwitcher> = {
  title: 'widgets/LanguageSwitcher',
  component: LanguageSwitcher,
}

export default meta
type Story = StoryObj<typeof LanguageSwitcher>

export const Default: Story = {
  args: {},
}
