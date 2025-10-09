import { OrbitControls, Stars, useContextBridge } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import { IssDataContext } from "../../context/IssDataProvider"
import { Iss3dObjectDataContext } from "../../context/Iss3dObjectDataProvider"
import Earth from "./Earth"
import Iss from "./Iss"
import Light from "./Light"

export default function Scene3d() {
  const ContextBridge = useContextBridge(IssDataContext, Iss3dObjectDataContext)

  return (
    <Canvas>
      <ContextBridge>
        <Light />
        <ambientLight intensity={0.5} />

        <Stars
          radius={100}
          depth={50}
          count={7000}
          factor={4}
          saturation={0}
          fade
        />

        <Iss scale={[0.02, 0.02, 0.02]}></Iss>

        <Earth scale={[4, 4, 4]} />

        <OrbitControls
          rotateSpeed={0.5}
          enablePan={false}
          minDistance={5.2}
          maxDistance={12}
        />
      </ContextBridge>
    </Canvas>
  )
}
