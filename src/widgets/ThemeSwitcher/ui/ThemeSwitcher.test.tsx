import { render, RenderOptions, screen } from '@testing-library/react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { Theme } from 'shared/themes/interface.ts'
import { ThemeProvider } from 'shared/themes/ui/ThemeProvider.tsx'

interface ExtendedRenderOptions extends Omit<RenderOptions, 'queries'> {
  initialTheme?: Theme
}

const customRender = (
  ui: React.ReactElement,
  { initialTheme, ...renderOptions }: ExtendedRenderOptions
) => {
  return render(
    <ThemeProvider initialTheme={initialTheme}>{ui}</ThemeProvider>,
    renderOptions
  )
}

describe('ThemeSwitcher component', () => {
  it('should renders', () => {
    render(<ThemeSwitcher />)

    expect(screen.getByTestId('ThemeSwitcher')).toBeInTheDocument()
  })

  test('should change theme', async () => {
    const user = userEvent.setup()
    render(<ThemeSwitcher />)
    const button = screen.getByTestId('ThemeSwitcher')

    customRender(<ThemeSwitcher />, { initialTheme: Theme.DARK })

    await user.click(button)
  })
})
