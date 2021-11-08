import React, { useContext, useState } from "react";
import YouTube from "react-youtube";
import { Iss3dObjectDataContext } from "../../context/Iss3dObjectDataProvider";

export default function EmbedVideo() {
	const issObjectData = useContext(Iss3dObjectDataContext);
	const { issScreenPosition } = issObjectData;

	const [isHoveringVideo, setIsHoveringVideo] = useState(false);

	const isHoveringWithin = issObjectData.isCursorHovering || isHoveringVideo;
	
	return (
		<div
			style={{
				position: "absolute",
				left: issScreenPosition.x + window.innerWidth / 4,
				top: issScreenPosition.y,
			}}
			onMouseOver={() => setIsHoveringVideo(true)}
			className={`transform -translate-x-1/2 -translate-y-1/2 p-3 bg-primary rounded-lg relative
			${isHoveringWithin ? "visible" : "invisible"}`}
		>
			<span className="absolute w-1/12 transform -translate-x-1/2 -translate-y-1/2 top-1/2 -left-4">
				<svg
					viewBox="364.123 133.641 36.229 223.501"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fill="white"
						d="M 400.346 133.641 C 400.115 149.582 387.174 174.625 376.728 192.973 C 362.668 217.669 355.88 253.179 380.76 299.539 C 391.446 319.45 403.114 331.501 399.769 357.142"
					/>
				</svg>
			</span>
			<div className="relative z-50">
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
		</div>
	);
}
