import React from "react";
import EmbedVideo from "./EmbedVideo";
import Metrics from "./Metrics";
import Sources from "./Sources";

export default function Overlay() {
	return (
		<div className="absolute z-50 w-screen h-screen pointer-events-none">
			{/* <Metrics /> */}
			<EmbedVideo />
			<Sources />
		</div>
	);
}
