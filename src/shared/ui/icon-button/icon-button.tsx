import cn from 'classnames'
import { memo } from 'react'

import { Icon } from '../icon'

import cls from './icon-button.module.scss'
import { IconButtonProps } from './icon-button.types'

export const IconButton = memo((props: IconButtonProps) => {
  const { text, imageSrc, onClick, className, ...otherProps } = props
  return (
    <button className={cn(cls.iconButton, [className])} onClick={onClick} {...otherProps}>
      <Icon size={22} className={cls.icon} src={imageSrc} />
      <div>{text}</div>
    </button>
  )
})
