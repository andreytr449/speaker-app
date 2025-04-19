import React from 'react';
import {Text, View} from "react-native";
import {todayTaskType} from "@/constans";
import useTheme from "@/store/theme";
import {
    AnswerIcon,
    AnswerIconDark,
    ImageIcon,
    ImageIconDark, TranslateIcon, TranslateIconDark
} from "@/assets/icons/icons";

const TodayTaskBox = ({title, count, type}: todayTaskType) => {
    const {isDarkMode} = useTheme()
    let boxIcon
    switch (type) {
        case 'answer':
            boxIcon = isDarkMode ? <AnswerIconDark /> : <AnswerIcon />
            break;
        case 'image':
            boxIcon = isDarkMode ? <ImageIconDark /> : <ImageIcon />
            break;
        case 'record':
            boxIcon = isDarkMode ? <TranslateIconDark /> : <TranslateIcon />
            break;
    }
    return (
        <View
            className="h-[110px] w-[110px] gap-5 bg-primary rounded-[12px] px-3 py-2 relative overflow-hidden">
            <Text
                className="text-white text-left text-title-xs pr-1"
                numberOfLines={3}
                ellipsizeMode="tail"
            >
                {title}
            </Text>
            <View className='absolute bottom-0 left-3 justify-between flex-row w-full'>
                <Text
                    className="text-white text-left text-title-small  font-bold">
                    0/{count}
                </Text>
                {boxIcon}
            </View>
        </View>
    );
};

export default TodayTaskBox;
