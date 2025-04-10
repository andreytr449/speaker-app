import React, {useState} from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import DailyTimePicker from "@/components/share/daily-time-picker";
import Button from "@/components/ui/button";
import {minutesVariants} from "@/constans";


const SelectDailyTimeScreen = () => {
    const {isDarkMode} = useTheme();
    const [activeIndex, setActiveIndex] = useState(1);

    return (
        <View
            className={`flex-1 gap-3 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
            <View>

                <View className='px-5'>
                    <OnBoardingTitle>How long do you want to exercise per
                        day?</OnBoardingTitle>
                    <Text
                        className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-body-medium my-4`}>
                        For you level, it's recommended to practice 10 minutes a day.
                    </Text>
                </View>
                <DailyTimePicker DATA={minutesVariants} setActiveIndex={setActiveIndex}/>
            </View>
            <View style={{marginBottom: 15}}>
                <Button>Continue (<Text className='font-semibold'>{minutesVariants[activeIndex]}</Text> min/day)</Button>
            </View>
        </View>
    );
};

export default SelectDailyTimeScreen;