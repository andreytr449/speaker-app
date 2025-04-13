import React from 'react';
import {View} from "react-native";
import useTheme from "@/store/theme";

const TabBarIconLayout = ({icon, focused}:{icon:React.ReactNode, focused:boolean}) => {
    const {isDarkMode} = useTheme()
    return (
       <View className={focused ? `px-7 py-2 rounded-[12px] ${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}` : ''}>
           {icon}
       </View>
    );
};

export default TabBarIconLayout;