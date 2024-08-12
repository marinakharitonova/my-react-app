import type { Meta, StoryObj } from '@storybook/react'

import { ContentLoader } from './ContentLoader.tsx'
import i18n from 'i18next'

const meta: Meta<typeof ContentLoader> = {
  title: 'shared/ContentLoader',
  component: ContentLoader,
}

export default meta
type Story = StoryObj<typeof ContentLoader>

export const Default: Story = {
  args: {
    isLoading: false,
    isError: false,
    children: <p>{i18n.t('profile')}</p>,
  },
}

export const WithError: Story = {
  args: {
    isLoading: false,
    isError: true,
    children: <p>{i18n.t('profile')}</p>,
  },
}

export const Loading: Story = {
  args: {
    isLoading: true,
    isError: false,
    children: <p>{i18n.t('profile')}</p>,
  },
}
