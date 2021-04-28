import { lerp, distance, getMousePos } from './utilities'

let mousePos = { x: 0, y: 0 }
window.addEventListener('mousemove', (e) => (mousePos = getMousePos(e)))

export default class MagneticFx {
  constructor(element) {
    this.element = element
    this.boundingBox = element.getBoundingClientRect()
    this.distanceToTrigger = this.boundingBox.width * 1.5
    this.animatedStyles = {
      translateX: { previous: 0, current: 0, amount: 0.1 },
      translateY: { previous: 0, current: 0, amount: 0.1 }
    }

    requestAnimationFrame(() => this.render())
  }

  render() {
    // console.log('rendered')

    let mouseX = mousePos.x
    let mouseY = mousePos.y
    let centerX = this.boundingBox.left + this.boundingBox.width / 2
    let centerY = this.boundingBox.top + this.boundingBox.height / 2

    let x = 0
    let y = 0

    const distanceToCenter = distance(mouseX, mouseY, centerX, centerY)

    if (distanceToCenter < this.distanceToTrigger) {
      x = (mouseX - centerX) * 0.3
      y = (mouseY - centerY) * 0.3
    }

    this.animatedStyles.translateX.current = x
    this.animatedStyles.translateY.current = y

    this.animatedStyles.translateX.previous = lerp(
      this.animatedStyles.translateX.previous,
      this.animatedStyles.translateX.current,
      this.animatedStyles.translateX.amount
    )
    this.animatedStyles.translateY.previous = lerp(
      this.animatedStyles.translateY.previous,
      this.animatedStyles.translateY.current,
      this.animatedStyles.translateY.amount
    )

    this.element.style.transform = `translate3d(${this.animatedStyles.translateX.previous}px, ${this.animatedStyles.translateY.previous}px, 0)`

    requestAnimationFrame(() => this.render())
  }
}
