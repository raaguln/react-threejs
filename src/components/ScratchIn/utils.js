export const setupCanvas = (canvas) => {
  const w = window.innerWidth,
    h = window.innerHeight,
    dpi = window.devicePixelRatio
  canvas.width = w * dpi
  canvas.height = h * dpi
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`
  const ctx = canvas.getContext("2d")
  ctx.scale(dpi, dpi)
  ctx.fillStyle = "white"
  ctx.strokeStyle = "black"
  ctx.lineWidth = 50
  ctx.lineCap = "round"
  ctx.lineJoin = "round"

  // White background to cover the background image
  ctx.rect(0, 0, w, h)
  ctx.fill()
}

export const draw = (canvas, position, size) => {
  const ctx = canvas.getContext("2d")
  const [x, y] = position
  // Reset position and color
  ctx.moveTo(x, y)
  ctx.beginPath()
  // Draw
  ctx.lineTo(x, y)
  ctx.stroke()
  // ctx.rect(x - size / 2, y - size / 2, size, size)
  // ctx.fill()
}
