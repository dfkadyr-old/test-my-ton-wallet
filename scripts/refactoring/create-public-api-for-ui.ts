import path from 'path'

import { Project } from 'ts-morph'

const project = new Project({})
project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

function isAbsolute(path: string) {
  const layers = ['app', 'shared', 'entities', 'features', 'widgets', 'pages']
  return layers.some((layer) => path.startsWith(layer))
}

const files = project.getSourceFiles()
const indexFilename = 'sort.ts'
const layer = process.argv[2] || 'shared'
const slice = 'ui'
const dest = project.getDirectory(path.resolve(__dirname, '..', 'src', layer, slice))
const directories = dest?.getDirectories()

directories?.forEach((directory) => {
  const folderName = directory.getPath()
  const isIndexFileExist = directory.getSourceFile(`${folderName}/${indexFilename}`)

  if (!isIndexFileExist) {
    const filesInFolder = directory.getSourceFiles([
      '**/*.tsx',
      '!**/*.stories.tsx',
      '!**/*.test.tsx'
    ])

    let content = ''

    filesInFolder?.forEach((component) => {
      const folderLen = folderName.length
      const moduleName = component.getBaseNameWithoutExtension()
      const modulePath = `.${component.getFilePath().slice(folderLen, -4)}`
      content += `export {${moduleName}} from "${modulePath}"\n`
    })
    const file = directory.createSourceFile(
      `${folderName}/${indexFilename}`,
      content,
      { overwrite: true }
    )

    // eslint-disable-next-line no-console
    file.save().then(() => console.log(`${folderName} --> index.ts created!`))
  }
})

files.forEach((source) => {
  const declarations = source.getImportDeclarations()
  declarations.forEach((declaration) => {
    let value = declaration.getModuleSpecifierValue()
    value = value.replace('@/', '')
    const segments = value.split('/')

    const isLayer = segments?.[0] === layer
    const isSlice = segments?.[1] === slice

    if (isAbsolute(value) && isLayer && isSlice) {
      const res = value.split('/').slice(0, 3).join('/')
      declaration.setModuleSpecifier(`@/${res}`)
    }
  })
})

// eslint-disable-next-line no-console
project.save().then(() => console.log('!!! Refactoring is Done !!!'))
