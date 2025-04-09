import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import useTheme from "@/store/theme";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import {router} from "expo-router";
import OnBoardingTitle from "@/components/share/on-boarding-title";

const CreateUsernameScreen = () => {
    const {isDarkMode} = useTheme()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
                <View className='px-5 w-full'>
                   <OnBoardingTitle>Create your User Name</OnBoardingTitle>
                    <Input label='User Name' placeholder='username001'/>
                    <View className='max-w-[80%]'>
                    <Text
                        className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-body-medium`}>
                       Create a unique username, you can use number from 0 to 9 and underscores and dashes
                    </Text>
                    </View>
                </View>

                <View className='w-full px-1 py-2'>
                    <Button onPress={() => router.push({pathname: '/auth/password-from', params: {}})}>Continue</Button>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateUsernameScreen;