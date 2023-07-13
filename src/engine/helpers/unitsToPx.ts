function getCanvasWidth(): number {
  const windowWidth = window.innerWidth
  const windowHeight = window.innerHeight

  if (windowHeight < (windowWidth / 16) * 9) {
    return (windowHeight / 9) * 16
  } else {
    return windowWidth
  }
}

export default function unitsToPx(units: number): number {
  let windowWidth = getCanvasWidth()

  // Return the number which is a ratio of 1:160 with the window width
  return (windowWidth / 160) * units
}
