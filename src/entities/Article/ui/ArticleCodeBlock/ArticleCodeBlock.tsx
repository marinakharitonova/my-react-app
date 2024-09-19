import cls from './ArticleCodeBlock.module.scss'

import classNames from 'classnames'
import { IArticleCodeBlock } from '../../model/types/interface.ts'
import { Code } from 'shared/ui/Code'

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
