import cls from './ArticleTextBlock.module.scss'
import { IArticleTextBlock } from '../../model/types/interface.ts'
import classNames from 'classnames'

export interface ArticleTextBlockComponentProps {
  className?: string
  block: IArticleTextBlock
}

export const ArticleTextBlock = ({
  className,
  block,
}: ArticleTextBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleTextBlockComponent, className)}>
      {block.title && <h3 className={cls.title}>{block.title}</h3>}
      {block.paragraphs.map((paragraph, index) => (
        <p className={cls.paragraph} key={index}>
          {paragraph}
        </p>
      ))}
    </div>
  )
}
