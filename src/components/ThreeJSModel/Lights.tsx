import React from "react"

const Lights = () => {
  return (
    <>
      <ambientLight intensity={1} />
      <spotLight
        intensity={0.5}
        angle={0.1}
        penumbra={1}
        position={[10, 15, 10]}
        castShadow
      />
    </>
  )
}

export default Lights
