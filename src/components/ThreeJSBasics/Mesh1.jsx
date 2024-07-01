import React, { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import colors from "../../styles/colors"
import { colorToHex } from "../../components/ThreeJSBasics/utils"

const Mesh1 = ({ position }) => {
  const meshRef = useRef(null)
  useFrame(() => {
    meshRef.current.rotation.x += 0.005
  })
  return (
    <mesh position={position} ref={meshRef}>
      <boxGeometry />
      <meshLambertMaterial emissive={colorToHex(colors.red)} />
    </mesh>
  )
}

export default Mesh1
