import type { Meta, StoryObj } from '@storybook/react'

import { AppCrash } from './AppCrash.tsx'

const meta: Meta<typeof AppCrash> = {
  title: 'widgets/AppCrash',
  component: AppCrash,
}

export default meta
type Story = StoryObj<typeof AppCrash>

export const Default: Story = {
  args: {},
}
