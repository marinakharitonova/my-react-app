import React, { PropsWithChildren } from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18nForTests.ts'

export interface Opts {
  route?: string
}

export const renderWithProviders = (
  ui: React.ReactElement,
  opts: Opts = {}
) => {
  const { route = '/' } = opts

  function Wrapper({ children }: PropsWithChildren): JSX.Element {
    return (
      <MemoryRouter initialEntries={[route]}>
        <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
      </MemoryRouter>
    )
  }

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper }),
  }
}
