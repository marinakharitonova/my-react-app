import { LOCAL_STORAGE_THEME_KEY, ThemeContext } from '../ThemeContext.ts'
import { ReactNode, useEffect, useMemo, useState } from 'react'
import { Theme } from 'shared/themes/interface.ts'

const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
  children?: ReactNode
}

export const ThemeProvider = ({
  children,
  initialTheme,
}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  useEffect(() => {
    document.body.className = theme
  }, [])

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
