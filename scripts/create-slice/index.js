const createTemplate = require('./templates/create-template')

const layer = process.argv[2]
const sliceName = process.argv[3]

const layers = ['features', 'entities', 'pages']

if (!layer || !layers.includes(layer)) {
  throw new Error(`Specify Layer ${layers.join(' or ')}`)
}

if (!sliceName) {
  throw new Error('Specify the name of the slice')
}

createTemplate(layer, sliceName)
