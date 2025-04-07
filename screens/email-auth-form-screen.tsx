import React from 'react';
import {Pressable, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {HelloLogoDark, HelloLogoLight} from "@/assets/images/logo/logo";
import Input from "@/components/ui/input";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import Button from "@/components/ui/button";
import AuthButton from "@/components/ui/auth-button";
import {GoogleDark, GoogleLight} from "@/assets/icons/icons";
import {router} from "expo-router";

const EmailAuthFormScreen = ({isLogin}: { isLogin: boolean }) => {
    const {isDarkMode} = useTheme()

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`items-center justify-center flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
                {isDarkMode ? <HelloLogoLight/> : <HelloLogoDark/>}
                <View className='px-5 w-full'>
                    <Text
                        className={`mt-10 text-title-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                        {isLogin
                            ? 'Log in and continue your learning'
                            : 'Sign up and start learning any language'}
                    </Text>
                    <Input label='Email' placeholder='user@gmail.com'/>
                </View>
                <View className='w-full px-1 py-2'>
                    <Button>Continue</Button>
                </View>

                <View className='flex-row w-full items-center px-5'>
                    <View className={`flex-1  h-[2px]`}
                          style={{backgroundColor: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}/>

                    <View className='mx-4'>
                        <Text
                            className='text-body-medium'
                            style={{color: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}>or</Text>
                    </View>
                    <View className={`flex-1  h-[2px]`}
                          style={{backgroundColor: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}/>
                </View>
                <View className='w-full px-1 py-2'>
                    <AuthButton icon={isDarkMode ? <GoogleLight/> : <GoogleDark/>}>Sign up
                        with Google</AuthButton>
                </View>
                <View className='flex-row w-full items-center px-5 mt-3 opacity-35'>
                    <Text
                        className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-center`}>
                        By joining, i declare that i have read and accent the Terms and
                        Privacy Policy
                    </Text>
                </View>


                <View
                    className='w-full items-center px-5 mt-24 flex flex-row gap-2 justify-center'>
                    <Text
                        className={`text-body-medium mt-3 gap-3 font-light ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}>
                        {isLogin ?
                            'Dont have an account yet?'
                            :
                            'Already, have an account?'
                        }
                    </Text>
                    <Pressable onPress={() => {
                        if (isLogin) {
                            router.push('/auth/sign-up')
                        } else {
                            router.push('/auth/sign-in')
                        }

                    }}
                               className='border-b-2  border-primary pt-3'>
                        <Text className=' text-primary '>
                            {isLogin ?
                                'Sign up'
                                :
                                'Log in'
                            }
                        </Text>
                    </Pressable>
                </View>


            </View>
        </TouchableWithoutFeedback>
    );

};

export default EmailAuthFormScreen;