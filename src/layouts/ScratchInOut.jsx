import React, { useState, useEffect, useRef } from "react"
import withStyles from "react-jss"
import fonts from "../assets/fonts"
import globalStyles from "../styles/globalStyles"
import { Cursor } from "../components/ScratchInOut"
import { draw, setupCanvas } from "../components/ScratchInOut/utils"
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
  scratchIn: {},
  scratchOut: {
    mixBlendMode: "darken",
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
  imgContainer: {
    backgroundColor: "purple",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
}

const ScratchInOut = ({ classes }) => {
  const canvasInRef = useRef(null)
  const canvasOutRef = useRef(null)

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
      draw(canvasInRef.current, position)
      draw(canvasOutRef.current, position)
    }
  }

  const initialSetup = () => {
    const canvasIn = canvasInRef.current
    const canvasOut = canvasOutRef.current
    if (canvasIn && canvasOut) {
      setupCanvas(canvasIn, "in")
      setupCanvas(canvasOut, "out")
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
      <section className={classes.scratchIn}>
        <div className={classes.pattern} />
        <canvas className={classes.canvas} ref={canvasInRef} />
      </section>
      <section className={classes.scratchOut}>
        <div className={classes.imgContainer}>
          <img
            className={classes.img}
            src={
              "https://images.unsplash.com/photo-1647869349875-54fad783e873?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            }
            alt="placeholder"
          />
        </div>
        <canvas className={classes.canvas} ref={canvasOutRef} />
      </section>
      <Cursor size={size} position={position} />
    </main>
  )
}

export default withStyles(styles)(ScratchInOut)
