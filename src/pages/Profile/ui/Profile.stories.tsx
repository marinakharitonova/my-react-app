import type { Meta, StoryObj } from '@storybook/react'

import Profile from './Profile.tsx'

const meta: Meta<typeof Profile> = {
  title: 'pages/Profile',
  component: Profile,
}

export default meta
type Story = StoryObj<typeof Profile>

export const Default: Story = {
  args: {},
}
