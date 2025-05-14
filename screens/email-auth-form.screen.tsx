import React, {useState} from 'react';
import {Pressable, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {HelloLogoDark, HelloLogoLight} from "@/assets/images/logo/logo";
import Input from "@/components/ui/input";
import {Keyboard, TouchableWithoutFeedback} from 'react-native';
import Button from "@/components/ui/button";
import AuthButton from "@/components/ui/auth-button";
import {GoogleDark, GoogleLight} from "@/assets/icons/icons";
import {Redirect, router} from "expo-router";
import useAuthStore from "@/store/auth";
import {validateEmail, validatePassword} from "@/lib/form-checker";
import {API} from "@/services/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {User} from "@/types/user.types";

type formType = {
    emailError: undefined | string,
    passwordError: undefined | string
    reqError: undefined | string
}

type res = {
    success: boolean
    data: {
        token: string
        user: User
    }
}

type singUpResp = {
    success: boolean
    isVerified: boolean
    isUserExist: boolean
}

const EmailAuthFormScreen = () => {
    const {isDarkMode} = useTheme()
    const {isLogin, setEmail :setEmailToLocalStore} = useAuthStore()
    const [email, setEmail] = useState('');
    const [isLoading, setReqIsLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [isError, setIsError] = useState<formType>({
        emailError: undefined,
        passwordError: undefined,
        reqError: undefined
    });

    const buttonClassName = isError.reqError ? 'bg-red' : 'bg-primary'

    if (isLogin === undefined)
        return <Redirect href='/onboarding/welcome'/>

    const handlePress = async () => {
        if (isLoading) return

        setIsError({
            emailError: undefined,
            passwordError: undefined,
            reqError: undefined
        })
        setReqIsLoading(false)
        if (isLogin) {
            const emailError = validateEmail(email);
            const passwordError = validatePassword(password);

            setIsError({
                emailError,
                passwordError,
                reqError: undefined
            });

            if (emailError || passwordError) {
                return;
            }
            try {
                setReqIsLoading(true);
                const response: res = await API.auth.signIn(email, password);
                if (response.success) {
                    await AsyncStorage.setItem('token', response.data.token);
                    const user = response.data.user;
                    if (user.isVerified) {
                        router.navigate('/(tabs)/book')
                    } else {
                        router.navigate('/auth/confirmation-code')
                    }
                } else throw new Error()
            } catch (e) {
                if (axios.isAxiosError(e)) {
                    const errorData = e.response?.data;
                    setIsError({
                        emailError,
                        passwordError,
                        reqError: errorData?.error || 'Something went wrong'
                    });
                }
            } finally {
                setReqIsLoading(false);
            }
        } else {
            const emailError = validateEmail(email);
            setIsError({
                emailError,
                passwordError: undefined,
                reqError: undefined
            });
            if (emailError) {
                return;
            }
            try {
                const resp: {
                    data: singUpResp
                } = await API.auth.checkIsEmailExists(email)
                if (resp.data.isVerified) {
                    setIsError({
                        emailError: undefined,
                        passwordError: undefined,
                        reqError: 'This email already taken, please sign in'
                    });
                } else {
                    setEmailToLocalStore(email)
                    router.replace('/auth/create-username')
                }
            } catch (e) {
                console.log(e)
                setIsError({
                    emailError: undefined,
                    passwordError: undefined,
                    reqError: 'Something went wrong'
                });
            }
        }
    }

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
                    <Input label="Email"
                           error={isError.emailError}
                           placeholder="user@gmail.com"
                           value={email}
                           onChangeText={setEmail}
                    />
                    {isLogin &&
											<Input label="Password"
											       error={isError.passwordError}
											       placeholder="your password"
											       value={password}
											       onChangeText={setPassword}
											/>
                    }
                </View>
                <View className='w-full px-1 py-2'>
                    <Button
                        fullCustomClassName={`${buttonClassName} mx-4 justify-center items-center py-3 rounded-[12px]`}
                        onPress={handlePress}>{isLoading ? 'Loading...' : 'Continue'}</Button>
                </View>
                <View className='justify-center items-center'>
                    <Text
                        className={`mb-2 font-light text-body-small text-red`}>{isError.reqError}</Text>
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
                    <AuthButton
                        icon={isDarkMode ? <GoogleLight/> : <GoogleDark/>}>Sign
                        up
                        with Google</AuthButton>
                </View>
                <View
                    className='flex-row w-full items-center px-5 mt-3 opacity-35'>
                    <Text
                        className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-center`}>
                        By joining, i declare that i have read and accent the
                        Terms and
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