import { lazy } from 'react'

export const HomePageLazy = lazy(
  async () => await import('./home-page').then((module) => ({ default: module.HomePage }))
)
