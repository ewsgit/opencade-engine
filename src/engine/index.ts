import Scene from './scene'
import InputManager from './input/inputManager'

export interface IOpenCadeEngineParameters {
  enableDevMode?: boolean
  showFPS?: boolean
  showEntityCount?: boolean
  showPassTime?: boolean
  use16x9AspectRatio?: boolean
}

export default class OpenCadeEngine {
  parameters: IOpenCadeEngineParameters
  scene?: Scene
  containerElement: HTMLDivElement
  inputManager: InputManager

  constructor(containerElement: HTMLDivElement, parameters: IOpenCadeEngineParameters) {
    console.log('[OpenCade Engine] Initializing engine')

    this.containerElement = containerElement
    this.parameters = parameters

    if (!this.containerElement) {
      throw new Error('[OpenCade Engine] PANIC! No container element provided')
    }

    this.containerElement.style.overflow = 'hidden'
    this.inputManager = new InputManager()
  }

  initializeScene(scene: Scene): this {
    console.log('[OpenCade Engine] Initializing scene')
    this.scene = scene

    return this
  }
}
