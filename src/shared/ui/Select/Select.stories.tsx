import type { Meta, StoryObj } from '@storybook/react'

import { Select } from './Select.tsx'
import { useForm } from 'react-hook-form'
import { CURRENCY_SELECT_OPTIONS } from 'entities/Currency'

const meta: Meta<typeof Select> = {
  title: 'shared/Select',
  component: Select,
}

export default meta
type Story = StoryObj<typeof Select>

export const Default: Story = {
  decorators: [
    Story => {
      const { register } = useForm()

      return (
        <>
          {Story({
            args: {
              name: 'currency',
              register,
              label: 'Select currency:',
              options: CURRENCY_SELECT_OPTIONS,
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
              name: 'currency',
              register,
              label: 'Select currency:',
              error: 'Обязательное поле!',
              options: CURRENCY_SELECT_OPTIONS,
            },
          })}
        </>
      )
    },
  ],
}
