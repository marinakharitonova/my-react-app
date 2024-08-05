import classNames from 'classnames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button.tsx'
import { ThemeButton } from 'shared/ui/Button/interface.ts'
import AboutIcon from 'shared/assets/icons/about.svg?react'
import MainIcon from 'shared/assets/icons/main.svg?react'
import { SidebarLink } from 'widgets/Sidebar/ui/SidebarLink.tsx'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false)

  return (
    <div
      className={classNames({
        // @ts-ignore
        [className]: true,
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

      <div className={styles.sidebarLinks}>
        <SidebarLink
          translation={'main'}
          to={'/'}
          icon={
            <MainIcon
              width={24}
              height={24}
              fill={'var(--text-color-light)'}
              style={{ flexShrink: 0 }}
            />
          }
          isCollapsed={isCollapsed}
        />

        <SidebarLink
          translation={'about'}
          to={'about'}
          icon={
            <AboutIcon
              width={24}
              height={24}
              fill={'var(--text-color-light)'}
              style={{ flexShrink: 0 }}
            />
          }
          isCollapsed={isCollapsed}
        />
      </div>

      <div className={styles.buttons}>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
