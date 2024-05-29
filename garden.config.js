import lwcConfig from './lwr.config.json' assert { type: 'json' }

/**
 * @type {import('@lwc-garden/core/types').GardenConfig}
 */
const CONFIG = {
  // uses minimatch
  ignore: ['./**/__mocks__/**'],
  // lwc.config.json modules type
  modules: lwcConfig.lwc.modules,
}

export default CONFIG
