import type { Meta, StoryObj } from '@storybook/react'

import { Card } from './Card.tsx'

const meta: Meta<typeof Card> = {
  title: 'shared/Card',
  component: Card,
}

export default meta
type Story = StoryObj<typeof Card>

export const Default: Story = {
  args: {
    children: (
      <div>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Hello world</p>
      </div>
    ),
  },
}
