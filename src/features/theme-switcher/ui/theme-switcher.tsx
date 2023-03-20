import { memo } from 'react'

import { Theme } from '@/shared/const/theme'
import { useTheme } from '@/shared/lib/hooks/use-theme'

export const ThemeSwitcher = memo((): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return <button onClick={toggleTheme}>{theme === Theme.LIGHT ? <span>light</span> : <span>dark</span>}</button>
})
