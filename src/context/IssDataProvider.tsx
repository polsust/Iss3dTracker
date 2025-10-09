import axios from "axios"
import React, { createContext, useState } from "react"
import useHotInterval from "../hooks/useHotInterval"
import IssApiResponse from "../interfaces/IssApiResponse"

export const IssDataContext = createContext<IssApiResponse>(null)

export default function IssDataProvider({ children }) {
  const [issData, setIssData] = useState<IssApiResponse>({
    position: {
      latitude: 0,
      longitude: 0,
    },
    altitude: 0,
    velocity: 0,
  })

  const fetchIss = async (): Promise<IssApiResponse> => {
    const response = await axios.get(
      "https://api.wheretheiss.at/v1/satellites/25544"
    )

    const { latitude, longitude, altitude, velocity } = response.data

    const issApiFormatedResponse: IssApiResponse = {
      position: {
        latitude,
        longitude,
      },
      altitude,
      velocity,
    }

    return issApiFormatedResponse
  }

  useHotInterval(async () => {
    setIssData(await fetchIss())
  }, 1000)

  return (
    <IssDataContext.Provider value={issData}>
      {children}
    </IssDataContext.Provider>
  )
}
