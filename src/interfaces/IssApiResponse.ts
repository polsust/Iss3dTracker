/**
 * The formated response from the ISS API
 *
 * The units are in kilometers
 */
export default interface IssApiResponse {
	position: {
		latitude: number;
		longitude: number;
	};
	altitude: number;
	velocity: number;
}