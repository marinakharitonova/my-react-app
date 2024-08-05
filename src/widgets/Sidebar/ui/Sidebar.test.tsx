import { screen } from '@testing-library/react'
import { renderWithProviders } from 'shared/lib/tests/test-utils.tsx'
import { Sidebar } from 'widgets/Sidebar'

describe('Sidebar component', () => {
  it('should renders', () => {
    renderWithProviders(<Sidebar />)

    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  test('should toggles', async () => {
    const { user } = renderWithProviders(<Sidebar />)
    const toggleBtn = screen.getByTestId('sidebar-toggle')
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()

    await user.click(toggleBtn)
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  })
})
