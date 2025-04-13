import React from 'react';
import { Text, View } from 'react-native';
import useTheme from "@/store/theme";

const UserProgress = () => {
    const { isDarkMode } = useTheme();
    const progress = 11;

    return (
        <View className="relative w-full h-4">
            <View className={`${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} absolute w-full h-4 rounded-[12px]`} />

            <View
                style={{ width: `${progress + 5 - 8}%` }}
                className="absolute bg-primary h-4 rounded-[12px]"
            />

            <View
                style={{ left: `${progress - 8}%`, top: '-25%' }}
                className="bg-primary absolute h-6 w-auto px-2 rounded-[12px] justify-center items-center"
            >
                <Text className="text-bg-light">{progress}%</Text>
            </View>
        </View>
    );
};

export default UserProgress;
