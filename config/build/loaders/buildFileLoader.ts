export function buildFileLoader() {
  return {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    loader: 'file-loader',
    exclude: /node_modules/,
    options: {
      name: '[path][name].[ext]'
    }
  }
}
