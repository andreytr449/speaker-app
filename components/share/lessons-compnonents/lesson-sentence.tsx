import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {selectedAnswer} from "@/screens/app/lesson/lesson.screen";

const LessonSentence = ({text, questions, onPress}: {
    text: string,
    questions: selectedAnswer[],
    onPress: (question: string, correct: boolean) => void,
}) => {
    const {isDarkMode} = useTheme()
    const [selectedAnswer, setSelectedAnswer] = useState<number | undefined>()
    const handlePress = (correct: boolean, question: string, index: number) => {
        onPress(question, correct)
        setSelectedAnswer(index)
    }
    return (
        <View className='gap-3 my-3'>
            <Text
                className={` ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-large`}>{text}</Text>
            <View className='flex-row gap-2'>
                {questions.map((question, index) => (
                    <Pressable key={'question-' + index}
                               onPress={() => handlePress(question.correct, question.question, index)}
                               className={`rounded-[12px] px-4 py-1 ${selectedAnswer === index ? 'bg-primary' : isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}`}>
                        <Text
                            className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-small`}>{question.question}</Text>
                    </Pressable>
                ))}
            </View>
        </View>
    );
};

export default LessonSentence;