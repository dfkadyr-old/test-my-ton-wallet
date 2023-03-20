import cn from 'classnames'
import { memo, ReactNode } from 'react'

import { TestProps } from '@/shared/types/tests'

import cls from './page.module.scss'

interface PageProps extends TestProps {
  className?: string
  children: ReactNode
}

export const Page = memo((props: PageProps) => {
  const { className, children, dataTestId } = props

  return (
    <main className={cn(cls.page, {}, [className])} data-testid={dataTestId ?? 'Page'}>
      {children}
    </main>
  )
})
