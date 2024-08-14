import EyeIcon from 'shared/assets/icons/eye.svg?react'
import CalendarIcon from 'shared/assets/icons/calendar.svg?react'
import { ArticleCodeBlock } from 'entities/Article/ui/ArticleCodeBlock/ArticleCodeBlock.tsx'
import { ArticleImageBlock } from 'entities/Article/ui/ArticleImageBlock/ArticleImageBlock.tsx'
import { ArticleTextBlock } from 'entities/Article/ui/ArticleTextBlock/ArticleTextBlock.tsx'
import cls from './ArticleDetails.module.scss'
import { ArticleBlockType } from '../../model/types/interface.ts'
import { ContentLoader } from 'shared/ui/ContentLoader/ContentLoader.tsx'
import { useGetArticleByIdQuery } from 'entities/Article/api'
import classNames from 'classnames'
import { Avatar } from 'shared/ui/Avatar/Avatar.tsx'

interface ArticleDetailsProps {
  className?: string
  id: number
}

const components: Record<ArticleBlockType, any> = {
  [ArticleBlockType.CODE]: ArticleCodeBlock,
  [ArticleBlockType.IMAGE]: ArticleImageBlock,
  [ArticleBlockType.TEXT]: ArticleTextBlock,
}

export const ArticleDetails = ({ className, id }: ArticleDetailsProps) => {
  const { data, isFetching, isError } = useGetArticleByIdQuery({
    id,
  })

  return (
    <ContentLoader isError={isError} isLoading={isFetching}>
      {data && (
        <div className={classNames(cls.ArticleDetails, className)}>
          <div className={cls.avatarWrapper}>
            <Avatar size={200} src={data.img} className={cls.avatar} />
          </div>
          <h2 className={cls.title}>{data.title}</h2>
          <h3>{data.subtitle}</h3>
          <div className={cls.articleInfo}>
            <EyeIcon className={cls.icon} />
            <p>{data.views}</p>
          </div>
          <div className={cls.articleInfo}>
            <CalendarIcon className={cls.icon} />
            <p>{data.createdAt}</p>
          </div>
          {data.blocks.map(item => {
            const SpecificComponent = components?.[item.type]

            if (!SpecificComponent) return null

            return (
              <SpecificComponent
                key={item.id}
                block={item}
                className={cls.block}
              />
            )
          })}
        </div>
      )}
    </ContentLoader>
  )
}
