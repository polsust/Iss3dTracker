import React from "react";
import EmbedVideo from "./EmbedVideo";
import Metrics from "./Metrics";

export default function Overlay() {
	return (
		<div className="h-screen w-screen absolute z-50 pointer-events-none">
			{/* <Metrics /> */}
			<EmbedVideo/>
		</div>
	);
}
