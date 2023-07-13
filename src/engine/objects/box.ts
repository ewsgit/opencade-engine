import SceneObject from '../object'
import Layer from '../layer'
import unitsToPx from '../helpers/unitsToPx'

export default class BoxObject extends SceneObject {
  constructor(parent: Layer | SceneObject, x = 0, y = 0, width = 1, height = 1) {
    super(parent)

    this.properties.bounds.width = width
    this.properties.bounds.height = height
    this.properties.position.x = x
    this.properties.position.y = y

    return this
  }

  render(): this {
    super.render()

    const { width, height } = this.properties.bounds
    const { x, y } = this.properties.position

    const ctx = this.getLayer().canvas.context

    ctx.fillStyle = 'red'
    ctx.fillRect(unitsToPx(x), unitsToPx(y), unitsToPx(width), unitsToPx(height))

    return this
  }
}
