import { selectByTestId } from '../../helpers/selectByTestId'

let currentArticleId = null
describe('Article detail page', () => {
  beforeEach(() => {
    cy.login()
    cy.createArticle().then(article => {
      currentArticleId = article.id
      cy.visit(`articles/${article.id}`)
    })
  })
  afterEach(() => {
    cy.removeArticle(currentArticleId)
  })
  it('loaded successfully', () => {
    cy.get(selectByTestId('ArticleDetails')).should('exist')
    cy.get(selectByTestId('ArticleDetails.Title')).should(
      'to.contain',
      'TESTING ARTICLE'
    )
    cy.get(selectByTestId('ArticleDetails.Subtitle')).should(
      'to.contain',
      'БиологиЯ'
    )
    cy.get(selectByTestId('ArticleDetails.Views')).should('to.contain', '1022')
    cy.get(selectByTestId('ArticleDetails.CreatedAt')).should(
      'to.contain',
      '26.02.2022'
    )
    cy.get(selectByTestId('ArticleDetails.Avatar')).should(
      'have.attr',
      'src',
      'https://avatars.mds.yandex.net/get-zen_doc/2746556/pub_5f50dd7e1a1ddf4776aa5569_5f50decd2506f211d1de6284/scale_1200'
    )
  })
})
