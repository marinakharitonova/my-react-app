import type { Meta, StoryObj } from '@storybook/react'

import { LoginForm } from './LoginForm.tsx'
import { withStore } from '../../../../../.storybook/preview.tsx'

const meta: Meta<typeof LoginForm> = {
  title: 'features/LoginForm',
  component: LoginForm,
}

export default meta
type Story = StoryObj<typeof LoginForm>

export const Default: Story = {
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
