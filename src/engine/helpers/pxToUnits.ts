import unitsToPx from './unitsToPx'

export default function pxToUnits(px: number): number {
  return px / unitsToPx(1)
}
