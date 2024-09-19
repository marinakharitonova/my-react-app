import { ArticleListItem } from '../ArticleListItem/ArticleListItem'
import cls from './ArticleList.module.scss'
import classNames from 'classnames'
import { IArticle } from '../../model/types/interface.ts'
import { memo } from 'react'

interface ArticleListProps {
  className?: string
  articles: IArticle[]
}

export const ArticleList = memo(({ className, articles }: ArticleListProps) => {
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
})

ArticleList.displayName = 'MemoizedArticleList'
