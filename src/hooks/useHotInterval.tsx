import React, { useEffect } from "react";

/**
 * Like setInterval, but fires right on the start
 * @param callback
 * @param interval
 */
export default function useHotInterval(callback: () => any, interval: number) {
	useEffect(() => {
		callback();
		const intervalReference = setInterval(() => callback(), interval);

		return clearInterval(intervalReference);
	}, [callback, interval]);
}
