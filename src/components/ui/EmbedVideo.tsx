import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import { Iss3dObjectDataContext } from "../../context/Iss3dObjectDataProvider";

export default function EmbedVideo() {
	const issObjectData = useContext(Iss3dObjectDataContext);
	const { issScreenPosition } = issObjectData;

	const [isHoveringVideo, setIsHoveringVideo] = useState(false);

	const isHoveringWithin = issObjectData.isCursorHovering || isHoveringVideo;
	console.log(window.innerWidth / 5);

	return (
		<div
			style={{
				position: "absolute",
				left: issScreenPosition.x + window.innerWidth / 4,
				top: issScreenPosition.y,
			}}
			onMouseOver={() => setIsHoveringVideo(true)}
			className={`transform -translate-x-1/2 -translate-y-1/2 p-3 bg-white rounded-lg
			${isHoveringWithin ? "visible" : "invisible"}`}
		>
			<YouTube
				videoId="DDU-rZs-Ic4"
				opts={{
					width: "426",
					height: "240",
					playerVars: {
						autoplay: 1,
						controls: 0,
					},
				}}
			/>
		</div>
	);
}
