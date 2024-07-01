// https://blog.logrocket.com/configure-3d-models-react-three-fiber/

import React, { Suspense } from "react"
import withStyles from "react-jss"
import { globalCanvasStyles } from "../styles/globalStyles"
import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"
import fonts from "../assets/fonts"
import { Lights, Model } from "../components/ThreeJSModel"

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
  return (
    <>
      <Lights />
      {/* Async loading happens here, hence Suspense */}
      <Suspense fallback={null}>
        <Model />
      </Suspense>
      {/* Click and touch interactivity for the models */}
      <OrbitControls
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
        enableZoom={true}
        enablePan={false}
      />
    </>
  )
}

const ThreeJSModel = ({ classes }) => {
  return (
    <div className={classes.container}>
      <Canvas dpr={window.devicePixelRatio}>
        <Children />
      </Canvas>
      <div className={classes.textContainer}>
        <p>
          Click and drag to spin the shoe to look at different angles. Scroll
          in/out to zoom in/out.
        </p>
      </div>
    </div>
  )
}

export default withStyles(styles)(ThreeJSModel)
