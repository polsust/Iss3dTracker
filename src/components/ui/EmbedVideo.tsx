import React, { useContext } from "react";
import YouTube, { Options } from "react-youtube";
import { IssHoverContext } from "../../context/IssHoverProvider";

export default function EmbedVideo() {
	const { isHovering } = useContext(IssHoverContext);

	const videoOptions: Options = {
		height: "360",
		width: "640",
		playerVars: {
			autoplay: 1,
			controls: 0,
		},
	};

	return (
		<div
			className={`text-white opacity-90 
			${isHovering ? "visible" : "visible"}`}
		>
			<YouTube videoId="DDU-rZs-Ic4" opts={videoOptions} />
		</div>
	);
}
