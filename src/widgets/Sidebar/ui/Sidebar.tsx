import classNames from 'classnames'
import styles from './Sidebar.module.scss'
import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LanguageSwitcher } from 'widgets/LanguageSwitcher'

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
    >
      <button onClick={() => setIsCollapsed(prev => !prev)}>toggle</button>

      <div>
        <ThemeSwitcher />
        <LanguageSwitcher />
      </div>
    </div>
  )
}
