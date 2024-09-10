import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
  const { articleId } = useParams()

  return <ArticleDetails id={Number(articleId)} />
}

export default ArticleDetail
