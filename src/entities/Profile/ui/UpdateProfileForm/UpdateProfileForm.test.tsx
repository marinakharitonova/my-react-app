import { renderWithProviders } from 'shared/lib/tests/test-utils.tsx'
import { screen, waitFor } from '@testing-library/react'
import { UpdateProfileForm } from 'entities/Profile'
import { UpdateProfileFormInputs } from 'entities/Profile/model/types/interface.ts'
import { setupServer } from 'msw/node'
import { http } from 'msw'
import { API_URL } from '../../../../constants.ts'

const mockCallback = jest.fn()

const defaultValues: UpdateProfileFormInputs = {
  firstName: 'Name',
  lastName: 'LastName',
  username: 'UserName',
  age: 20,
  currency: 'RUB',
  city: 'Moscow',
}

const server = setupServer(
  // @ts-ignore
  http.put(`${API_URL}/profile`, (req, res, ctx) => {
    return res(ctx.json(defaultValues), ctx.delay(10))
  })
)
beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe('UpdateProfileForm component', () => {
  it('should renders', () => {
    renderWithProviders(
      <UpdateProfileForm
        defaultValues={defaultValues}
        onCancel={mockCallback}
      />
    )

    expect(screen.getByDisplayValue('Name')).toBeInTheDocument()
    expect(screen.getByDisplayValue('LastName')).toBeInTheDocument()
    expect(screen.getByDisplayValue('UserName')).toBeInTheDocument()
    expect(screen.getByDisplayValue('20')).toBeInTheDocument()
    expect(screen.getByDisplayValue('RUB')).toBeInTheDocument()
    expect(screen.getByDisplayValue('Moscow')).toBeInTheDocument()
  })

  test('should cancel editing', async () => {
    const { user } = renderWithProviders(
      <UpdateProfileForm
        defaultValues={defaultValues}
        onCancel={mockCallback}
      />
    )
    await user.click(screen.getByTestId('UpdateProfileForm.CancelButton'))
    expect(mockCallback).toHaveBeenCalled()
  })

  test('should validate fields', async () => {
    const { user } = renderWithProviders(
      <UpdateProfileForm
        defaultValues={defaultValues}
        onCancel={mockCallback}
      />
    )

    await user.clear(screen.getByTestId('UpdateProfileForm.FirstName'))
    await user.clear(screen.getByTestId('UpdateProfileForm.LastName'))
    await user.clear(screen.getByTestId('UpdateProfileForm.City'))
    await user.clear(screen.getByTestId('UpdateProfileForm.Username'))
    await user.type(screen.getByTestId('UpdateProfileForm.Age'), '200')

    await user.click(screen.getByTestId('UpdateProfileForm.SubmitButton'))

    expect(
      screen.getByTestId('UpdateProfileForm.FirstName.ErrorText')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('UpdateProfileForm.LastName.ErrorText')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('UpdateProfileForm.City.ErrorText')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('UpdateProfileForm.Username.ErrorText')
    ).toBeInTheDocument()
    expect(
      screen.getByTestId('UpdateProfileForm.Age.ErrorText')
    ).toBeInTheDocument()
  })

  test("should update user's data", async () => {
    const { user } = renderWithProviders(
      <UpdateProfileForm
        defaultValues={defaultValues}
        onCancel={mockCallback}
      />
    )
    await user.click(screen.getByTestId('UpdateProfileForm.SubmitButton'))

    await waitFor(() => {
      expect(
        screen.getByTestId('UpdateProfileForm.SubmitButton')
      ).toBeDisabled()
    })
  })
})
