import React, {useState} from 'react';
import {Text, View} from "react-native";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import UserProgressCircle from "@/components/share/user-progress-circle";
import TabChatItem from "@/components/share/tab-chat-item";
import UserStreak from "@/components/share/user-streak";
import UserRating from "@/components/share/user-rating";
import {dummyUserProgress} from "../../constants";
import OffersButton from "@/components/share/offers-button";
import {DiscountIcon} from "@/assets/icons/icons";
import Button from "@/components/ui/button";

const ProfileScreenBody = ({isDarkMode}: { isDarkMode: boolean }) => {
    const [currentChildPage, setCurrentChildPage] = useState<'progress' | 'exercises' | 'corrections'>('progress')
    let userProgress = dummyUserProgress[0]
    if (currentChildPage === 'progress') {
        userProgress = dummyUserProgress[0]
    } else if (currentChildPage === 'exercises') {
        userProgress = dummyUserProgress[1]
    } else {
        userProgress = dummyUserProgress[2]
    }

    return (
        <>
            <View className='flex-row justify-between mb-3 items-center px-5'>
                <OnBoardingTitle classname='mt-0'>Friends</OnBoardingTitle>
                <Text
                    className={`mt-3 text-body-large text-primary`}>
                    0
                </Text>
            </View>

            <Button className='py-1'>Create daily task</Button>

            <View
                className={`h-auto border-b-2 mt-6 mb-1 px-5 ${isDarkMode ? 'border-border-dark' : 'border-border-light'} flex-row`}
            >
                <TabChatItem
                    className='h-auto'
                    isActive={currentChildPage === 'progress'}
                    title="Progress"
                    onPress={() => {setCurrentChildPage('progress')}}
                />
                <TabChatItem
                    className='h-12'
                    isActive={currentChildPage === 'exercises'}
                    title="Exercises"
                    onPress={() => {setCurrentChildPage('exercises')}}
                />
                <TabChatItem
                    className='h-12'
                    isActive={currentChildPage === 'corrections'}
                    title="Corrections"
                    onPress={() => {setCurrentChildPage('corrections')}}
                />
            </View>
            <UserProgressCircle fill={userProgress.fill}
                                fistBlock={userProgress.fistBlock}
                                bottomText={userProgress.bottomText}
                                secondBlock={userProgress.secondBlock}
                                isDarkMode={isDarkMode}/>
            <View className='px-5'>
                <View
                    className={`w-full h-[2px] my-6 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>
                <UserStreak isDarkMode={isDarkMode}/>
                <UserRating isDarkMode={isDarkMode}/>

            </View>
            <View className='px-4 my-2'>
                <OffersButton buttonTitle='7 days - Free'
                              title='Try Premium For Free'
                              bgIcon={<DiscountIcon/>} />
            </View>

        </>
    );
};

export default ProfileScreenBody;