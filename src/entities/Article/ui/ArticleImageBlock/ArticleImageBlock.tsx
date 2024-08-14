import cls from './ArticleImageBlock.module.scss'

import classNames from 'classnames'
import { IArticleImageBlock } from 'entities/Article/model/types/interface.ts'

export interface ArticleImageBlockComponentProps {
  className?: string
  block: IArticleImageBlock
}

export const ArticleImageBlock = ({
  className,
  block,
}: ArticleImageBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleImageBlockComponent, className)}>
      <img src={block.src} alt={block.title} className={cls.img} />
      {block.title && <h3>{block.title}</h3>}
    </div>
  )
}
