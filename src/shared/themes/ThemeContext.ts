import { createContext } from 'react'
import { Theme } from 'shared/themes/interface.ts'

export interface ThemeContextProps {
  theme?: Theme
  setTheme?: (t: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({})

export const LOCAL_STORAGE_THEME_KEY = 'theme'
