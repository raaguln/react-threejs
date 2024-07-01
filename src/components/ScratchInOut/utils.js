export const setupCanvas = (canvas, type) => {
  const w = window.innerWidth,
    h = window.innerHeight,
    dpi = window.devicePixelRatio
  canvas.width = w * dpi
  canvas.height = h * dpi
  canvas.style.width = `${w}px`
  canvas.style.height = `${h}px`
  const ctx = canvas.getContext("2d")
  ctx.scale(dpi, dpi)
  if (type === "in") {
    ctx.fillStyle = "black"
    ctx.strokeStyle = "white"
  } else {
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
  }
  ctx.lineWidth = 50
  ctx.lineCap = "round"
  ctx.lineJoin = "round"
  ctx.shadowBlur = 10
  ctx.shadowColor = ctx.strokeStyle
  // White background to cover the background image
  ctx.rect(0, 0, w, h)
  ctx.fill()
}

export const draw = (canvas, position) => {
  const ctx = canvas.getContext("2d")
  const [x, y] = position
  // Reset position and color
  ctx.moveTo(x, y)
  ctx.beginPath()
  // Draw
  ctx.lineTo(x, y)
  ctx.stroke()
}
