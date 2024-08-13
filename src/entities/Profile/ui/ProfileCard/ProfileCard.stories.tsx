import type { Meta, StoryObj } from '@storybook/react'

import { ProfileCard } from './ProfileCard.tsx'

const meta: Meta<typeof ProfileCard> = {
  title: 'entities/ProfileCard',
  component: ProfileCard,
}

export default meta
type Story = StoryObj<typeof ProfileCard>

export const Default: Story = {
  args: {
    data: {
      firstName: 'Ivan',
      lastName: 'Ivanov',
      age: 30,
      username: 'ivan',
      city: 'Moscow',
      currency: 'RUB',
      avatar: '',
    },
  },
}
