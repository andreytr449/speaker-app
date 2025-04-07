import React from 'react';
import {Text, TextInput, TextInputProps, View} from "react-native";
import useTheme from "@/store/theme";

interface InputProps extends TextInputProps {
    className?: string;
    label?: string;
}


const Input = ({ className, label, ...rest }:InputProps) => {
    const {isDarkMode} = useTheme()
    let styles = isDarkMode ? 'bg-surfaces-dark-1 border-border-dark' : 'bg-surfaces-light-1 border-border-light'
    return (
        <View className='my-3'>
            <Text className={`text-body-small ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>{label}</Text>
        <TextInput className={`${styles}  rounded-[12px] border py-3 px-4`} placeholderTextColor={isDarkMode ? '#4C4C4C' :'#D7D7D7'} {...rest} />
        </View>
    );
};

export default Input;