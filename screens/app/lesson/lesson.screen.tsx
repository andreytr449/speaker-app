import React, {useEffect, useMemo, useRef, useState} from 'react';
import {Alert, SafeAreaView, ScrollView, Text, View, ActivityIndicator, Image} from "react-native";
import {router, useLocalSearchParams} from "expo-router";
import useTheme from "@/store/theme";
import LessonHeader from "@/components/share/lessons-compnonents/lesson-header";
import Button from "@/components/ui/button";
import LessonVideoPlayer from "@/components/share/lessons-compnonents/lesson-video-player";
import LessonSentence from "@/components/share/lessons-compnonents/lesson-sentence";
import CompletedLessonScreen from "@/screens/app/lesson/completed-lesson.screen";
import BottomSheet from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import LessonBottomSheet from "@/components/share/lessons-compnonents/lesson-bottom-sheet";
import NoLessonScreen from "@/screens/app/lesson/no-lesson-screen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {API} from "@/services/api";
import Loading from "@/components/share/loading";
import Error from "@/components/error";

export type selectedAnswer = {
    question: string;
    correct: boolean;
};

const LessonScreen = () => {
    const {id} = useLocalSearchParams();
    const {isDarkMode} = useTheme();

    const [lesson, setLesson] = useState<any[]>([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState<selectedAnswer | undefined>(undefined);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);

    const lessonBottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['35%'], []);

    useEffect(() => {
        const fetchLessonData = async () => {
            if (!id) return;
            setIsLoading(true);
            try {
                const token = await AsyncStorage.getItem('token');
                if (!token) {
                    router.replace('/auth/sign-in');
                    return;
                }
                const resp = await API.lesson.getLessonById(id as string, token);
                setLesson(resp?.data || []);
            } catch (error) {
                console.error('Fetch lesson error:', error);
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        };

        fetchLessonData();
    }, [id]);

    useEffect(() => {
        setSelectedAnswer(undefined);
    }, [currentPage]);

    if (isLoading) {
        return (
           <Loading text='Fetching lesson data...' />
        );
    }

    if (isError) {
        return (
           <Error />
        );
    }

    if (lesson.length === 0) {
        return <NoLessonScreen />;
    }

    const selectedLesson = lesson[0];
    const isLessonFinished = currentPage >= selectedLesson.lessonData.length;
    const progress = (currentPage * 100) / selectedLesson.lessonData.length;

    const handleOpenSheet = () => {
        if (selectedAnswer !== undefined) {
            lessonBottomSheetRef.current?.expand();
        }
    };

    const handleUpdatePage = () => {
        if (!isLessonFinished) {
            setCurrentPage(prev => prev + 1);
        } else {
            setCurrentPage(0);
            setSelectedAnswer(undefined);
        }
    };

    const handlePress = () => {
        if (!isLessonFinished) {
            const current = selectedLesson.lessonData[currentPage];
            if (!current.isQuestion) {
                setCurrentPage(prev => prev + 1);
                return;
            }
            if (current.isQuestion && selectedAnswer === undefined) {
                Alert.alert(`Please answer: ${current.title}`);
                return;
            }
            handleOpenSheet();
        } else {
            router.navigate('/(tabs)/book');
        }
    };

    return (
        <GestureHandlerRootView className={`flex-1 pt-16 pb-10 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <SafeAreaView className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
                <View className="flex-1 justify-between px-5">
                    <ScrollView className="flex-grow">
                        <LessonHeader isDarkMode={isDarkMode} progressNumber={progress} />

                        {isLessonFinished ? (
                            <CompletedLessonScreen />
                        ) : (
                            <>
                                <Text className="text-primary text-title-medium mb-4">
                                    {selectedLesson.lessonData[currentPage].title}
                                </Text>
                                {selectedLesson.lessonData[currentPage].lessonData.map((step: any, idx: number) => {
                                    if (step.type === 'video') {
                                        return <LessonVideoPlayer videoSource={step.videoUri} key={idx} />;
                                    }
                                    if (step.type === 'sentence') {
                                        return (
                                            <LessonSentence
                                                key={idx}
                                                text={step.textData}
                                                questions={step.variants}
                                                onPress={(question, correct) => setSelectedAnswer({ question, correct })}
                                            />
                                        );
                                    }
                                    return null;
                                })}
                            </>
                        )}
                    </ScrollView>

                    <View className="pb-4">
                        <Button onPress={handlePress}>
                            {isLessonFinished
                                ? 'Close'
                                : selectedLesson.lessonData[currentPage]?.isQuestion
                                    ? 'Check'
                                    : 'Continue'}
                        </Button>
                    </View>
                </View>
            </SafeAreaView>

            {selectedAnswer !== undefined && (
                <LessonBottomSheet
                    bottomSheetRef={lessonBottomSheetRef}
                    description={
                        selectedAnswer.correct
                            ? selectedLesson.lessonData[currentPage]?.correctText ?? ''
                            : selectedLesson.lessonData[currentPage]?.wrongText ?? ''
                    }
                    updatePage={handleUpdatePage}
                    selectedAnswer={selectedAnswer!}
                    snapPoints={snapPoints}
                    isDarkMode={isDarkMode}
                />
            )}
        </GestureHandlerRootView>
    );
};

export default LessonScreen;
