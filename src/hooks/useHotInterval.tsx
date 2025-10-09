import { useEffect } from "react"

/**
 * Like setInterval, but fires right on the start
 * @param callback
 * @param interval
 */
export default function useHotInterval(callback: () => void, interval: number) {
  useEffect(() => {
    callback()
    setInterval(() => callback(), interval)
  }, [])
}
