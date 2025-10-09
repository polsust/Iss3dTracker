import IssDataProvider from "./IssDataProvider";
import Iss3dObjectDataProvider from "./Iss3dObjectDataProvider";

export default function Providers({ children }) {
  return (
    <IssDataProvider>
      <Iss3dObjectDataProvider>{children}</Iss3dObjectDataProvider>
    </IssDataProvider>
  );
}
