import { memo } from 'react'

import { ICONS } from './const'
import { IconProps } from './icon.types'

export const Icon = memo((props: IconProps) => {
  const { size = 16, src, ...svgProps } = props
  const Svg = ICONS[src]
  return <Svg width={size} height={size} {...svgProps} />
})
