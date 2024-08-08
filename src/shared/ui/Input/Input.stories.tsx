import type { Meta, StoryObj } from '@storybook/react'

import { Input } from './Input.tsx'
import { useForm } from 'react-hook-form'
import { LoginFormInputs } from 'features/AuthByUserName/model/types/interface.ts'

const meta: Meta<typeof Input> = {
  title: 'shared/Input',
  component: Input,
}

export default meta
type Story = StoryObj<typeof Input>

export const Default: Story = {
  decorators: [
    Story => {
      const { register } = useForm<LoginFormInputs>()
      return <Story register={register} />
    },
  ],
  args: {
    name: 'name',
    label: 'Your name:',
    autofocus: true,
  },
}
