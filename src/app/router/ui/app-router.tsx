import { memo, Suspense, useCallback } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AppRoutesProps } from '@/shared/types/router'
import { PageLoader } from '@/widgets/page-loader'

import { routeConfig } from '../config/route-config'

export const AppRouter = memo(() => {
  const renderWithWrapper = useCallback((route: AppRoutesProps) => {
    const element = <Suspense fallback={<PageLoader />}>{route.element}</Suspense>
    return <Route key={route.path} path={route.path} element={element} />
  }, [])

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
})
