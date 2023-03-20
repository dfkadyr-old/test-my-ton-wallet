import cn from 'classnames'
import { memo } from 'react'

import cls from './overlay.module.scss'
import { OverlayProps } from './overlay.types'

export const Overlay = memo((props: OverlayProps) => {
  const { className, onClick } = props
  return <div onClick={onClick} className={cn(cls.overlay, {}, [className])} />
})
