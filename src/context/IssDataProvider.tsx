import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import useHotInterval from "../hooks/useHotInterval";
import IssApiResponse from "../interfaces/IssApiResponse";

const IssDataContext = createContext<IssApiResponse>(null);

export default function IssDataProvider({ children }) {
	const [issData, setIssData] = useState(null);

	useEffect(() => {
		console.log(issData);
	}, [issData]);

	const fetchIss = async (): Promise<IssApiResponse> => {
		const response = await axios.get(
			"https://api.wheretheiss.at/v1/satellites/25544"
		);

		const { latitude, longitude, altitude, velocity } = response.data;

		const issApiFormatedResponse: IssApiResponse = {
			latitude,
			longitude,
			altitude,
			velocity,
		};

		return issApiFormatedResponse;
	};

	useHotInterval(async () => {
		setIssData(await fetchIss());
	}, 5000);

	return (
		<IssDataContext.Provider value={issData}>
			{children}
		</IssDataContext.Provider>
	);
}
