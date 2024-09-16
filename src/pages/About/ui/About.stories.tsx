import type { Meta, StoryObj } from '@storybook/react'

import About from './About.tsx'
import { withStore } from '../../../../.storybook/preview.tsx'

const meta: Meta<typeof About> = {
  title: 'pages/About',
  component: About,
}

export default meta
type Story = StoryObj<typeof About>

export const Default: Story = {
  args: {},
  decorators: [withStore],
}
