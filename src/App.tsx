import React from "react";
import "./App.sass";
import { Canvas } from "@react-three/fiber";
import Earth from "./components/Earth";
import Iss from "./components/Iss";
import { OrbitControls } from "@react-three/drei";

function App() {
	return (
		<Canvas shadows camera={{ position: [-5, 2, 10], fov: 50 }}>
			<ambientLight intensity={0.5} />
			{/* <pointLight position={[10, 10, 10]} intensity={1} /> */}
			<Iss scale={[0.05, 0.05, 0.05]} position={[2, 5, 1]} />
			<Earth scale={[4.5, 4.5, 4.5]} position={[0, 0, 0]} />
			<OrbitControls enablePan={false} enableZoom={false} />
		</Canvas>
	);
}

export default App;
