import Layer from './layer'
import OpenCadeEngine from './index'

export default class Scene {
  layers: Layer[]
  engine: OpenCadeEngine

  constructor(engine: OpenCadeEngine) {
    this.layers = []
    this.engine = engine
    this.layers.push(new Layer(this))
    this.layers[0].canvas.element.style.backgroundColor = '#222222'
  }

  // TODO: implement at a later date
  loadFile(_path: string): this {
    return this
  }

  addLayer(layer: Layer): this {
    this.layers.push(layer)

    return this
  }

  render(): this {
    console.log('[OpenCade Engine] Rendering layers')
    this.layers.forEach((layer) => layer.render())

    return this
  }
}
