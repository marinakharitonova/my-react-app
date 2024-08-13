import type { Meta, StoryObj } from '@storybook/react'

import { Sidebar } from './Sidebar.tsx'
import { withStore } from '../../../../.storybook/preview.tsx'

const meta: Meta<typeof Sidebar> = {
  title: 'widgets/Sidebar',
  component: Sidebar,
}

export default meta
type Story = StoryObj<typeof Sidebar>

export const Unauthenticated: Story = {
  parameters: {
    preloadedState: {
      auth: {
        user: {
          id: 1,
          username: 'User1',
        },
      },
    },
  },
  args: {},
  decorators: [withStore],
}

export const Authenticated: Story = {
  args: {},
  decorators: [withStore],
}
