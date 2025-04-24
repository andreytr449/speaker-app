import React from 'react';
import {View, Text} from "react-native";
import useTheme from "@/store/theme";

const InfoCard = ({title, icon}:{title:string, icon: React.ReactNode}) => {
    const {isDarkMode} = useTheme()
    return (
        <View className={`px-7 py-3 gap-3 rounded-[12px] h-[70px] w-auto justify-center items-center  ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}>
            {icon}
            <Text className={`text-body-small font-extralight ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>{title}</Text>
        </View>
    );
};

export default InfoCard;