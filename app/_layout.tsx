import "../global.css"
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { Stack } from "expo-router";
import {useEffect} from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    'SF_Pro_Display_Bold': require('../assets/fonts/SF_Pro_Display_Bold.otf'),
    'SF_Pro_Display_Heavy_Italic': require('../assets/fonts/SF_Pro_Display_Heavy_Italic.otf'),
    'SF_Pro_Display_Light_Italic': require('../assets/fonts/SF_Pro_Display_Light_Italic.otf'),
    'SF_Pro_Display_Medium': require('../assets/fonts/SF_Pro_Display_Medium.otf'),
    'SF_Pro_Display_Regula': require('../assets/fonts/SF_Pro_Display_Regula.otf'),
    'SF_Pro_Display_Semibold_Italic': require('../assets/fonts/SF_Pro_Display_Semibold_Italic.otf'),
    'SF_Pro_Display_Thin_Italic': require('../assets/fonts/SF_Pro_Display_Thin_Italic.otf'),
    'SF_Pro_Display_Ultralight_Italic': require('../assets/fonts/SF_Pro_Display_Ultralight_Italic.otf'),
    'SF_Pro_Italic': require('../assets/fonts/SF_Pro_Italic.otf'),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }


  return <Stack />;
}
