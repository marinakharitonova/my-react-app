import { selectByTestId } from '../../helpers/selectByTestId'

describe('Routing', () => {
  describe('unauthorized user', () => {
    it('main page', () => {
      cy.visit('/')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('redirect to main page from profile', () => {
      cy.visit('/profile')
      cy.get(selectByTestId('MainPage')).should('exist')
    })

    it('not found page', () => {
      cy.visit('/adadadafa')
      cy.get(selectByTestId('NotFoundPage')).should('exist')
    })
  })

  describe('authorized user', () => {
    beforeEach(() => {
      cy.login(Cypress.env('auth0_username'), Cypress.env('auth0_password'))
    })

    it('profile page', () => {
      cy.visit('/profile')
      cy.get(selectByTestId('ProfilePage')).should('exist')
    })

    it('articles list page', () => {
      cy.visit('/articles')
      cy.get(selectByTestId('Articles')).should('exist')
    })
  })
})
