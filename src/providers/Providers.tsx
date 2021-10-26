import React from "react";
import IssDataProvider from "./IssDataProvider";

export default function Providers({ children }) {
	return <IssDataProvider>{children}</IssDataProvider>;
}
