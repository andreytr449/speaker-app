import React from 'react';
import {Pressable, PressableProps, Text} from "react-native";

interface ButtonProps extends PressableProps {
    children: React.ReactNode;
    className?: string;
    textClassName?: string;
    fullCustomClassName?: string;
    fullCustomTextClassName?: string;
}


const Button = ({ children, className, textClassName, fullCustomClassName,fullCustomTextClassName, ...rest }: ButtonProps) => {
    return (
        <Pressable
            {...rest}
            className={fullCustomClassName ? fullCustomClassName :`${className} bg-primary mx-4 justify-center items-center py-3 rounded-[12px] pressed:opacity-80`}
        >
            <Text className={fullCustomTextClassName ? fullCustomTextClassName : `text-title-large text-body-primary-dark ${textClassName ?? ''}`}>
                {children}
            </Text>
        </Pressable>
    );
};

export default Button;