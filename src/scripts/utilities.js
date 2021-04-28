export const lerp = (a, b, n) => (1 - n) * a + n * b

export function distance(x1, y1, x2, y2) {
  return Math.hypot(x1 - x2, y1 - y2)
}

export function getMousePos(e) {
  return {
    x: e.pageX,
    y: e.pageY
  }
}