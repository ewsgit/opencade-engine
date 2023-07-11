import SceneObject from './object'

export default class Scene {
  children: SceneObject[]

  constructor() {
    this.children = []
  }

  // TODO: implement at a later date
  loadFile(path: string): this {
    return this
  }

  // TODO: implement this
  render(): this {
    this.children.forEach((child) => child.render())

    return this
  }
}
