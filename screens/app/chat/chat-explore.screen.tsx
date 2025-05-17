import React from 'react';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    View,
    Text
} from 'react-native';
import TodayTasks from '@/components/share/today-tasks';
import useTheme from '@/store/theme';
import QuestionCard from "@/components/share/question-card";
import {dummyQuestions} from "../../../constants";

type Props = {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ChatExploreScreen: React.FC<Props> = ({onScroll}) => {
    const {isDarkMode} = useTheme();
    return (
        <>
            <FlatList
                data={dummyQuestions}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => (
                    <QuestionCard
                        question={item.question}
                        type={item.type}
                        userImgUri={item.userImgUri}
                        userName={item.userName}
                        img={item.img}
                        audio={item.audio}
                    />
                )}
                ListHeaderComponent={
                    <View>
                        <TodayTasks/>
                        <Text className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium my-5`}>Complete daily tasks to get bonus! 👑</Text>
                    </View>
                }
                onScroll={onScroll}
                scrollEventThrottle={16}
            />
        </>
    );
};

export default ChatExploreScreen;
