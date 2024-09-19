import classNames from 'classnames'
import styles from './Button.module.scss'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import { ThemeButton } from './interface.ts'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string
  children?: ReactNode
  theme?: ThemeButton
}

export const Button = ({
  className,
  children,
  theme = ThemeButton.PRIMARY,
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
