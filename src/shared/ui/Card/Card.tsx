import classNames from 'classnames'
import { HTMLAttributes, ReactNode } from 'react'
import cls from './Card.module.scss'

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  children: ReactNode
}

export const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={classNames(cls.Card, className)} {...rest}>
      {children}
    </div>
  )
}
