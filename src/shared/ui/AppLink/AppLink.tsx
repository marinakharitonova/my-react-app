import classNames from 'classnames'
import styles from './AppLink.module.scss'
import { Link, LinkProps } from 'react-router-dom'
import { ReactNode } from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
  clasName?: string
  children?: ReactNode
  theme?: AppLinkTheme
}

export const AppLink = ({
  clasName,
  children,
  theme = AppLinkTheme.PRIMARY,
  ...rest
}: AppLinkProps) => {
  return (
    <Link
      className={classNames(clasName, styles.AppLink, styles[theme])}
      {...rest}
    >
      {children}
    </Link>
  )
}
