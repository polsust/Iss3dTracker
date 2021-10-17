import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import React from "react";
import * as THREE from "three";

import clouds from "../assets/textures/8k_earth_clouds.jpg";
import color from "../assets/textures/8k_earth_daymap.jpg";
import normal from "../assets/textures/8k_earth_normal_map.jpg";
import specular from "../assets/textures/8k_earth_specular_map.jpg";

function Earth(props: any) {
	const [colorMap, normalMap, specularMap, cloudsMap] = useLoader(
		TextureLoader,
		[color, normal, specular, clouds]
	);

	return (
		<group {...props}>
			<mesh>
				<sphereGeometry args={[1.005, 100, 100]} />
				<meshPhongMaterial
					map={cloudsMap}
					opacity={0.4}
					transparent={true}
					side={THREE.DoubleSide}
				/>
			</mesh>
			<mesh>
				<sphereGeometry args={[1, 100, 100]} />
				<meshPhongMaterial specularMap={specularMap} />
				<meshStandardMaterial map={colorMap} normalMap={normalMap} />
			</mesh>
		</group>
	);
}

export default Earth;
