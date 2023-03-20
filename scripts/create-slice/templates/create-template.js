const fs = require('fs/promises')

const resolveRoot = require('../resolve-root')

const createModel = require('./create-model')
const createPublicApi = require('./create-public-api')
const createUI = require('./create-ui')

module.exports = async (layer, sliceName) => {
  try {
    await fs.mkdir(resolveRoot('src', layer, sliceName))
  } catch (e) {
    console.log(`не удалось создать директорию для слайса${sliceName}`)
  }

  await createModel(layer, sliceName)
  await createUI(layer, sliceName)
  await createPublicApi(layer, sliceName)
}
