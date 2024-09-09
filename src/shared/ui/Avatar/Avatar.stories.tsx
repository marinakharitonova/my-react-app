import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar.tsx'

const meta: Meta<typeof Avatar> = {
  title: 'shared/Avatar',
  component: Avatar,
}

export default meta
type Story = StoryObj<typeof Avatar>

export const Default: Story = {
  args: {
    src: 'https://media.istockphoto.com/id/1443562748/ru/%D1%84%D0%BE%D1%82%D0%BE/%D0%BC%D0%B8%D0%BB%D0%B0%D1%8F-%D1%80%D1%8B%D0%B6%D0%B0%D1%8F-%D0%BA%D0%BE%D1%88%D0%BA%D0%B0.jpg?s=612x612&w=0&k=20&c=k8RwP4usK_LCpQ1bPn3fNDLk3vtfptH7CEcEMZw_K1A=',
  },
}
