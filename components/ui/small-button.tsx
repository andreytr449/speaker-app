import React from 'react';
import {Pressable} from "react-native";
import useTheme from "@/store/theme";

const SmallButton = ({onPress, icon}:{onPress?:() => void, icon: React.ReactNode}) => {
    const {isDarkMode} = useTheme()
    return (
        <Pressable onPress={onPress}
            className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
            {icon}
        </Pressable>
    );
};

export default SmallButton;