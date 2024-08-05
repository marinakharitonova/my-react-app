import type { Meta, StoryObj } from '@storybook/react'

import { Button } from './Button'
import { ThemeButton } from './interface.ts'

const meta: Meta<typeof Button> = {
  title: 'shared/Button',
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    theme: ThemeButton.PRIMARY,
    children: 'Click',
  },
}

export const Fulfilled: Story = {
  args: {
    theme: ThemeButton.FULFILLED,
    children: 'Click',
  },
}
