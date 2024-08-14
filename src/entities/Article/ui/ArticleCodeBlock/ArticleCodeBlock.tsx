import { Code } from 'shared/ui/Code/Code'
import cls from './ArticleCodeBlock.module.scss'

import classNames from 'classnames'
import { IArticleCodeBlock } from 'entities/Article/model/types/interface.ts'

export interface ArticleCodeBlockComponentProps {
  className?: string
  block: IArticleCodeBlock
}

export const ArticleCodeBlock = ({
  className,
  block,
}: ArticleCodeBlockComponentProps) => {
  return (
    <div className={classNames(cls.ArticleCodeBlockComponent, className)}>
      <Code text={block.code} />
    </div>
  )
}
