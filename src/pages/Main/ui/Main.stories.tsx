import type { Meta, StoryObj } from '@storybook/react'

import Main from './Main.tsx'

const meta: Meta<typeof Main> = {
  title: 'pages/Main',
  component: Main,
}

export default meta
type Story = StoryObj<typeof Main>

export const Default: Story = {
  args: {},
}