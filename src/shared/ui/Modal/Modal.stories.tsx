import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'

import { Modal } from './Modal.tsx'

const meta: Meta<typeof Modal> = {
  title: 'shared/Modal',
  component: Modal,
}

export default meta
type Story = StoryObj<typeof Modal>

export const Default: Story = {
  args: {
    isOpen: true,
    children: 'Modal window text',
    onClose: fn(),
  },
}
