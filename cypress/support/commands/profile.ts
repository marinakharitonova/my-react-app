import { selectByTestId } from '../../helpers/selectByTestId'

export const updateProfile = (firstname: string, lastname: string) => {
  cy.get(selectByTestId('ProfilePage.EditButton')).click()
  cy.get(selectByTestId('UpdateProfileForm.FirstName')).clear().type(firstname)
  cy.get(selectByTestId('UpdateProfileForm.LastName')).clear().type(lastname)
  cy.get(selectByTestId('UpdateProfileForm.SubmitButton')).click()
}

export const resetProfile = () => {
  return cy.request({
    method: 'PUT',
    url: `http://localhost:8000/profile`,
    headers: { Authorization: 'token' },
    body: {
      firstName: 'user20',
      lastName: 'user20',
      age: 20,
      currency: 'RUB',
      country: 'Belarus',
      city: 'Moscow',
      username: 'eqeqeqe',
    },
  })
}

declare global {
  namespace Cypress {
    interface Chainable {
      updateProfile(firstname: string, lastname: string): Chainable<void>
      resetProfile(): Chainable<void>
    }
  }
}
