import classNames from 'classnames'

import ThemeDark from 'shared/assets/icons/theme-dark.svg?react'
import ThemeLight from 'shared/assets/icons/theme-light.svg?react'
import { Button } from 'shared/ui/Button/Button.tsx'
import { useTheme } from 'shared/themes/useTheme.ts'
import { Theme } from 'shared/themes/interface.ts'

const themeIcons = {
  [Theme.DARK]: ThemeDark,
  [Theme.LIGHT]: ThemeLight,
}

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { changeTheme, theme } = useTheme()

  const SpecificIcon = themeIcons[theme ?? Theme.LIGHT]

  return (
    <Button
      onClick={changeTheme}
      className={classNames(className)}
      data-testid={'ThemeSwitcher'}
    >
      <SpecificIcon />
    </Button>
  )
}
