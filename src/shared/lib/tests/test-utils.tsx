import React, { PropsWithChildren } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18nForTests.ts'
import { RootState, StoreProvider } from 'app/providers/StoreProvider'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  route?: string
  preloadedState?: Partial<RootState>
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    route = '/',
    ...renderOptions
  }: ExtendedRenderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <StoreProvider preloadedState={preloadedState}>
        <MemoryRouter initialEntries={[route]}>
          <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
        </MemoryRouter>
      </StoreProvider>
    )
  }

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
