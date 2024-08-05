import { AppLink } from 'shared/ui/AppLink/AppLink.tsx'
import { useTranslation } from 'react-i18next'
import { ReactNode } from 'react'
import styles from './Sidebar.module.scss'
import { LinkProps } from 'react-router-dom'

interface SidebarLinkProps extends LinkProps {
  translation: string
  icon: ReactNode
  isCollapsed: boolean
}

export const SidebarLink = ({
  translation,
  to,
  icon,
  isCollapsed,
}: SidebarLinkProps) => {
  const { t } = useTranslation()

  return (
    <AppLink to={to} className={styles.sidebarLink}>
      {icon}
      {!isCollapsed && t(translation)}
    </AppLink>
  )
}
