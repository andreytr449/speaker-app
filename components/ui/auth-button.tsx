import React from 'react';
import {Pressable, PressableProps, Text} from "react-native";
import useTheme from "@/store/theme";

interface ButtonProps extends PressableProps {
    children: React.ReactNode;
    className?: string;
    textClassName?: string;
    icon?: React.ReactNode;
}


const AuthButton = ({ children, className, textClassName,icon,   ...rest }: ButtonProps) => {
    const {isDarkMode} = useTheme()

    return (
        <Pressable
            {...rest}
            className={`${isDarkMode ? 'bg-surfaces-dark-2': 'bg-surfaces-light-2'} flex-row gap-3 mx-4 justify-center items-center py-3 rounded-[12px] pressed:opacity-80`}
        >
            {icon && icon}
            <Text className={`text-title-medium  ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} ${textClassName ?? ''}`}>
                {children}
            </Text>
        </Pressable>
    );
};

export default AuthButton;