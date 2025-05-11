import React, {useEffect, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View} from "react-native";
import {useLocalSearchParams} from "expo-router";
import useTheme from "@/store/theme";
import LessonHeader from "@/components/share/lessons-compnonents/lesson-header";
import {lessonData} from "@/constans";
import Button from "@/components/ui/button";
import LessonVideoPlayer
    from "@/components/share/lessons-compnonents/lesson-video-player";
import LessonSentence
    from "@/components/share/lessons-compnonents/lesson-sentence";
import CompletedLessonScreen
    from "@/screens/app/lesson/completed-lesson.screen";

export type selectedAnswer = {
    question: string
    correct: boolean
}

const LessonScreen = () => {
    const { id } = useLocalSearchParams();
    const { isDarkMode } = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    const lesson = lessonData.filter((lesson: any) => lesson.lessonId === id);
    const [selectedAnswer, setSelectedAnswer] = useState<selectedAnswer | undefined>();

    const isLessonFinished = currentPage >= lesson[0].lessonData.length;

    useEffect(() => {
        setSelectedAnswer(undefined);
    }, [currentPage]);

    const handlePress = () => {
        if (!isLessonFinished) {
            const currentLesson = lesson[0].lessonData[currentPage];

            if (currentLesson.isQuestion && selectedAnswer === undefined) {
                Alert.alert(`Please answer: ${lesson[0].lessonData[currentPage].title}`);
                return;
            }

            setCurrentPage(prev => prev + 1);
        } else {
            // Почати знову
            setCurrentPage(0);
            setSelectedAnswer(undefined);
        }
    };

    if (lesson.length === 0) return null;

    const progress = ((currentPage) * 100) / lesson[0].lessonData.length;

    return (
        <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <View className="flex-1 justify-between px-5">
                <ScrollView className="flex-grow">
                    <LessonHeader isDarkMode={isDarkMode} progressNumber={progress} />

                    {isLessonFinished ? (
                       <CompletedLessonScreen />
                    ) : (
                        <>
                            <Text className={`text-primary text-title-medium mb-4`}>
                                {lesson[0].lessonData[currentPage].title}
                            </Text>
                            {lesson[0].lessonData[currentPage].lessonData.map((lesson: any, index: number) => {
                                if (lesson.type === 'video') {
                                    return <LessonVideoPlayer videoSource={lesson.videoUri} key={index} />;
                                } else if (lesson.type === 'sentence') {
                                    return (
                                        <LessonSentence
                                            key={index}
                                            text={lesson.textData}
                                            questions={lesson.variants}
                                            onPress={(question, correct) => setSelectedAnswer({ question, correct })}
                                        />
                                    );
                                }
                            })}
                        </>
                    )}
                </ScrollView>

                <View className="pb-4">
                    <Button onPress={handlePress}>
                        {isLessonFinished
                            ? 'Start Over'
                            : lesson[0].lessonData[currentPage]?.isQuestion
                                ? 'Check'
                                : 'Continue'}
                    </Button>

                </View>
            </View>
        </SafeAreaView>
    );
};


export default LessonScreen;