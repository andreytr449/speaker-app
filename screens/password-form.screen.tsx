import React from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import useTheme from "@/store/theme";
import useAuthStore from "@/store/auth";

const PasswordFormScreen = () => {
    const {isDarkMode} = useTheme()
    const {isLogin} = useAuthStore()
    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
                <View className='px-5 w-full'>
                    <Text
                        className={`mt-3 text-title-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                        {
                            isLogin ?
                                'Enter your password'
                                :
                                'Create password'
                        }
                    </Text>
                    <Input secureTextEntry={true} label='Password' placeholder='Ebter your password'/>
                    <View className=''>
                        {!isLogin &&
                        <Text
                            className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-body-medium`}>
                                Your password must contain <Text className='font-semibold'>8 characters, 1 uppercase and 1 number</Text>
                        </Text>
                        }
                    </View>
                </View>

                <View className='w-full px-1 py-2'>
                    <Button>Continue</Button>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default PasswordFormScreen;