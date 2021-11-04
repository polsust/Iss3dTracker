import IssDataProvider from "./IssDataProvider";
import IssHoverProvider from "./IssHoverProvider";

export default function Providers({ children }) {
	return (
		<IssDataProvider>
			<IssHoverProvider>{children}</IssHoverProvider>
		</IssDataProvider>
	);
}
