import type { Meta, StoryObj } from '@storybook/react'

import { Button, ThemeButton } from './Button'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Click',
  },
}

export const Bordered: Story = {
  args: {
    theme: ThemeButton.BORDERED,
    children: 'Click',
  },
}
