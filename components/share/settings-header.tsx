import React from 'react';
import {Pressable, View} from "react-native";
import {router} from "expo-router";
import {LeftArrowDark, LeftArrowLight} from "@/assets/icons/icons";
import useTheme from "@/store/theme";
import OnBoardingTitle from "@/components/share/on-boarding-title";

const SettingsHeaderComponent = () => {
    const {isDarkMode} = useTheme();

    return (
       <View className='w-full px-5 py-1 flex-row gap-2 items-center'>
           <Pressable className='items-center justify-center pt-3' onPress={() => router.push('/(tabs)/profile')}>
               {isDarkMode ? <LeftArrowLight/> : <LeftArrowDark/>}
           </Pressable>
           <OnBoardingTitle>Settings</OnBoardingTitle>
       </View>
    );
};

export default SettingsHeaderComponent;