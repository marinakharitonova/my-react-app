import {
  LOCAL_STORAGE_TOKEN,
  LOCAL_STORAGE_USER,
} from '../../../src/entities/User/model/constants.ts'

export const login = (username: string, password: string) => {
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

    cy.visit('/')
  })
}
