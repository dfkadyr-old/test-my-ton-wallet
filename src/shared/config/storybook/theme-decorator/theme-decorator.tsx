import { Story } from '@storybook/react'

// eslint-disable-next-line dfkadyr-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme-provider'
import { Theme } from '@/shared/const/theme'

export const ThemeDecorator = (theme: Theme) => (StoryComponent: Story) =>
  (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    </ThemeProvider>
  )
