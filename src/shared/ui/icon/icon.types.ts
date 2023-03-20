import React from 'react'

import { ICONS } from './const'

export interface IconProps extends Omit<React.SVGProps<SVGSVGElement>, 'width' | 'height'> {
  size?: IconSize
  src: IconSrc
}

export type IconSize = 12 | 14 | 16 | 18 | 20 | 22 | 24
export type IconSrc = keyof typeof ICONS
