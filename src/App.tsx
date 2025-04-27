import { Provider } from "react-redux";
import RootStack from "./navigation/RootStack";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import useLoadFonts from "./hooks/useLoadFonts";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

export default function App() {
  const fontsLoaded = useLoadFonts();

  useEffect(() => {
    async function hideSplash() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }
    hideSplash();
  }, [fontsLoaded]);
  if (!fontsLoaded) return null;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootStack />
      </PersistGate>
    </Provider>
  );
}
