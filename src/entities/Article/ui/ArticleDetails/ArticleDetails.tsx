import EyeIcon from 'shared/assets/icons/eye.svg?react'
import CalendarIcon from 'shared/assets/icons/calendar.svg?react'
import { ArticleCodeBlock } from '../ArticleCodeBlock/ArticleCodeBlock.tsx'
import { ArticleImageBlock } from '../ArticleImageBlock/ArticleImageBlock.tsx'
import { ArticleTextBlock } from '../ArticleTextBlock/ArticleTextBlock.tsx'
import cls from './ArticleDetails.module.scss'
import { ArticleBlockType } from '../../model/consts/constants.ts'
import { useGetArticleByIdQuery } from '../../api'
import classNames from 'classnames'
import { PageWrapper } from 'widgets/PageWrapper'
import { Avatar } from 'shared/ui/Avatar'
import { ContentLoader } from 'shared/ui/ContentLoader'

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
        <PageWrapper>
          <div
            className={classNames(cls.ArticleDetails, className)}
            data-testid={'ArticleDetails'}
          >
            <div className={cls.avatarWrapper}>
              <Avatar
                size={200}
                src={data.img}
                className={cls.avatar}
                dataTestId={'ArticleDetails.Avatar'}
              />
            </div>
            <h2 className={cls.title} data-testid={'ArticleDetails.Title'}>
              {data.title}
            </h2>
            <h3 data-testid={'ArticleDetails.Subtitle'}>{data.subtitle}</h3>
            <div className={cls.articleInfo}>
              <EyeIcon className={cls.icon} />
              <p data-testid={'ArticleDetails.Views'}>{data.views}</p>
            </div>
            <div className={cls.articleInfo}>
              <CalendarIcon className={cls.icon} />
              <p data-testid={'ArticleDetails.CreatedAt'}>{data.createdAt}</p>
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
        </PageWrapper>
      )}
    </ContentLoader>
  )
}
