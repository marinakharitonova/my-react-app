import type { Meta, StoryObj } from '@storybook/react'

import { Navbar } from './Navbar.tsx'
import { withStore } from '../../../../.storybook/preview.tsx'

const meta: Meta<typeof Navbar> = {
  title: 'widgets/Navbar',
  component: Navbar,
}

export default meta
type Story = StoryObj<typeof Navbar>

export const Authenticated: Story = {
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

export const Unauthenticated: Story = {
  parameters: {
    preloadedState: {
      auth: {
        user: null,
      },
    },
  },
  args: {},
  decorators: [withStore],
}
