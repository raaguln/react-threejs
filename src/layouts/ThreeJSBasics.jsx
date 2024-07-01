import React, { useState } from "react"
import withStyles from "react-jss"
import { globalCanvasStyles } from "../styles/globalStyles"
import { Canvas, useThree } from "@react-three/fiber"
import fonts from "../assets/fonts"
import { Mesh1, Lights } from "../components/ThreeJSBasics"

const styles = {
  ...fonts,
  ...globalCanvasStyles,
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    width: "100%",
    height: "100vh",
    textAlign: "left",
    boxSizing: "border-box",
  },
  textContainer: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    pointerEvents: "none",
  },
}

const Children = () => {
  const { viewport } = useThree()
  const [objs, setObjs] = useState([])
  // const [isClicked, setIsClicked] = useState(false)
  // const handlePointerMove = ({ point }) => {
  //   /* In react-three-fiber, the pointer events bubble down
  //   to every mesh under the pointer. stopPropagation prevents
  //   that and only gives the event to the top most mesh */
  //   // stopPropagation()
  //   if (isClicked) {
  //     setObjs((objs) => [...objs, [point.x, point.y, point.z]])
  //   }
  // }
  const handleClick = ({ point }) => {
    setObjs((objs) => [...objs, [point.x, point.y, point.z]])
  }
  return (
    <>
      {/* For pointer events */}
      <mesh
        onClick={handleClick}
        // onPointerMove={handlePointerMove}
        // onPointerDown={() => setIsClicked(true)}
        // onPointerUp={() => setIsClicked(false)}
      >
        <planeGeometry args={[viewport.width, viewport.height]} />
        <meshBasicMaterial visible={false} />
      </mesh>
      <Lights />
      {objs.map((pos, i) => (
        <Mesh1 key={i} position={pos} />
      ))}
      {/* <Mesh1 position={[0, 0, 0]} /> */}
    </>
  )
}

const ThreeJSBasics = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Canvas dpr={window.devicePixelRatio}>
        <Children />
      </Canvas>
      <div className={classes.textContainer}>
        <p>Click to create a rotating cube.</p>
      </div>
    </div>
  )
}

export default withStyles(styles)(ThreeJSBasics)
