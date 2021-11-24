import React, { useContext } from "react";
import { IssDataContext } from "../../context/IssDataProvider";

export default function Metrics() {
	const issData = useContext(IssDataContext);

	return (
		<div className="top-0 flex flex-wrap justify-center text-2xl font-extrabold sm:justify-between">
			<div>
				<p>Latitude: {issData.position.latitude.toFixed(3)}°</p>
				<p>Longitude: {issData.position.longitude.toFixed(3)}°</p>
			</div>

			<div>
				<p>Altitude: {issData.altitude.toFixed(0)} Km</p>
				<p>
					Speed:{" "}
					{issData.velocity
						.toFixed(0)
						.toString()
						.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}{" "}
					KM/H
				</p>
			</div>
		</div>
	);
}
