import cn from 'classnames'

import cls from './page-error.module.scss'

interface PageErrorProps {
  className?: string
}

export const PageError = ({ className }: PageErrorProps) => {
  const reloadPage = () => {
    location.reload()
  }

  return (
    <div className={cn(cls.PageError, className)}>
      <p>Something went wrong</p>
      <button onClick={reloadPage}>Refresh page</button>
    </div>
  )
}
