import * as Font from "expo-font";
import { useEffect, useState } from "react";

export default function useLoadFonts() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function load() {
      try {
        await Font.loadAsync({
          "Rubik-Light": require("../../assets/fonts/Rubik-Light.ttf"),
          "Rubik-Regular": require("../../assets/fonts/Rubik-Regular.ttf"),
          "Rubik-Medium": require("../../assets/fonts/Rubik-Medium.ttf"),
          "Rubik-SemiBold": require("../../assets/fonts/Rubik-SemiBold.ttf"),
          "Rubik-Bold": require("../../assets/fonts/Rubik-Bold.ttf"),
          "Rubik-ExtraBold": require("../../assets/fonts/Rubik-ExtraBold.ttf"),

          "SF-Pro-Text-Regular": require("../../assets/fonts/SF-Pro-Text-Regular.otf"),
          "SF-Pro-Text-Bold": require("../../assets/fonts/SF-Pro-Text-Bold.otf"),

          "Visbycf-heavy": require("../../assets/fonts/Visbycf-heavy.otf"),
        });

        setFontsLoaded(true);
      } catch (err) {
        console.error("Font loading error:", err);
      }
    }

    load();
  }, []);

  return fontsLoaded;
}
