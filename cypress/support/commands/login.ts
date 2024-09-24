import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USER,
} from '../../../src/entities/User/model/constants'

export const login = (
  username = Cypress.env('auth0_username'),
  password = Cypress.env('auth0_password')
) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:8000/login',
    body: {
      username,
      password,
    },
  }).then(({ body }) => {
    window.localStorage.setItem(LOCAL_STORAGE_USER, JSON.stringify(body))
    window.localStorage.setItem(LOCAL_STORAGE_TOKEN, 'token')
  })
}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      login(email?: string, password?: string): Chainable<void>
    }
  }
}
