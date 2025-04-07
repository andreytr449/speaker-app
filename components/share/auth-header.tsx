import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import ChangeThemeButton from "@/components/share/change-theme-button";
import useTheme from "@/store/theme";
import {router} from "expo-router";
import {LeftArrowDark, LeftArrowLight} from "@/assets/icons/icons";

const AuthHeader = () => {
    const {isDarkMode} = useTheme()
    return (
       <View className='flex-row justify-between align-items-center mx-5 mt-5'>
           <Pressable onPress={() => router.back()}>
               {isDarkMode ? <LeftArrowLight /> : <LeftArrowDark />}
           </Pressable>
           <ChangeThemeButton />
       </View>
    );
};

export default AuthHeader;