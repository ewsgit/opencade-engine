import BoxObject from '../../../engine/objects/box'
import SceneObject from '../../../engine/object'
import Layer from '../../../engine/layer'
import pxToUnits from '../../../engine/helpers/pxToUnits'

export default class BouncingBox extends BoxObject {
  constructor(parent: SceneObject | Layer) {
    super(parent, 0, 0, 1.5, 5)
  }

  render(): this {
    super.render()
    this.properties.position.x += 1

    if (this.properties.position.x >= pxToUnits(this.getLayer().canvas.element.width)) {
      this.properties.position.y += 4.75
      this.properties.position.x = 0
    }

    requestAnimationFrame(this.render.bind(this))

    return this
  }
}
