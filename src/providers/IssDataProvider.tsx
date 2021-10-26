import axios from "axios";
import React, { createContext, useState } from "react";
import useHotInterval from "../hooks/useHotInterval";
import IssApiResponse from "../interfaces/IssApiResponse";

const IssDataContext = createContext<IssApiResponse | null>(null);

export default function IssDataProvider({ children }) {
	const [issData, setIssData] = useState<IssApiResponse>(null);

	const fetchIss = async (): Promise<IssApiResponse> => {
		const response = await axios.get(
			"https://api.wheretheiss.at/v1/satellites/25544"
		);

		const { latitude, longitude, altitude, velocity } = response.data;

		const issApiResponse: IssApiResponse = {
			latitude,
			longitude,
			altitude,
			velocity,
		};

		return issApiResponse;
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
