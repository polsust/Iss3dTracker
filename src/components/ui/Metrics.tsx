import React, { useContext } from "react";
import { IssDataContext } from "../../context/IssDataProvider";

export default function Metrics() {
	const issData = useContext(IssDataContext);

	return (
		<div className="top-0 left-0 bg-white opacity-60 rounded-br w-3/12 p-5">
			<h1>Iss Metrics</h1>
			<p>Latitude: {issData.position.latitude}</p>
			<p>Longitude: {issData.position.longitude}</p>
			<p>Altitude: {issData.altitude.toFixed(0)} Kilometers</p>
			<p>{issData.velocity.toFixed(0)} KM/H</p>
		</div>
	);
}
