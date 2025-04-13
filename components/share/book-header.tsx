import React from 'react';
import {Text, View} from "react-native";
import {UKFlagRounded} from "@/assets/images/images";
import {BellIcon, FireIcon, StarIcon} from "@/assets/icons/icons";
import useTheme from "@/store/theme";

const BookHeader = () => {
    const {isDarkMode} = useTheme()

    return (
        <View className='flex-row justify-between items-center mr-3'>
            <View className='rounded-full overflow-hidden w-[50px] h-[50px]'>
                <UKFlagRounded/>
            </View>
            <View className='flex-row gap-5 w-auto items-center'>
                <View className='flex-row gap-2 items-center'>
                    <FireIcon isDark={isDarkMode}/>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-large`}>0</Text>
                </View>
                <View className='flex-row gap-2 items-center'>
                    <StarIcon isDark={isDarkMode}/>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-large`}>0
                        / 20</Text>
                </View>
                <View>
                    <BellIcon isDark={isDarkMode}/>
                </View>
            </View>
        </View>
    );
};

export default BookHeader;