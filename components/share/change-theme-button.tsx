import React from 'react';
import {Pressable} from "react-native";
import useTheme from "@/store/theme";
import useChangeTheme from "@/hooks/useChangeTheme";
import {Moon, Sun} from "@/assets/icons/icons";

const ChangeThemeButton = () => {
    const {isDarkMode} = useTheme()
    const changeTheme = useChangeTheme();
    return (
        <Pressable onPress={() => changeTheme()}
                   className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
            {isDarkMode ? <Sun/> : <Moon/>}
        </Pressable>
    );
};

export default ChangeThemeButton;