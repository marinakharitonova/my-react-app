import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input.tsx'
import { useForm } from 'react-hook-form'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  decorators: [
    Story => {
      const { register } = useForm()

      return (
        <>
          {Story({
            args: {
              name: 'login',
              register,
              autofocus: true,
              label: 'Your name:',
            },
          })}
        </>
      )
    },
  ],
}

export const WithError: Story = {
  decorators: [
    Story => {
      const { register } = useForm()

      return (
        <>
          {Story({
            args: {
              name: 'login',
              register,
              label: 'Your name:',
              error: 'Обязательное поле!',
            },
          })}
        </>
      )
    },
  ],
}
