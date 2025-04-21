import React from 'react';
import {Pressable, Text} from "react-native";
import useTheme from "@/store/theme";
import {cn} from "@/lib/utils";

const TabChatItem = ({isActive, title, onPress, className}:{isActive:boolean, title:String, onPress: () => void, className?:string}) => {
    const {isDarkMode} = useTheme()

    return (
        <Pressable onPress={onPress} className={cn(`flex-1 h-16 items-center justify-center rounded-t-[12px] ${isActive ? isDarkMode ? 'bg-surfaces-dark-2 border-b-2 border-b-primary' : 'bg-surfaces-light-2 border-b-2 border-b-primary' :''}`, className)}>
            <Text
                className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-small`}>{title}</Text>
        </Pressable>
    );
};

export default TabChatItem;