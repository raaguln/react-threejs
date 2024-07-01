import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// @ts-nocheck
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
let PATH = process.env.NODE_ENV === "production"
    ? "https://raaguln.github.io/react-threejs/shoe-draco.glb"
    : "/shoe-draco.glb";
export default function Model({ ...props }) {
    const group = useRef({
        rotation: { x: 0, y: 0, z: 0 },
        position: { x: 0, y: 0, z: 0 },
    });
    const { nodes, materials } = useGLTF(PATH);
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        group.current.rotation.z = -0.2 - (1 + Math.sin(t / 1.5)) / 20;
        group.current.rotation.x = Math.cos(t / 4) / 8;
        group.current.rotation.y = Math.sin(t / 4) / 8;
        group.current.position.y = (1 + Math.sin(t / 1.5)) / 10;
    });
    return (_jsxs("group", { ref: group, ...props, dispose: null, children: [_jsx("mesh", { geometry: nodes.shoe.geometry, material: materials.laces }), _jsx("mesh", { geometry: nodes.shoe_1.geometry, material: materials.mesh }), _jsx("mesh", { geometry: nodes.shoe_2.geometry, material: materials.caps }), _jsx("mesh", { geometry: nodes.shoe_3.geometry, material: materials.inner }), _jsx("mesh", { geometry: nodes.shoe_4.geometry, material: materials.sole }), _jsx("mesh", { geometry: nodes.shoe_5.geometry, material: materials.stripes }), _jsx("mesh", { geometry: nodes.shoe_6.geometry, material: materials.band }), _jsx("mesh", { geometry: nodes.shoe_7.geometry, material: materials.patch })] }));
}
useGLTF.preload("/shoe-draco.glb");
