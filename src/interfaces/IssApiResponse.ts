import GlobalCoordinates from "./GlobalCoordinates";

/**
 * The formated response from the ISS API
 *
 * The units are in kilometers
 */
export default interface IssApiResponse {
  position: GlobalCoordinates;
  altitude: number;
  velocity: number;
}
