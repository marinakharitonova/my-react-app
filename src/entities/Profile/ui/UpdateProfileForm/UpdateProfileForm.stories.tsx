import type { Meta, StoryObj } from '@storybook/react'

import { UpdateProfileForm } from './UpdateProfileForm.tsx'
import { fn } from '@storybook/test'
import { withStore } from '../../../../../.storybook/preview.tsx'

const meta: Meta<typeof UpdateProfileForm> = {
  title: 'entities/UpdateProfileForm',
  component: UpdateProfileForm,
}

export default meta
type Story = StoryObj<typeof UpdateProfileForm>

export const Default: Story = {
  args: {
    onCancel: fn(),
  },
  decorators: [withStore],
}
