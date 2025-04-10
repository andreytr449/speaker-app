import React from 'react';
import {Image, Pressable, Text, View} from "react-native";
import ChangeThemeButton from "@/components/share/change-theme-button";
import useTheme from "@/store/theme";
import {router} from "expo-router";
import {LeftArrowDark, LeftArrowLight} from "@/assets/icons/icons";
import useUserStore from "@/store/user";

const AuthHeader = () => {
    const {isDarkMode} = useTheme()
    const {isLogged} = useUserStore()
    return (
        <View className={`flex-row ${isLogged ? 'flex-row justify-end mr-5 mt-5' : 'justify-between align-items-center'}  mx-5 mt-5`}>
            {!isLogged &&
							<Pressable onPress={() => router.back()}>
                  {isDarkMode ? <LeftArrowLight/> : <LeftArrowDark/>}
							</Pressable>
            }
            <ChangeThemeButton/>
        </View>
    );
};

export default AuthHeader;