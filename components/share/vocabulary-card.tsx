import React from 'react';
import {Image, View, Text} from "react-native";
import useTheme from "@/store/theme";

const VocabularyCard = ({title, imgUri}: { title: string, imgUri: string }) => {
    const {isDarkMode} = useTheme()
    return (
        <View className='mt-5'>
            <View className={`flex-row justify-between px-5 py-3 ${isDarkMode ? 'bg-surfaces-dark-1 border-border-dark' : 'bg-surfaces-light-1 border-border-light'} rounded-[12px]`}>
                <View className='flex-row gap-2'>
                    <Image source={{uri: imgUri}} className='w-16 h-16 rounded-full'/>
                    <View className='max-w-[40%]'>
                    <Text
                        className={`mt-3 text-center text-body-medium ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                        {title}
                    </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default VocabularyCard;