import { createContext } from 'react'

import { Theme } from '@/shared/const/theme'

export interface IThemeContext {
  theme?: Theme
  setTheme?: (theme: Theme) => void
}

export const ThemeContext = createContext<IThemeContext>({})
