import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font"; //for enabling custom fonts
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); //makes the native splash screen visble until hideasync is called. when the app is initially loading the splash screen will be visible

const Layout = () => {
  const [fontsLoaded] = useFonts({
    DMBold: require("../assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("../assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("../assets/fonts/DMSans-Regular.ttf"),
  });

  const onLayoutRootVView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync(); //check if fonts have been loaded before loading the screen
    }
  }, [fontsLoaded]); //like a useEffect
  if (!fontsLoaded) return null; //if fonts are not loaded
  return <Stack onLayout={onLayoutRootVView} />; //if fonts are loaded
};

export default Layout;
