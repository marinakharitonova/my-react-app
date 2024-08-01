import { useContext } from 'react'
import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from './ThemeContext.ts'
import { Theme } from 'shared/themes/interface.ts'

export const useTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  const changeTheme = () => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    if (setTheme) {
      setTheme(newTheme)
    }
  }

  return {
    theme,
    changeTheme,
  }
}
