import Scene from './scene'

export interface SceneObjectProperties {
  position: {
    x: number
    y: number
  }
  bounds: {
    width: number
    height: number
  }
}

export default class SceneObject {
  properties: SceneObjectProperties
  parent: SceneObject | Scene

  constructor() {
    this.properties = {
      position: {
        x: 0,
        y: 0
      },
      bounds: {
        width: 0,
        height: 0
      }
    }
  }

  render(): this {
    const { x, y } = this.properties.position
    const { width, height } = this.properties.bounds

    return this
  }
}
