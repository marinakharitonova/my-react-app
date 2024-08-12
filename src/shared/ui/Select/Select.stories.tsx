import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select.tsx'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  args: {
    name: 'currency',
  },
}
