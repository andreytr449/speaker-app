import React from 'react';
import {Pressable, Text} from "react-native";
import useTheme from "@/store/theme";

const TabChatItem = ({isActive, title, onPress}:{isActive:boolean, title:String, onPress: () => void}) => {
    const {isDarkMode} = useTheme()

    return (
        <Pressable onPress={onPress} className={`flex-1 h-16 items-center justify-center rounded-t-[12px] mx-6 ${isActive ? isDarkMode ? 'bg-surfaces-dark-2 border-b-2 border-b-primary' : 'bg-surfaces-light-2 border-b-2 border-b-primary' :''}`}>
            <Text
                className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-small`}>{title}</Text>
        </Pressable>
    );
};

export default TabChatItem;