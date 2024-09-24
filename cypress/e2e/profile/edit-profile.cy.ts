import { selectByTestId } from '../../helpers/selectByTestId'

describe('Profile page', () => {
  beforeEach(() => {
    cy.visit('')
    cy.login()
    cy.visit(`profile`)
  })
  afterEach(() => {
    cy.resetProfile()
  })
  it('loaded successfully', () => {
    cy.get(selectByTestId('ProfileCard.FirstName')).should(
      'to.contain',
      'user20'
    )
    cy.get(selectByTestId('ProfileCard.LastName')).should(
      'to.contain',
      'user20'
    )
    cy.get(selectByTestId('ProfileCard.Age')).should('to.contain', 20)
    cy.get(selectByTestId('ProfileCard.City')).should('to.contain', 'Moscow')
    cy.get(selectByTestId('ProfileCard.Username')).should(
      'to.contain',
      'eqeqeqe'
    )
    cy.get(selectByTestId('ProfileCard.Currency')).should('to.contain', 'RUB')
  })
  it('edit user', () => {
    const newName = 'newName'
    const newLastname = 'newLastname'
    cy.updateProfile(newName, newLastname)
    cy.get(selectByTestId('ProfileCard.FirstName')).should(
      'to.contain',
      newName
    )
    cy.get(selectByTestId('ProfileCard.LastName')).should(
      'to.contain',
      newLastname
    )
  })
})
