/**
 * The formated response from the ISS API
 *
 * The units are in kilometers
 */
export default interface IssApiResponse {
	latitude: number;
	longitude: number;
	altitude: number;
	velocity: number;
}
