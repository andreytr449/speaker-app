import React from 'react';
import {Image, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {DailyQuestion} from "../../constants";
import Button from "@/components/ui/button";
import Entypo from '@expo/vector-icons/Entypo';
import AudioPlayer from "@/components/share/audio-player";


const QuestionCard = ({
                          question,
                          userName,
                          userImgUri,
    img,
    audio,
                          type
                      }: DailyQuestion) => {
    const {isDarkMode} = useTheme()
    return (
        <View
            className={`h-auto p-5 gap-5 w-full rounded-[12px] mb-4 border bg-transparent ${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}>
            <View className='flex-row justify-between'>

                <View className='flex-row gap-3 items-center'>
                    <Image source={{uri: userImgUri}}
                           className='w-[40px] h-[40px] rounded-full'/>
                    <View className=''>
                    <Text className={`text-title-medium ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>{userName}</Text>
                    <Text className={`text-body-small ${isDarkMode ? 'text-body-secondary-dark' : 'text-body-secondary-light'}`}>Learn and become better!</Text>
                    </View>
                </View>
                <Entypo name="dots-three-horizontal" size={24} color={isDarkMode ? '#4C4C4C' : '#D7D7D7'} />
            </View>

            {img &&
            <Image source={{uri: img}} className='w-full h-40 rounded-[12px]' />
            }
            {audio &&
	           <AudioPlayer uri={audio} />
            }
            <Text
                className={`text-body-medium ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} font-medium`}>
                {question}
            </Text>
            <View className='flex-row gap-4'>
                <View className='flex-1'>
                    <Button
                        fullCustomClassName='bg-green justify-center items-center py-2 rounded-[12px]'>Correct</Button>
                </View>
                <View className='flex-1'>
                    <Button
                        fullCustomClassName='bg-red justify-center items-center py-2 rounded-[12px]'>Uncorrected</Button>
                </View>
            </View>
        </View>
    );
};

export default QuestionCard;