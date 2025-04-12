import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";
import {chapterDummyData} from "@/constans";
import ChapterCard from "@/components/share/chapter-card";
import ChapterTestCard from "@/components/share/chapter-test-card";

const Chapter = ({chapterTitle, chapterName}: {
    chapterTitle: string,
    chapterName: string
}) => {
    const {isDarkMode} = useTheme()
    return (
        <View className='my-10 gap-5'>
            <View className='flex-row justify-between items-center'>
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium`}>{chapterTitle}</Text>
                <View className={`${isDarkMode ? 'bg-surfaces-light-1' : 'bg-surfaces-dark-1'} w-6 h-[2px]`}/>
                <Text className='text-primary text-title-medium'>{chapterName}</Text>
            </View>
            <View className='flex-row justify-between items-center'>
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-medium`}>Lessons completed</Text>
                <Text className='text-primary text-body-medium'>0/5</Text>
            </View>

            {chapterDummyData.map((item, index) => (
                <ChapterCard key={index + chapterTitle} title={item.title} imgUri={item.imgUri} isActive={index === 0} isLast={index === chapterDummyData.length - 1} />
            ))}
            <ChapterTestCard title='Test work' description='Test your skills to unlock the next chapter' />
        </View>
    );
};

export default Chapter;