import React from 'react';
import useTheme from "@/store/theme";
import {View, Text} from "react-native";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import {CalendarIcon, SuccessIcon} from "@/assets/icons/icons";

const DayOfWeekCard = ({isActive, currentDay}: { isActive: boolean, currentDay:string }) => {
    const {isDarkMode} = useTheme()
    let bg = isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'
    if (isActive)
        bg = 'bg-primary'
    return (
        <View className='justify-center items-center'>
            <View className={`p-3 rounded-[12px] ${bg}`}>
                <SuccessIcon/>
            </View>
            <Text className={`${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'} font-bold`}>{currentDay}</Text>
        </View>
    )
}


const UserStreak = ({isDarkMode}:{isDarkMode:boolean}) => {
    const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
    const streakCount = 3
    return (
        <View className='gap-4'>
            <OnBoardingTitle>Study days</OnBoardingTitle>
            <View className='flex-row justify-between'>
                {daysOfWeek.map((day, index) => (
                    <DayOfWeekCard key={day} currentDay={day} isActive={index <= streakCount}/>
                ))}
            </View>
            <View className='flex-row gap-2 justify-center items-center my-2'>
                <CalendarIcon isDark={isDarkMode} />
               <Text className={`text-primary text-body-medium font-bold`}>{streakCount}</Text>
               <Text className={` ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'} text-body-medium`}>Active day</Text>
            </View>
        </View>
    );
};

export default UserStreak;