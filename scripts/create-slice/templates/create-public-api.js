const fs = require('fs/promises')

const firstCharUpperCase = require('../first-char-upper-case')
const resolveRoot = require('../resolve-root')

module.exports = async (layer, sliceName) => {
  const componentName = firstCharUpperCase(sliceName)
  const schemaName = `${sliceName}Schema`

  try {
    await fs.writeFile(
      resolveRoot('src', layer, sliceName, 'sort.ts'),
            `export { ${componentName} } from './ui/${componentName}/${componentName}';
            export { ${firstCharUpperCase(schemaName)} } from './model/types/${schemaName}';`
    )
  } catch (e) {
    console.log('Failed to create PUBLIC API')
  }
}
