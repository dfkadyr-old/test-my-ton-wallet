import cn from 'classnames'
import { memo } from 'react'

import cls from './page-loader.module.scss'

interface PageLoaderProps {
  className?: string
}

export const PageLoader = memo(({ className }: PageLoaderProps) => {
  return <div className={cn(cls.PageLoader, className)}>Add Spinner</div>
})
