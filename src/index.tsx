import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/app/providers/error-boundary'
import { StoreProvider } from '@/app/providers/store-provider'

import App from './app/App'
import { ThemeProvider } from './app/providers/theme-provider'

import '@/app/styles/index.scss'

const container = document.getElementById('root')

if (!container) {
  throw new Error('Container root not found. Failed to mount react app')
}

const root = createRoot(container)

root.render(
  <BrowserRouter>
    <StoreProvider>
        <ErrorBoundary>
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
