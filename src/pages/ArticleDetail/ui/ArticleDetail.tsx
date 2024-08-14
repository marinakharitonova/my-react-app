import { ArticleDetails } from 'entities/Article'
import { useParams } from 'react-router-dom'

const ArticleDetail = () => {
  const { articleId } = useParams()

  return (
    <div>
      <ArticleDetails id={Number(articleId)} />
    </div>
  )
}

export default ArticleDetail
