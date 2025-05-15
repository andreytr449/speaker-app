import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";
import ChapterCard from "@/components/share/chapter-card";
import ChapterTestCard from "@/components/share/chapter-test-card";
import {Topic} from "@/types/topic.types";

const Chapter = ({chapterTitle, chapterName, isLock, onCardPress, topics}: {
    chapterTitle: string
    chapterName: string
    isLock?: boolean
    onCardPress: () => void
    topics: Topic[]
}) => {
    const {isDarkMode} = useTheme()
    return (
        <View className='my-10 gap-5'>
            <View className='flex-row justify-between items-center'>
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium`}>{chapterTitle} 📚</Text>
                <View
                    className={`${isDarkMode ? 'bg-surfaces-light-1' : 'bg-surfaces-dark-1'} w-6 h-[2px]`}/>
                <Text
                    className='text-primary text-title-medium'>{chapterName}</Text>
            </View>
            <View className='flex-row justify-between items-center'>
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-medium`}>Lessons
                    completed</Text>
                <Text className='text-primary text-body-medium'>0/5</Text>
            </View>

            {topics.map((topic, index) => (
                <ChapterCard key={index + chapterTitle} title={topic.title}
                             imgUri={topic.imgUri} isLock={isLock}
                             id={topic._id}
                             description={topic.description}
                             isActive={isLock ? index === 0 : index === 1}
                             isLast={index === topics.length - 1}
                             onPress={onCardPress}
                />
            ))}
            <ChapterTestCard title='Test work'
                             description='Test your skills to unlock the next chapter'
                             isLock={isLock}
            />
        </View>
    );
};

export default Chapter;