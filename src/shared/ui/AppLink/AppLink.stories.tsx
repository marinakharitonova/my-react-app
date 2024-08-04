import type { Meta, StoryObj } from '@storybook/react'

import { AppLink, AppLinkTheme } from './AppLink.tsx'

const meta: Meta<typeof AppLink> = {
  title: 'shared/AppLink',
  component: AppLink,
}

export default meta
type Story = StoryObj<typeof AppLink>

export const Primary: Story = {
  args: {
    theme: AppLinkTheme.PRIMARY,
    children: 'Primary link',
    to: '/',
  },
}
