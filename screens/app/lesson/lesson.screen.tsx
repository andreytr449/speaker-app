import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
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
import BottomSheet from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import LessonBottomSheet
    from "@/components/share/lessons-compnonents/lesson-bottom-sheet";
import NoLessonScreen from "@/screens/app/lesson/no-lesson-screen";


export type selectedAnswer = {
    question: string
    correct: boolean
}

const LessonScreen = () => {
    const {id} = useLocalSearchParams();
    const {isDarkMode} = useTheme();
    const [currentPage, setCurrentPage] = useState(0);
    const lesson = lessonData.filter((lesson: any) => lesson.lessonId === id);
    if (lesson.length === 0) return <NoLessonScreen/>;
    const selectedLesson = lesson[0];
    const isLessonFinished = currentPage >= selectedLesson.lessonData.length;

    const [selectedAnswer, setSelectedAnswer] = useState<selectedAnswer | undefined>();
    const lessonBottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['35%'], []);

    const progress = ((currentPage) * 100) / lesson[0].lessonData.length;


    useEffect(() => {
        setSelectedAnswer(undefined);
    }, [currentPage]);

    const handleOpenSheet = () => {
        if (selectedAnswer !== undefined)
            lessonBottomSheetRef.current?.expand();
    };

    const handleUpdatePage = () => {
        if (!isLessonFinished) {
            setCurrentPage(prev => prev + 1)
        } else {
            setCurrentPage(0);
            setSelectedAnswer(undefined);
        }
    }

    const handlePress = () => {
        if (!isLessonFinished) {
            const currentLesson = lesson[0].lessonData[currentPage];

            if (!currentLesson.isQuestion) {
                setCurrentPage(prev => prev + 1);
                return;
            }

            if (currentLesson.isQuestion && selectedAnswer === undefined) {
                Alert.alert(`Please answer: ${lesson[0].lessonData[currentPage].title}`);
                return;
            }

            handleOpenSheet()
        } else {
            router.navigate('/(tabs)/book')
        }
    };
    return (
        <GestureHandlerRootView
            className={`flex-1 pt-16 pb-10 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <SafeAreaView
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
                <View className="flex-1 justify-between px-5">
                    <ScrollView className="flex-grow">
                        <LessonHeader isDarkMode={isDarkMode}
                                      progressNumber={progress}/>

                        {isLessonFinished ? (
                            <CompletedLessonScreen/>
                        ) : (
                            <>
                                <Text
                                    className={`text-primary text-title-medium mb-4`}>
                                    {lesson[0].lessonData[currentPage].title}
                                </Text>
                                {lesson[0].lessonData[currentPage].lessonData.map((lesson: any, index: number) => {
                                    if (lesson.type === 'video') {
                                        return <LessonVideoPlayer
                                            videoSource={lesson.videoUri}
                                            key={index}/>;
                                    } else if (lesson.type === 'sentence') {
                                        return (
                                            <LessonSentence
                                                key={index}
                                                text={lesson.textData}
                                                questions={lesson.variants}
                                                onPress={(question, correct) => setSelectedAnswer({
                                                    question,
                                                    correct
                                                })}
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
                                ? 'Close'
                                : lesson[0].lessonData[currentPage]?.isQuestion
                                    ? 'Check'
                                    : 'Continue'}
                        </Button>
                    </View>
                </View>
            </SafeAreaView>
            {selectedAnswer !== undefined && (
                <LessonBottomSheet bottomSheetRef={lessonBottomSheetRef}
                                   description={
                                       selectedAnswer?.correct
                                           ? lesson[0].lessonData[currentPage]?.correctText ?? ''
                                           : lesson[0].lessonData[currentPage]?.wrongText ?? ''
                                   } updatePage={handleUpdatePage}
                                   selectedAnswer={selectedAnswer!}
                                   snapPoints={snapPoints}
                                   isDarkMode={isDarkMode}/>
            )}
        </GestureHandlerRootView>
    );
};


export default LessonScreen;