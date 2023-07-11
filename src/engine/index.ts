import Scene from './scene'

export interface IOpenCadeEngineParameters {
  enableDevMode?: boolean
  showFPS?: boolean
  showEntityCount?: boolean
  showPassTime?: boolean
}

export default class OpenCadeEngine {
  parameters: IOpenCadeEngineParameters
  scene?: Scene

  constructor(parameters: IOpenCadeEngineParameters) {
    this.parameters = parameters
  }

  createScene(): this {
    this.scene = new Scene()

    return this
  }
}
