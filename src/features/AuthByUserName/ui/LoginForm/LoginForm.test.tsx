import { renderWithProviders } from 'shared/lib/tests/test-utils.tsx'
import { screen, waitFor } from '@testing-library/react'

import { setupServer } from 'msw/node'
import { http } from 'msw'
import { API_URL } from '../../../../constants.ts'
import LoginForm from 'features/AuthByUserName/ui/LoginForm/LoginForm.tsx'

const mockCallback = jest.fn()

const server = setupServer(
  // @ts-ignore
  http.post(`${API_URL}/login`, (req, res, ctx) => {
    return res(ctx.status(200), ctx.delay(70))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('LoginForm component', () => {
  it('should renders', () => {
    renderWithProviders(<LoginForm onSuccess={mockCallback} />)

    expect(screen.getByTestId('LoginForm.Login')).toBeInTheDocument()
    expect(screen.getByTestId('LoginForm.Password')).toBeInTheDocument()
    expect(screen.getByTestId('LoginForm.SubmitButton')).toBeInTheDocument()
  })

  test('should validate fields', async () => {
    const { user } = renderWithProviders(<LoginForm onSuccess={mockCallback} />)

    await user.clear(screen.getByTestId('LoginForm.Login'))
    await user.clear(screen.getByTestId('LoginForm.Password'))

    await user.click(screen.getByTestId('LoginForm.SubmitButton'))

    expect(screen.getByTestId('LoginForm.Login.ErrorText')).toBeInTheDocument()
    expect(
      screen.getByTestId('LoginForm.Password.ErrorText')
    ).toBeInTheDocument()
  })

  test('should login', async () => {
    const { user } = renderWithProviders(<LoginForm onSuccess={mockCallback} />)

    await user.type(screen.getByTestId('LoginForm.Login'), 'login')
    await user.type(screen.getByTestId('LoginForm.Password'), 'password')

    await user.click(screen.getByTestId('LoginForm.SubmitButton'))

    await waitFor(() => {
      expect(mockCallback).toHaveBeenCalledTimes(1)
    })
  })
})
