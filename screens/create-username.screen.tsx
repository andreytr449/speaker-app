import React, {useState} from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import useTheme from "@/store/theme";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import {router} from "expo-router";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import useAuthStore from "@/store/auth";

const CreateUsernameScreen = () => {
    const {isDarkMode} = useTheme()
    const [userName, setUserName] = useState('')
    const [error, setError] = useState('')
    const {setUsername} = useAuthStore()

    const handlePress = async () => {
        setError('')
        if(!userName){
            setError('Enter username')
            return
        }
        setUsername(userName)
        router.replace({pathname: '/auth/password-from'})
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
                <View className='px-5 w-full'>
                   <OnBoardingTitle>Create your User Name</OnBoardingTitle>
                    <Input error={error} label='User Name' value={userName} onChangeText={setUserName} placeholder='username001'/>
                    <View className='max-w-[80%]'>
                    <Text
                        className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-body-medium`}>
                       Create a unique username, you can use number from 0 to 9 and underscores and dashes
                    </Text>
                    </View>
                </View>

                <View className='w-full px-1 py-2'>
                    <Button fullCustomClassName={`${error ? 'bg-red' : 'bg-primary'} mx-4 justify-center items-center py-3 rounded-[12px]`} onPress={handlePress}>Continue</Button>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default CreateUsernameScreen;