import React, { createContext, useState } from "react";

export const IssHoverContext = createContext(null);

export default function IssHoverProvider({ children }) {
	const [isHovering, setIsHovering] = useState<boolean>(false);

	return (
		<IssHoverContext.Provider value={{ isHovering, setIsHovering }}>
			{children}
		</IssHoverContext.Provider>
	);
}
