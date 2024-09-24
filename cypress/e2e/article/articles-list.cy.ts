import { selectByTestId } from '../../helpers/selectByTestId'

describe('Articles list page', () => {
  beforeEach(() => {
    cy.login().then(() => {
      cy.visit('articles')
    })
  })
  it('loaded successfully', () => {
    cy.get(selectByTestId('Articles')).should('exist')
    cy.get(selectByTestId('ArticleListItem')).should(
      'have.length.greaterThan',
      3
    )
  })
})
