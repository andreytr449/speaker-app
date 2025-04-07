import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import ChangeThemeButton from "@/components/share/change-theme-button";
import useTheme from "@/store/theme";
import {router} from "expo-router";

const AuthHeader = () => {
    const {isDarkMode} = useTheme()
    const imgPath = isDarkMode ? require('@/assets/icons/arrow_left_light.png') : require('@/assets/icons/arow_left_dark.png')
    return (
       <View className='flex-row justify-between align-items-center mx-5 mt-5'>
           <Pressable onPress={() => router.back()}>
           <Image source={imgPath} />
           </Pressable>
           <ChangeThemeButton />
       </View>
    );
};

export default AuthHeader;