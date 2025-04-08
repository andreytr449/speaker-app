import React from 'react';
import {Pressable, Text, View} from "react-native";
import {ArrowRightDark, ArrowRightLight} from "@/assets/icons/icons";
import useTheme from "@/store/theme";

type Props = {
    Flag: React.ReactElement;
    name: string
    onPress?: () => void
    isSelected: boolean
}

const LanguageCard = ({Flag, name, onPress, isSelected}: Props) => {
    const {isDarkMode} = useTheme()
    let cardStyle = isDarkMode ? 'bg-surfaces-dark-1 border-border-dark' : 'bg-surfaces-light-1 border-border-light'
    if(isSelected)
        cardStyle = isDarkMode ? 'bg-surfaces-dark-2 border-primary' : 'bg-surfaces-light-2 border-primary'
    return (
        <Pressable
            className={`flex-row justify-between items-center p-6 ${cardStyle} rounded-[12px] mb-6  border-[1px]`}
            onPress={onPress}>
            <View className='flex-row items-center gap-3'>
                {Flag}
                <Text
                    className={`${!isDarkMode ? 'text-bg-dark' : 'text-bg-light'} text-label-medium`}>{name}</Text>
            </View>
            {isDarkMode ?
                <ArrowRightLight/>
                :
                <ArrowRightDark/>
            }
        </Pressable>
    );
};

export default LanguageCard;