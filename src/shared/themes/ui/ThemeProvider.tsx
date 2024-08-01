import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ThemeContext.ts'
import { ReactNode, useMemo, useState } from 'react'
import { Theme } from 'shared/themes/interface.ts'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

export const ThemeProvider = ({ children }: { children?: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme)

  const contextValue = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  )

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}
