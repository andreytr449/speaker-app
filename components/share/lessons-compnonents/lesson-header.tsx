import React from 'react';
import {Text, View} from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';


const LessonHeader = ({isDarkMode, progressNumber}: {
    isDarkMode: boolean,
    progressNumber: number
}) => {
    return (
        <>
            <View className='flex-row justify-between items-center gap-3 mt-5 pb-3'>
                <AntDesign name="close" size={24}
                           color={isDarkMode ? "white" : "black"}/>

                <View className="relative flex-1 h-4">
                    <View
                        className={`${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} absolute w-full h-4 rounded-[12px]`}/>

                    <View
                        style={{width: `${progressNumber + 5 - 8}%`}}
                        className="absolute bg-primary h-4 rounded-[12px]"
                    />
                </View>
                <MaterialCommunityIcons name="dots-vertical" size={24}
                                        color={isDarkMode ? "white" : "black"}/>
            </View>
            <View className={`w-full h-[2px] mt-6 mb-4 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>

        </>
    );
};

export default LessonHeader;
