import { Suspense } from "react";
import "./App.sass";
import Scene3d from "./components/3d/Scene3d";
import LoadingScreen from "./components/ui/LoadingScreen";
import Overlay from "./components/ui/Overlay";
import Providers from "./context/Providers";

function App() {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Providers>
        <Overlay />
        <Scene3d />
      </Providers>
    </Suspense>
  );
}

export default App;
