import Layer from './layer'

export default class Canvas {
  element: HTMLCanvasElement
  context: CanvasRenderingContext2D
  parentLayer: Layer

  constructor(parentLayer: Layer, container: HTMLDivElement) {
    if (!container) {
      throw new Error('[OpenCade Engine] PANIC! No container element provided to the Canvas')
    }

    this.parentLayer = parentLayer
    this.element = document.createElement('canvas')
    container.appendChild(this.element)
    this.context = this.element.getContext('2d') as CanvasRenderingContext2D
    this.updateCanvasScaling()

    let resizeTimeout: number

    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout)
      resizeTimeout = window.setTimeout(() => {
        this.updateCanvasScaling()
        this.parentLayer.render()
      }, 100)
    })

    // Center the canvas in the window
    this.element.style.margin = 'auto'
    // Remove the canvas's default bottom spacing
    this.element.style.display = 'block'
    // Set the default background color
    this.element.style.backgroundColor = 'transparent'
  }

  updateCanvasScaling(): this {
    const windowWidth = window.innerWidth
    const windowHeight = window.innerHeight

    if (this.parentLayer.parent.engine.parameters.use16x9AspectRatio) {
      // make the canvas follow the 16:9 aspect ratio
      if (windowHeight < (windowWidth / 16) * 9) {
        this.element.width = (windowHeight / 9) * 16
        this.element.height = (this.element.width / 16) * 9
      } else {
        this.element.width = windowWidth
        this.element.height = (windowWidth / 16) * 9
      }
    } else {
      // else fill the whole window
      this.element.width = windowWidth
      this.element.height = windowHeight
    }

    return this
  }

  clear(): this {
    this.context.clearRect(0, 0, this.element.width, this.element.height)

    return this
  }
}
