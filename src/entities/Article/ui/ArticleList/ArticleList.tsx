import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import { IArticle } from 'entities/Article'
import classNames from 'classnames'

interface ArticleListProps {
  className?: string
  articles: IArticle[]
}

export const ArticleList = ({ className, articles }: ArticleListProps) => {
  return (
    <div className={classNames(cls.ArticleList, className)}>
      {articles.length > 0
        ? articles.map(item => (
            <ArticleListItem
              article={item}
              className={cls.card}
              key={item.id}
            />
          ))
        : null}
    </div>
  )
}
