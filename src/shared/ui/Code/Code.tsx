import { useCallback } from 'react'
import { Button } from 'shared/ui/Button/Button'
import CopyIcon from 'shared/assets/icons/copy.svg?react'
import cls from './Code.module.scss'
import classNames from 'classnames'

interface CodeProps {
  className?: string
  text: string
}

export const Code = ({ className, text }: CodeProps) => {
  const onCopy = useCallback(() => {
    navigator.clipboard.writeText(text)
  }, [text])

  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button onClick={onCopy} className={cls.copyBtn}>
        <CopyIcon className={cls.copyIcon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}
