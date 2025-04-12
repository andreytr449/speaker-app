import React from 'react';
import useTheme from "@/store/theme";
import {Pressable, SafeAreaView, ScrollView, Text, View} from "react-native";
import BookHeader from "@/components/share/book-header";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import UserProgress from "@/components/share/user-progress";
import {MarkIcon} from "@/assets/icons/icons";

const BookScreen = () => {
    const {isDarkMode} = useTheme()

    return (
        <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} `}>
            <ScrollView className='px-5 mt-5'>
                <BookHeader/>
                <View className='my-5 flex-row justify-between'>
                    <OnBoardingTitle>Intermediate - B1</OnBoardingTitle>
                    <Pressable
                        className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
                        <MarkIcon isDark={isDarkMode}/>
                    </Pressable>
                </View>
                <UserProgress/>

            </ScrollView>
        </SafeAreaView>
    );
};

export default BookScreen;