const fs = require('fs/promises')

const resolveRoot = require('../resolve-root')

const reduxSliceTemplate = require('./redux-slice-template')
const schemaTypeTemplate = require('./schema-type-template')

module.exports = async (layer, sliceName) => {
  const resolveModelPath = (...segments) => resolveRoot('src', layer, sliceName, 'model', ...segments)

  const createModelStructure = async () => {
    try {
      await fs.mkdir(resolveModelPath())
      await fs.mkdir(resolveModelPath('types'))
      await fs.mkdir(resolveModelPath('slices'))
      await fs.mkdir(resolveModelPath('selectors'))
      await fs.mkdir(resolveModelPath('services'))
    } catch (e) {
      console.log(`Failed to create model segment for slice ${sliceName}`, e)
    }
  }

  const createReduxSlice = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('slices', `${sliceName}Slice.ts`),
        reduxSliceTemplate(sliceName)
      )
    } catch (e) {
      console.log('Failed to create Redux slice', e)
    }
  }

  const createSchemaType = async () => {
    try {
      await fs.writeFile(
        resolveModelPath('types', `${sliceName}Schema.ts`),
        schemaTypeTemplate(sliceName)
      )
    } catch (e) {
      console.log('Failed to create state schema type', e)
    }
  }

  await createModelStructure()
  await createReduxSlice()
  await createSchemaType()
}
