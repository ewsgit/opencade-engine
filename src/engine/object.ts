import Scene from './scene'
import Layer from './layer'

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
  parent: SceneObject | Layer

  constructor(parent: SceneObject | Layer) {
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
    this.parent = parent
  }

  getScene(): Scene {
    function testNext(object: SceneObject): Scene {
      if (object.parent instanceof Layer) {
        return object.parent.parent
      }

      return testNext(object)
    }

    if (this.parent instanceof Layer) {
      return this.parent.parent
    }

    return testNext(this)
  }

  getLayer(): Layer {
    function testNext(object: SceneObject): Layer {
      if (object.parent instanceof Layer) {
        return object.parent
      }

      return testNext(object)
    }

    if (this.parent instanceof Layer) {
      return this.parent
    }

    return testNext(this)
  }

  render(): this {
    console.log('[OpenCade Engine] Rendering Object')
    return this
  }
}
