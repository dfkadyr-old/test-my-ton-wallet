import { ButtonHTMLAttributes } from 'react'

import { IconSrc } from '../icon'

export interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  imageSrc: IconSrc
  onClick?: () => void
}
