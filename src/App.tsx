import { Suspense } from "react";
import "./App.sass";
import Scene3d from "./components/3d/Scene3d";
import Overlay from "./components/ui/Overlay";
import Providers from "./context/Providers";

function App() {
	return (
		<Suspense
			fallback={
				<p className="text-gray-50 h-screen w-full flex justify-center items-center">
					Loading...
				</p>
			}
		>
			<Providers>
				<Overlay />
				<Scene3d />
			</Providers>
		</Suspense>
	);
}

export default App;
