import { ReducersMapObject } from '@reduxjs/toolkit'
import { render } from '@testing-library/react'
import { ReactNode } from 'react'
import { MemoryRouter } from 'react-router-dom'

import { StateSchema, StoreProvider } from '@/app/providers/store-provider'
// eslint-disable-next-line dfkadyr-plugin/layer-imports
import { ThemeProvider } from '@/app/providers/theme-provider'
import { Theme } from '@/shared/const/theme'
// eslint-disable-next-line dfkadyr-plugin/layer-imports
import '@/app/styles/index.scss'

export interface componentRenderOptions {
  route?: string
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  theme?: Theme
}

interface TestProviderProps {
  children: ReactNode
  options?: componentRenderOptions
}

export function TestProvider(props: TestProviderProps) {
  const { children, options = {} } = props
  const { route = '/', initialState, asyncReducers, theme = Theme.DARK } = options

  return (
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider asyncReducers={asyncReducers} initialState={initialState}>
        <ThemeProvider initialTheme={theme}>
          <div className={`app ${theme}`}>{children}</div>
        </ThemeProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}

export function componentRender(component: ReactNode, options: componentRenderOptions = {}) {
  return render(<TestProvider options={options}>{component}</TestProvider>)
}
