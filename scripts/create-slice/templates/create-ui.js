const fs = require('fs/promises')

const firstCharUpperCase = require('../first-char-upper-case')
const resolveRoot = require('../resolve-root')

const componentTemplate = require('./component-template')
const storyTemplate = require('./story-template')
const styleTemplate = require('./style-template')

module.exports = async (layer, sliceName) => {
  const resolveUIPath = (...segments) => resolveRoot('src', layer, sliceName, 'ui', ...segments)

  const createUIDir = async () => {
    try {
      await fs.mkdir(resolveUIPath())
    } catch (e) {
      console.log('Failed to create UI directory')
    }
  }

  const createComponent = async () => {
    try {
      const componentName = firstCharUpperCase(sliceName)
      await fs.mkdir(resolveUIPath(componentName))
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.tsx`),
        componentTemplate(componentName)
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.stories.tsx`),
        storyTemplate(layer, componentName)
      )
      await fs.writeFile(
        resolveUIPath(componentName, `${componentName}.module.scss`),
        styleTemplate(componentName)
      )
    } catch (e) {
      console.log('Failed to create component')
    }
  }

  await createUIDir()
  await createComponent()
}
