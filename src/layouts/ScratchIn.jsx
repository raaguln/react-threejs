import React, { useState, useEffect, useRef } from "react"
import withStyles from "react-jss"
import fonts from "../assets/fonts"
import globalStyles from "../styles/globalStyles"
import { Cursor } from "../components/ScratchIn"
import { draw, setupCanvas } from "../components/ScratchIn/utils"
import { Pattern } from "../assets/images"

const styles = {
  ...fonts,
  ...globalStyles,
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    padding: "3rem 2rem",
    textAlign: "left",
    boxSizing: "border-box",
    cursor: "none",
  },
  canvas: {
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    mixBlendMode: "lighten",
  },
  pattern: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "yellow",
    backgroundImage: `url(${Pattern})`,
    backgroundSize: "450px 450px",
  },
}

const ScratchIn = ({ classes }) => {
  const canvasRef = useRef(null)

  const INITIAL_SIZE = 20,
    BIG_SIZE = 40
  const [size, setSize] = useState(INITIAL_SIZE)
  const [position, setPosition] = useState([0, 0])

  // Using ref cauz state won't get the latest value in event listeners
  // It'll only have the value that the variable had during initialization
  const isMouseDown = useRef(false)
  const setIsMouseDown = (value) => {
    isMouseDown.current = value
  }

  const growPointer = () => {
    setSize(BIG_SIZE)
    setIsMouseDown(true)
  }
  const shrinkPointer = () => {
    setSize(INITIAL_SIZE)
    setIsMouseDown(false)
  }
  const handleMouseMove = (e) => {
    const position = [e.pageX, e.pageY]
    setPosition(position)
    if (isMouseDown.current) {
      draw(canvasRef.current, position, size)
    }
  }

  const initialSetup = () => {
    const canvas = canvasRef.current
    if (canvas) {
      setupCanvas(canvas)
    }
  }

  useEffect(() => {
    initialSetup()
    window.addEventListener("mousedown", growPointer)
    window.addEventListener("mouseup", shrinkPointer)
    window.addEventListener("mousemove", handleMouseMove)
    // Need to add touch events for mobile / tablets
    // On resize, the canvas just resets instead of responsively scaling
    window.addEventListener("resize", initialSetup)
    return () => {
      window.removeEventListener("mousedown", growPointer)
      window.removeEventListener("mouseup", shrinkPointer)
      window.removeEventListener("mousemove", handleMouseMove)
      // Need to add touch events for mobile / tablets
      window.removeEventListener("resize", initialSetup)
    }
  }, [])

  return (
    <main className={classes.container}>
      <div className={classes.pattern} />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <Cursor size={size} position={position} />
      <canvas className={classes.canvas} ref={canvasRef} />
    </main>
  )
}

export default withStyles(styles)(ScratchIn)
