import type { Meta, StoryObj } from '@storybook/react'

import Profile from './Profile.tsx'
import { withStore } from '../../../../.storybook/preview.tsx'
import { mswLoader } from 'msw-storybook-addon'
import { delay, http, HttpResponse } from 'msw'

const API_URL = import.meta.env.VITE_CLIENT_API

const meta: Meta<typeof Profile> = {
  title: 'pages/Profile',
  component: Profile,
}

export default meta
type Story = StoryObj<typeof Profile>

const TestData = {
  firstName: 'Ivan',
  lastName: 'Ivanov',
  username: 'admin_ivan',
  age: 43,
  currency: 'RUB',
  city: 'Moscow',
}

export const Success: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${API_URL}/profile`, () => {
          return HttpResponse.json(TestData)
        }),
      ],
    },
  },
  decorators: [withStore],
  loaders: [mswLoader],
}

export const Error: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(`${API_URL}/profile`, async () => {
          await delay(800)
          return new HttpResponse(null, {
            status: 403,
          })
        }),
      ],
    },
  },
  decorators: [withStore],
  loaders: [mswLoader],
}
