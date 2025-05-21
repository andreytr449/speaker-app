import React, {useEffect, useState} from 'react';
import {Keyboard, Text, TouchableWithoutFeedback, View} from 'react-native';
import {
    CodeField,
    Cursor,
    useBlurOnFulfill,
    useClearByFocusCell
} from 'react-native-confirmation-code-field';
import useTheme from '@/store/theme';
import Button from "@/components/ui/button";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {router} from "expo-router";
import {API} from "@/services/api";
import axios from "axios";

const CELL_COUNT = 4;

const ConfirmationCode = () => {
    const {isDarkMode} = useTheme();
    const [value, setValue] = useState('');
    const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
    const [timeLeft, setTimeLeft] = useState(180);
    const [isLoading, setIsLoading] = useState(false)
    const [errorMsg, setErrorMsg] = useState('')
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue
    });

    const buttonBgColor = errorMsg ? 'bg-red' : value.length === 4 ? 'bg-primary' : 'bg-neutral'

    useEffect(() => {
        if (timeLeft === 0) return;

        const timerId = setInterval(() => {
            setTimeLeft(prev => prev - 1);
        }, 1000);

        return () => clearInterval(timerId);
    }, [timeLeft]);

    const handlePress = async () => {
        if (value.length < 4) return;
        setErrorMsg('')
        setIsLoading(false)
        try {
            setIsLoading(true);
            const code = Number(value);
            if (isNaN(code)) {
                setErrorMsg('Enter valid code');
                return;
            }
            const token = await AsyncStorage.getItem('token')
            console.log(token)
            if (!token) {
                router.replace('/auth/sign-in')
                return;
            }
            const resp = await API.auth.verifyEmail(code, token!)
            if (resp.success)
                router.replace('/auth/select-language')
            else
                throw new Error()
            setIsLoading(false);
        } catch (e) {
            if (axios.isAxiosError(e)) {
                const errorData = e.response?.data;
                setErrorMsg(errorData?.error || 'Something went wrong')
            }
            setErrorMsg(prevState => prevState ? prevState : 'Something went wrong')
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
                className={`flex-1 items-center py-10 justify-between ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
                <View className='items-center'>
                    <Text
                        className={`text-title-small font-semibold mb-4 ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>Enter
                        4 digits code</Text>
                    <Text
                        numberOfLines={3}
                        className={`text-title-xs font-extralight max-w-[250px] text-center ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>
                        Enter the code sent to your email address for
                        security
                        reason to make sure it's you.
                    </Text>
                </View>
                <CodeField
                    ref={ref}
                    {...props}
                    value={value}
                    onChangeText={setValue}
                    cellCount={CELL_COUNT}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({index, symbol, isFocused}) => (
                        <View
                            key={index}
                            onLayout={getCellOnLayoutHandler(index)}
                            className={`w-24 h-24 mx-1 rounded-[12px] items-center justify-center ${
                                isFocused ? 'border-blue-500' : ''
                            } ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-2'} `}
                        >
                            <Text
                                className={`text-headline-medium ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>
                                {symbol || (isFocused ? <Cursor/> : null)}
                            </Text>
                        </View>
                    )}
                />
                <View className='items-center gap-1'>
                    <View className='flex-row gap-2 items-center'>
                        <Text
                            className={`text-title-xs font-extralight ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>
                            Didn't get the code?</Text>
                        <Text
                            className={`text-title-small font-extralight text-primary`}>
                            Resend</Text>
                    </View>
                    <View className='flex-row gap-1 items-center'>
                        <Text
                            className={`text-title-xs font-extralight ${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'}`}>
                            You can request a new code in:</Text>
                        <Text
                            className={`text-title-xs font-extralight ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>
                            {`${Math.floor(timeLeft / 60)}:${(timeLeft % 60).toString().padStart(2, '0')}`}</Text>
                    </View>
                </View>
                <View className='w-full items-center gap-3'>

                    <View className='w-full'>
                        <Button onPress={handlePress}
                                fullCustomClassName={`${buttonBgColor} mx-4 justify-center items-center py-3 rounded-[12px]`}>{isLoading ? 'Loading...' : 'Confirm'}</Button>
                    </View>
                    <Text
                        className='text-red text-center text-title-xs font-extralight'>{errorMsg}</Text>
                </View>

            </View>
        </TouchableWithoutFeedback>
    );
};

export default ConfirmationCode;
