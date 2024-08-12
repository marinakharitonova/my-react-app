import classNames from 'classnames'
import styles from './Sidebar.module.scss'
import { useMemo, useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button.tsx'
import { ThemeButton } from 'shared/ui/Button/interface.ts'

import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink/SidebarLink.tsx'
import { sidebarItemsList } from 'widgets/Sidebar/modal/constants.ts'
import { useAppSelector } from 'app/providers/StoreProvider'
import { selectAuthUser } from 'entities/User'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const authUser = useAppSelector(selectAuthUser)
  const [isCollapsed, setIsCollapsed] = useState(false)

  const itemsList = useMemo(
    () =>
      sidebarItemsList
        .filter(item => (!authUser ? !item?.withAuth : item))
        .map(item => (
          <SidebarLink item={item} isCollapsed={isCollapsed} key={item.path} />
        )),
    [isCollapsed, authUser]
  )

  return (
    <div
      className={classNames(className, {
        [styles.Sidebar]: true,
        [styles['collapsed']]: isCollapsed,
      })}
      data-testid={'sidebar'}
    >
      <Button
        onClick={() => setIsCollapsed(prev => !prev)}
        theme={ThemeButton.FULFILLED}
        className={styles.toggler}
        data-testid={'sidebar-toggle'}
      >
        {isCollapsed ? '>' : '<'}
      </Button>

      <div className={styles.sidebarLinks}>{itemsList}</div>

      <div className={styles.buttons}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
