export default class InputManager {
  keyPressListeners: ((im: InputManager) => void)[]

  constructor() {
    console.log(`Supports Mouse controls: ${this.supportsMouse()}`)
    console.log(`Supports Touch controls: ${this.supportsTouch()}`)
    if (!(this.supportsMouse() || this.supportsTouch())) {
      console.log(`Supports controls: All controls unsupported`)
    }

    this.keyPressListeners = []
  }

  supportsMouse(): boolean {
    return window.matchMedia('(any-pointer: fine)').matches
  }

  supportsTouch(): boolean {
    return window.matchMedia('(any-pointer: coarse)').matches
  }

  onKeypress(listener: (im: InputManager) => void): this {
    this.keyPressListeners.push(listener)

    return this
  }
}
