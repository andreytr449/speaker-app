import React from 'react';
import OnBoardingTitle from "@/components/share/on-boarding-title";
import SmallButton from "@/components/ui/small-button";
import {SearchIcon} from "@/assets/icons/icons";
import {View} from "react-native";
import useTheme from "@/store/theme";

const AppHeader = ({title}: {title:string}) => {
    const { isDarkMode } = useTheme()

    return (
        <View className='flex-row justify-between mt-1 mb-4'>
            <OnBoardingTitle>{title}</OnBoardingTitle>
            <SmallButton icon={<SearchIcon isDark={isDarkMode}/>}/>
        </View>
    );
};

export default AppHeader;