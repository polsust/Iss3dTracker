import "./App.sass";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/3d/Earth";
import Iss from "./components/3d/Iss";
import { OrbitControls, Stars } from "@react-three/drei";
import Light from "./components/3d/Light";
import Overlay from "./components/ui/Overlay";
import Providers from "./providers/Providers";

function App() {
	return (
		<Providers>
			<Overlay />
			<Canvas>
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
					enableZoom={true}
					minDistance={6}
					maxDistance={11}
				/>
			</Canvas>
		</Providers>
	);
}

export default App;
