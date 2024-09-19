import type { Meta, StoryObj } from '@storybook/react'

import { AppLink } from './AppLink.tsx'
import { ThemeAppLink } from './interface.ts'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    theme: ThemeAppLink.PRIMARY,
    children: 'Primary link',
    to: '/',
  },
}
