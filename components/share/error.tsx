import React from 'react';
import {Text, Image, View} from "react-native";
import useTheme from "@/store/theme";

const Error = ({text}:{text?:string}) => {
    const {isDarkMode} = useTheme();

    return (
        <View
            className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} flex-1 justify-center items-center gap-5`}>
            <Image source={require('@/assets/images/error.gif')}
                   className="w-64 h-64"/>

            <Text className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-large`}>
                {text ? text : 'Something went wrong'}
            </Text>
        </View>
    );
};

export default Error;