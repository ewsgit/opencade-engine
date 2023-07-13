import SceneObject from './object'
import Scene from './scene'
import Canvas from './canvas'

export default class Layer {
  children: SceneObject[]
  parent: Scene
  canvas: Canvas

  constructor(parent: Scene) {
    this.children = []
    this.parent = parent
    this.canvas = new Canvas(this, this.parent.engine.containerElement)
  }

  addObject(object: SceneObject): this {
    this.children.push(object)

    return this
  }

  render() {
    console.log('[OpenCade Engine] Rendering Scene Objects')
    this.canvas.clear()
    this.children.forEach((child) => child.render())
  }
}
