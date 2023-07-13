import OpenCadeEngine from '../../../engine'
import Scene from '../../../engine/scene'
import BouncingBox from './bouncingBox'

function init(): void {
  if (!document.getElementById('application-container')) return

  // TODO: create an opencade engine instance and load the editor menu scene
  const engine = new OpenCadeEngine(
    document.getElementById('application-container') as HTMLDivElement,
    {
      enableDevMode: true,
      showEntityCount: true,
      showFPS: true,
      showPassTime: true,
      use16x9AspectRatio: false
    }
  )

  // @ts-ignore
  window.engine = engine

  const scene = new Scene(engine)
  engine.initializeScene(scene)

  const sampleObject = new BouncingBox(scene.layers[0])

  scene.layers[0].addObject(sampleObject)

  scene.render()

  engine.inputManager.onKeypress((im) => {})
}

init()
