import classNames from 'classnames'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ThemeButton
}

export const Button = ({
  className,
  children,
  theme = ThemeButton.CLEAR,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.Button, className, styles[theme])}
      {...rest}
    >
      {children}
    </button>
  )
}
