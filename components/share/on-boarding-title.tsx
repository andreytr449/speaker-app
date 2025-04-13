import React from 'react';
import { Text } from "react-native";
import useTheme from "@/store/theme";

const OnBoardingTitle = ({ children, classname }: { children: React.ReactNode, classname?: string }) => {
    const { isDarkMode } = useTheme();
    return (
        <Text
            className={`${classname} mt-3 text-title-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}
            numberOfLines={2}
            ellipsizeMode="tail"
        >
            {children}
        </Text>
    );
};

export default OnBoardingTitle;
