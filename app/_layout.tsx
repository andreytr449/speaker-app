import "../global.css"
import {useFonts} from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {Stack} from "expo-router";
import {useEffect, useState} from "react";
import {StatusBar, useColorScheme} from "react-native";
import useTheme from "@/store/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
    const [fontsLoaded] = useFonts({
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

    const colorScheme = useColorScheme();
    const {toggleTheme, isDarkMode} = useTheme();

    useEffect(() => {
        async function prepare() {
            const userTheme = await AsyncStorage.getItem('appTheme');
            console.log(userTheme)
            if (!userTheme) {
                console.log('NO USER THEME :(')
                const theme = colorScheme === 'dark' ? 'dark' : 'light'
                await AsyncStorage.setItem('appTheme', theme);
                toggleTheme(theme);
            } else {
                console.log('YES USER THEME :)')
                toggleTheme(userTheme as 'dark' | 'light');
            }
        }

        prepare().then()

    }, []);

    useEffect(() => {
        if (fontsLoaded) {
            SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }

    return (
        <>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'}/>
            <Stack screenOptions={{headerShown: false}}>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </>
    )
}
