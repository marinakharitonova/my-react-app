import type { Preview } from '@storybook/react'

import '../src/app/styles/index.scss'
import i18n from '../src/shared/config/i18n'
import { MemoryRouter } from 'react-router'
import { Suspense } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Theme } from 'shared/themes/interface.ts'
import { ThemeProvider } from 'shared/themes/ui/ThemeProvider.tsx'
import { StoreProvider } from 'app/providers/StoreProvider'
import { Route, Routes } from 'react-router-dom'

const withI18next = (Story: any) => {
  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <I18nextProvider i18n={i18n}>
        <Story />
      </I18nextProvider>
    </Suspense>
  )
}
const withRouter = (Story: any, { parameters }: any) => {

  return (
    <MemoryRouter initialEntries={[parameters.initialEntries ?? '/']}>
      <Routes>
        <Route path={parameters.path ?? '/*'} element={<Story />} />
      </Routes>
    </MemoryRouter>
  )
}
const withTheme = (Story: any, { parameters }: any) => {
  return (
    <ThemeProvider initialTheme={parameters.theme}>
      <Story />
    </ThemeProvider>
  )
}
export const withStore = (Story: any, { parameters }: any) => {
  return <StoreProvider preloadedState={parameters.preloadedState}><Story /></StoreProvider>
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
