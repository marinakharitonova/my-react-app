import type { Preview } from '@storybook/react'

import '../src/app/styles/index.scss'
import i18n from '../src/shared/config/i18n'
import { MemoryRouter } from 'react-router'
import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Theme } from '../src/shared/themes/interface'

const withI18next = (Story) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
const withRouter = (Story) => {
  return (
    <MemoryRouter initialEntries={['/']}>
      <Story />
    </MemoryRouter>
  )
}

const withTheme = (Story, { parameters }) => {
  return (
    <div className={`app ${parameters.theme}`}><Story /></div>
  )
}

const preview: Preview = {
  parameters: {
    theme: Theme.LIGHT,
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: 'hsla(0, 0%, 94%, 1)',
        },
        {
          name: 'dark',
          value: 'hsla(210, 4%, 10%, 1)',
        },
      ],
    },
  },
  decorators: [
    withRouter,
    withTheme,
    withI18next,
  ],
}


export default preview
