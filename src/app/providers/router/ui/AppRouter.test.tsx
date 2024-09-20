import { renderWithProviders } from 'shared/lib/tests/test-utils.tsx'
import { AppRouter } from './AppRouter.tsx'
import { AppRoutes } from 'shared/consts/interface.ts'
import { screen } from '@testing-library/react'

describe('AppRouter component', () => {
  test('should renders', async () => {
    renderWithProviders(<AppRouter />, {
      route: `/${AppRoutes.ABOUT}`,
    })

    const page = await screen.findByTestId('AboutPage')
    expect(page).toBeInTheDocument()
  })

  test('should shows page not found', async () => {
    renderWithProviders(<AppRouter />, {
      route: '/asfasfasfasf',
    })

    const page = await screen.findByTestId('NotFoundPage')
    expect(page).toBeInTheDocument()
  })

  test('should redirects unauthorized user to main page', async () => {
    renderWithProviders(<AppRouter />, {
      route: `/${AppRoutes.PROFILE}`,
    })

    const page = await screen.findByTestId('MainPage')
    expect(page).toBeInTheDocument()
  })

  test('should grant access to authorized user', async () => {
    renderWithProviders(<AppRouter />, {
      route: `/${AppRoutes.PROFILE}`,
      preloadedState: {
        auth: {
          user: {
            id: 1,
            username: 'User1',
          },
          token: 'token',
        },
      },
    })

    const page = await screen.findByTestId('ProfilePage')
    expect(page).toBeInTheDocument()
  })
})
