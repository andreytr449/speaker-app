import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import useTheme from "@/store/theme";
import LessonHeader from "@/components/share/lessons-compnonents/lesson-header";

const LessonScreen = () => {
    const {id} = useLocalSearchParams();
    const {isDarkMode} = useTheme()

    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <ScrollView className='px-5'>
                <LessonHeader isDarkMode={isDarkMode} progressNumber={20} />
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium`}>
                    id: {id}
                </Text>

            </ScrollView>
        </SafeAreaView>
    );
};

export default LessonScreen;