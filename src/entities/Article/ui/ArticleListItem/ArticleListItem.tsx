import { useTranslation } from 'react-i18next'
import EyeIcon from 'shared/assets/icons/eye.svg?react'
import cls from './ArticleListItem.module.scss'
import { IArticle, IArticleTextBlock } from '../../model/types/interface.ts'
import classNames from 'classnames'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock.tsx'
import { memo } from 'react'
import { AppLink } from 'shared/ui/AppLink'
import { Card } from 'shared/ui/Card'
import { ArticleBlockType } from '../../model/consts/constants.ts'

interface ArticleListItemProps {
  className?: string
  article: IArticle
}

export const ArticleListItem = memo(
  ({ className, article }: ArticleListItemProps) => {
    const { t } = useTranslation(['articles'])

    const textBlock = article.blocks.find(
      block => block.type === ArticleBlockType.TEXT
    ) as IArticleTextBlock

    return (
      <div
        className={classNames(cls.ArticleListItem, className)}
        data-testid={'ArticleListItem'}
      >
        <Card className={cls.card}>
          <div className={cls.header}>
            <p className={cls.username}>{article.user.username}</p>
            <p className={cls.date}>{article.createdAt}</p>
          </div>
          <h3 className={cls.title}>{article.title}</h3>
          <p className={cls.types}>{article.type.join(', ')}</p>
          <img src={article.img} className={cls.img} alt={article.title} />
          {textBlock && (
            <ArticleTextBlock block={textBlock} className={cls.textBlock} />
          )}
          <div className={cls.footer}>
            <AppLink to={`${article.id}`}>
              {`${t('read_more', { ns: 'articles' })}...`}
            </AppLink>

            <p className={cls.views}>{article.views}</p>
            <EyeIcon />
          </div>
        </Card>
      </div>
    )
  }
)

ArticleListItem.displayName = 'MemoizedArticleListItem'
