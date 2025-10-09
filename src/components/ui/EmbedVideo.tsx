import React, { useContext } from "react";
import YouTube from "react-youtube";
import { Iss3dObjectDataContext } from "../../context/Iss3dObjectDataProvider";

export default function EmbedVideo() {
  const issObjectData = useContext(Iss3dObjectDataContext);
  const { issScreenPosition } = issObjectData;

  return (
    <div
      style={{
        position: "absolute",
        left: issScreenPosition.x + window.innerWidth / 4,
        top: issScreenPosition.y,
      }}
      className={`transform -translate-x-1/2 -translate-y-1/2 p-3 bg-primary rounded-lg relative
			${issObjectData.isCameraFollowing ? "visible" : "invisible"}`}
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
              mute: 1,
            },
          }}
        />
        <span className="absolute rounded-full opacity-80 bottom-1 left-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="48px"
            height="48px"
          >
            <circle cx="24" cy="24" r="6" fill="#f44336" />
            <path
              fill="#f44336"
              d="M17.09,16.789L14.321,13.9C11.663,16.448,10,20.027,10,24s1.663,7.552,4.321,10.1l2.769-2.889 C15.19,29.389,14,26.833,14,24C14,21.167,15.19,18.61,17.09,16.789z"
            />
            <path
              fill="#f44336"
              d="M33.679,13.9l-2.769,2.889C32.81,18.611,34,21.167,34,24c0,2.833-1.19,5.389-3.09,7.211l2.769,2.889 C36.337,31.552,38,27.973,38,24S36.337,16.448,33.679,13.9z"
            />
            <g>
              <path
                fill="#f44336"
                d="M11.561,11.021l-2.779-2.9C4.605,12.125,2,17.757,2,24s2.605,11.875,6.782,15.879l2.779-2.9 C8.142,33.701,6,29.1,6,24S8.142,14.299,11.561,11.021z"
              />
              <path
                fill="#f44336"
                d="M39.218,8.121l-2.779,2.9C39.858,14.299,42,18.9,42,24s-2.142,9.701-5.561,12.979l2.779,2.9 C43.395,35.875,46,30.243,46,24S43.395,12.125,39.218,8.121z"
              />
            </g>
          </svg>
        </span>
      </div>
    </div>
  );
}
