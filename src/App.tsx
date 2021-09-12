import "./App.sass";
import { Canvas, useFrame } from "@react-three/fiber";
import Earth from "./components/Earth";
import Iss from "./components/Iss";
import { CubeCamera, OrbitControls, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";

function App() {
	const cam = useRef(null);

	setInterval(() => {
		console.log(cam?.current);
	}, 5000);

	return (
		<Canvas /* camera={{ position: [-5, 2, 10], fov: 50 }} */>
			{/* <ambientLight intensity={0.5} /> */}
			<mesh ref={cam}>
				<CubeCamera
					resolution={256} // Size of the off-buffer (256 by default)
					frames={Infinity} // How many frames it should render (Indefinitively by default)
					near={1}
					far={1000}
				>
					{(texture) => (
						<mesh>
							<boxGeometry />
							<meshStandardMaterial envMap={texture} />
						</mesh>
					)}
				</CubeCamera>
				<pointLight position={[5, 5, 1]} intensity={1} />
			</mesh>

			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
			/>

			<Iss
				rotation={[0, 0, -0.5]}
				scale={[0.05, 0.05, 0.05]}
				position={[3, 3, 0]}
			/>

			<Earth scale={[4, 4, 4]} />

			<OrbitControls
				enableDamping={false}
				rotateSpeed={0.5}
				maxZoom={0.1}
				enablePan={false}
				minZoom={1}
				zoomSpeed={5}
			/>
		</Canvas>
	);
}

export default App;
