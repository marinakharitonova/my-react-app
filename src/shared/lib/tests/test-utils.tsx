import React, { PropsWithChildren, ReactNode } from 'react'
import { render, RenderOptions } from '@testing-library/react'
import { MemoryRouter } from 'react-router'
import userEvent from '@testing-library/user-event'
import { I18nextProvider } from 'react-i18next'
import i18nForTests from 'shared/config/i18nForTests.ts'
import { RootState, StoreProvider } from 'app/providers/StoreProvider'
import { Theme } from 'shared/themes/interface.ts'
import { ThemeProvider } from 'shared/themes/ui/ThemeProvider.tsx'
import '../../../app/styles/index.scss'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {}

export interface TestProviderOptions {
  route?: string
  preloadedState?: Partial<RootState>
  theme?: Theme
}

export const TestProvider = ({
  children,
  options = {},
}: {
  children: ReactNode
  options?: TestProviderOptions
}) => {
  const { preloadedState = {}, route = '/', theme = Theme.LIGHT } = options

  return (
    <StoreProvider preloadedState={preloadedState}>
      <MemoryRouter initialEntries={[route]}>
        <ThemeProvider initialTheme={theme}>
          <I18nextProvider i18n={i18nForTests}>{children}</I18nextProvider>
        </ThemeProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}

export function renderWithProviders(
  ui: React.ReactElement,
  {
    preloadedState = {},
    route = '/',
    theme = Theme.LIGHT,
    ...renderOptions
  }: ExtendedRenderOptions & TestProviderOptions = {}
) {
  function Wrapper({ children }: PropsWithChildren<{}>): JSX.Element {
    return (
      <TestProvider options={{ preloadedState, route, theme }}>
        {children}
      </TestProvider>
    )
  }

  return {
    user: userEvent.setup(),
    ...render(ui, { wrapper: Wrapper, ...renderOptions }),
  }
}
