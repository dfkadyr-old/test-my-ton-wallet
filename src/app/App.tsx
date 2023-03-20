import { Suspense } from 'react'

import { AppRouter } from './router'

const App = (): JSX.Element => {
  return (
    <div className="app">
      <Suspense fallback="">
        <div className="content-page">
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
}

export default App
