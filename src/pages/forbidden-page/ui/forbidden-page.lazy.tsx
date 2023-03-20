import { lazy } from 'react'

export const ForbiddenPageLazy = lazy(
  async () => await import('./forbidden-page').then((module) => ({ default: module.ForbiddenPage }))
)
