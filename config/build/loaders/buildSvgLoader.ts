import { BuildPaths } from '../types/config'

export function buildSvgIconLoader(paths: BuildPaths) {
  return {
    test: /\.svg$/,
    include: paths.icons,
    exclude: /node_modules/,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          svgoConfig: {
            plugins: [
              'preset-default',
              {
                name: 'convertColors',
                params: {
                  currentColor: true
                }
              }
            ]
          }
        }
      }
    ]
  }
}

export function buildSvgLoader(paths: BuildPaths) {
  return {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
    exclude: paths.icons
  }
}
