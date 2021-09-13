import "./App.sass";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import Iss from "./components/Iss";
import { CubeCamera, OrbitControls, Stars } from "@react-three/drei";
import Light from "./components/Light";
import { useRef } from "react";

function App() {
	const controls = useRef(undefined);

	window.addEventListener("mousedown", () => {
		if (!controls.current) return;

		controls.current.enableDamping = false;
	});

	window.addEventListener("mouseup", () => {
		if (!controls.current) return;

		controls.current.enableDamping = true;
	});

	return (
		<Canvas /* camera={{ position: [-5, 2, 10], fov: 50 }} */>
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
			<Light />
			<ambientLight intensity={0.5} />

			<Stars
				radius={100}
				depth={50}
				count={5000}
				factor={4}
				saturation={0}
				fade
			/>

			<Iss scale={[0.02, 0.02, 0.02]} />

			<Earth scale={[4, 4, 4]} />

			<OrbitControls
				rotateSpeed={0.5}
				enablePan={false}
				zoomSpeed={5}
				enableZoom={true}
				ref={controls}
				minDistance={5}
				maxDistance={10}
				enableDamping={true}
			/>
		</Canvas>
	);
}

export default App;
