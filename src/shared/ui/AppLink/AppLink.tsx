import classNames from 'classnames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'
import { ThemeAppLink } from './interface.ts'

interface AppLinkProps extends LinkProps {
  className?: string
  children?: ReactNode
  theme?: ThemeAppLink
}

export const AppLink = ({
  className,
  children,
  theme,
  ...rest
}: AppLinkProps) => {
  return (
    <Link
      // @ts-ignore
      className={classNames(className, styles.AppLink, styles?.[theme])}
      {...rest}
    >
      {children}
    </Link>
  )
}
