import classNames from 'classnames'
import styles from './ThemeSwitcher.module.scss'

import ThemeIcon from 'shared/assets/icons/theme_switcher.svg?react'
import { Button } from 'shared/ui/Button/Button.tsx'
import { useTheme } from 'shared/themes/useTheme.ts'

interface ThemeSwitcherProps {
  clasName?: string
}

export const ThemeSwitcher = ({ clasName }: ThemeSwitcherProps) => {
  const { changeTheme } = useTheme()

  return (
    <Button
      onClick={changeTheme}
      className={classNames(clasName, styles.ThemeSwitcher)}
    >
      <ThemeIcon /> 123
    </Button>
  )
}
