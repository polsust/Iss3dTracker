import React, { useEffect, useState } from "react"
import LoadingScreen from "./LoadingScreen"
import Metrics from "./Metrics"
import Sources from "./Sources"

export default function Overlay() {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 5000)
  }, [])

  if (!isReady) {
    return <LoadingScreen />
  }

  return (
    <div className="absolute z-50 w-screen h-screen pointer-events-none">
      <Metrics />
      {/* <EmbedVideo /> */}
      <Sources />
    </div>
  )
}
