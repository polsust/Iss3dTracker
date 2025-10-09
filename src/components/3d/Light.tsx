import { useRef } from "react"

function Light() {
  const light = useRef(null)

  return <pointLight position={[10, 5, 6]} intensity={1} ref={light} />
}

export default Light
