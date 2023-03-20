import webpack from 'webpack'

import { buildBabelLoader } from './loaders/buildBabelLoader'
import { buildCssLoader } from './loaders/buildCssLoader'
import { buildFileLoader } from './loaders/buildFileLoader'
import { buildSvgIconLoader, buildSvgLoader } from './loaders/buildSvgLoader'
import { BuildOptions } from './types/config'

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const svgIconLoader = buildSvgIconLoader(options.paths)
  const svgLoader = buildSvgLoader(options.paths)

  const codebabelLoader = buildBabelLoader({ ...options, isTsx: false })
  const tsxBabelLoader = buildBabelLoader({ ...options, isTsx: true })

  const cssLoader = buildCssLoader(options.isDev)

  const fileLoader = buildFileLoader()

  return [
    fileLoader,
    svgIconLoader,
    svgLoader,
    codebabelLoader,
    tsxBabelLoader,
    cssLoader
  ]
}
