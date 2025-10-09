import { createContext, useState } from "react";

interface Iss3dObjectDataProperties {
  isCameraFollowing: boolean;
  setIsCameraFollowing: (isCursorHovering: boolean) => void;
  issScreenPosition: {
    x: number;
    y: number;
  };
  setIssScreenPosition: (issScreenPosition: { x: number; y: number }) => void;
}

export const Iss3dObjectDataContext =
  createContext<Iss3dObjectDataProperties>(null);

export default function Iss3dObjectDataProvider({ children }) {
  const [isCameraFollowing, setIsCameraFollowing] = useState<boolean>(true);
  const [issScreenPosition, setIssScreenPosition] = useState({ x: 0, y: 0 });

  return (
    <Iss3dObjectDataContext.Provider
      value={{
        isCameraFollowing,
        setIsCameraFollowing,
        issScreenPosition,
        setIssScreenPosition,
      }}
    >
      {children}
    </Iss3dObjectDataContext.Provider>
  );
}
