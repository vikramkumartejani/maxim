// 'use client'

// import React, { useRef } from 'react'
// import { Canvas, useFrame, useLoader } from '@react-three/fiber'
// import { OrbitControls, Box, Environment } from '@react-three/drei'
// import * as THREE from 'three'
// const CubeWithTexture = ({ imageUrl }) => {
//     const mesh = useRef()
//     const texture = useLoader(THREE.TextureLoader, imageUrl || '/default-texture.jpg') // Fallback texture
  
//     useFrame((state) => {
//       if (mesh.current) {
//         const t = state.clock.getElapsedTime()
//         mesh.current.rotation.x = Math.cos(t / 4) / 8
//         mesh.current.rotation.y = Math.sin(t / 4) / 8
//         mesh.current.position.y = Math.sin(t / 1.5) / 10
//       }
//     })
  
//     return (
//       <mesh ref={mesh}>
//         <boxGeometry args={[3, 3, 3]} />
//         {[...Array(6)].map((_, index) => (
//           <meshStandardMaterial key={index} map={texture} />
//         ))}
//       </mesh>
//     )
//   }
  
// export default function ImageViewer3D({ imageUrl }) {
//   return (
//     <div className="w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
//       <Canvas camera={{ position: [0, 0, 5] }}>
//         <ambientLight intensity={0.5} />
//         <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
//         <pointLight position={[-10, -10, -10]} />
//         <CubeWithTexture imageUrl={imageUrl} />
//         <OrbitControls enableZoom={false} />
//         <Environment preset="night" background />
//       </Canvas>
//     </div>
//   )
// }

