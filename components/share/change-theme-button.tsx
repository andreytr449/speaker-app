import React from 'react';
import {Image, Pressable} from "react-native";
import useTheme from "@/store/theme";
import useChangeTheme from "@/hooks/useChangeTheme";

const ChangeThemeButton = () => {
    const {isDarkMode} = useTheme()
    const changeTheme = useChangeTheme();
    return (
        <Pressable onPress={() => changeTheme()}
                   className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
            {isDarkMode ? <Image source={require('@/assets/icons/sun.png')}/> :
                <Image source={require('@/assets/icons/moon.png')}/>}
        </Pressable>
    );
};

export default ChangeThemeButton;