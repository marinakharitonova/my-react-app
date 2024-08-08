import { AppLink } from 'shared/ui/AppLink/AppLink.tsx'
import { useTranslation } from 'react-i18next'
import styles from '../Sidebar.module.scss'
import { SidebarItemType } from 'widgets/Sidebar/modal/constants.ts'

interface SidebarLinkProps {
  item: SidebarItemType
  isCollapsed: boolean
}

export const SidebarLink = ({ item, isCollapsed }: SidebarLinkProps) => {
  const { t } = useTranslation()

  return (
    <AppLink to={item.path} className={styles.sidebarLink}>
      <item.Icon
        width={24}
        height={24}
        fill={'var(--text-color-light)'}
        style={{ flexShrink: 0 }}
      />
      {!isCollapsed && t(item.text)}
    </AppLink>
  )
}
