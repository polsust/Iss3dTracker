import "./App.sass";
import Scene3d from "./components/3d/Scene3d";
import Overlay from "./components/ui/Overlay";
import Providers from "./context/Providers";

function App() {
	return (
		<Providers>
			<Overlay />
			<Scene3d />
		</Providers>
	);
}

export default App;
