import React from 'react';
import { Pressable, View, Text } from 'react-native';
import useTheme from '@/store/theme';
import { ArrowRightDark, ArrowRightLight } from '@/assets/icons/icons';

const LanguageLevelCard = ({
                               short,
                               full,
                               isSelected,
                               onPress,
                           }: {
    short: string;
    full: string;
    isSelected: boolean;
    onPress: () => void;
}) => {
    const { isDarkMode } = useTheme();

    return (
        <Pressable
            onPress={onPress}
            className={`
        flex-row justify-between items-center px-5 py-3 mb-2 rounded-[12px]
        border ${
                isSelected
                    ? `border-primary  ${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}`
                    : 'border-transparent'
            } 
   
      `}
        >
            <View className="flex-row items-center gap-2">
                <Text
                    className={`text-title-medium ${
                        isDarkMode ? 'text-bg-light' : 'text-bg-dark'
                    }`}
                >
                    {short.toUpperCase()}
                </Text>
                <Text
                    className={`text-title-medium ${
                        isDarkMode ? 'text-bg-light' : 'text-bg-dark'
                    }`}
                >
                    -
                </Text>
                <Text
                    className={`text-title-medium ${
                        isDarkMode ? 'text-bg-light' : 'text-bg-dark'
                    }`}
                >
                    {full}
                </Text>
            </View>
            {isDarkMode ? <ArrowRightLight /> : <ArrowRightDark />}
        </Pressable>
    );
};

export default LanguageLevelCard;
