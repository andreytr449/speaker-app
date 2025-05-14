import React, {useState} from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from "react-native";
import Input from "@/components/ui/input";
import Button from "@/components/ui/button";
import useTheme from "@/store/theme";
import useAuthStore from "@/store/auth";
import {router} from "expo-router";
import useUserStore from "@/store/user";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import {validatePassword} from "@/lib/form-checker";
import {API} from "@/services/api";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const PasswordFormScreen = () => {
    const {isDarkMode} = useTheme()
    const {isLogin, email, username} = useAuthStore()
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [reqError, setReqError] = useState('')

    const handlePress = async () => {
        setLoading(false)
        setReqError('')
        setError('')
        const passwordError = validatePassword(password);
        if (passwordError) {
            setError(passwordError)
            return;
        }
        try {
            setLoading(true)
            const resp: {
                success: boolean,
                data: { token: string }
            } = await API.auth.signUp(email, username, password)
            if (resp.success) {
                await AsyncStorage.setItem("token", resp.data.token)
                router.replace('/auth/confirmation-code')
            } else {
                throw new Error()
            }
            setLoading(false)
        } catch (e) {
            let errorData: any
            if (axios.isAxiosError(e)) {
                errorData = e.response?.data;
            }
            setReqError(errorData.error ? errorData.error : 'Something went wrong');
        } finally {
            setLoading(false)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
                <View className='px-5 w-full'>
                    <OnBoardingTitle> {
                        isLogin ?
                            'Enter your password'
                            :
                            'Create password'
                    }</OnBoardingTitle>
                    <Input value={password} error={error}
                           onChangeText={setPassword} secureTextEntry={true}
                           label='Password' placeholder='Ebter your password'/>
                    <View className=''>
                        {!isLogin &&
													<Text
														className={`${isDarkMode ? 'text-body-secondary-light' : 'text-body-secondary-dark'} text-body-medium`}>
														Your password must contain <Text
														className='font-semibold'>8 characters, 1 uppercase
														and 1 number</Text>
													</Text>
                        }
                    </View>
                </View>
                <View className='items-center'>
                    <View className='w-full px-1 py-2'>
                        <Button
                            fullCustomClassName={`${error || reqError ? 'bg-red' : 'bg-primary'} mx-4 justify-center items-center py-3 rounded-[12px]`}
                            onPress={handlePress}>{loading ? 'Loading...' : 'Continue'}</Button>
                    </View>
                    <Text
                        className={`mb-2 font-light text-body-small text-red`}>{reqError}</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default PasswordFormScreen;