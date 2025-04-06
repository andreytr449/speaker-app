import React from 'react';
import {
    Image,
    Pressable,
    SafeAreaView,
    Text,
    useWindowDimensions,
    View
} from "react-native";
import useTheme from "@/store/theme";

const WelcomeScreen = () => {
    const {height, width} = useWindowDimensions()
    const {isDarkMode, toggleTheme} = useTheme()
    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} `}
        >
            <View className="flex-row justify-end mr-5 mt-5">
                <Pressable onPress={() => toggleTheme(isDarkMode ? 'light' : 'dark')}
                           className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
                    {isDarkMode ? <Image source={require('@/assets/icons/sun.png')}/> :
                        <Image source={require('@/assets/icons/moon.png')}/>}
                </Pressable>
            </View>

            <View className='items-center justify-center flex-1'>
                <View className='items-center relative w-full'>
                    <View className='absolute z-10 -top-8'>
                        {isDarkMode ?
                            <Image resizeMode='contain'
                                   source={require('@/assets/images/logo/Logo 48_48_dark.png')}/>
                            :
                            <Image resizeMode='contain'
                                   source={require('@/assets/images/logo/Logo 48_48_light.png')}/>
                        }
                    </View>
                    {isDarkMode ?
                        <Image
                            resizeMode="cover"
                            style={{width: '100%', height: height * 0.5}}
                            source={require('@/assets/images/onboarding/hello_Illustraton_dark.png')}
                        />
                        :
                        <Image
                            resizeMode="cover"
                            style={{width: '100%', height: height * 0.5}}
                            source={require('@/assets/images/onboarding/Hello_Illustraton.png')}
                        />
                    }
                </View>
                <View className='mt-5 max-w-80'>
                    <Text
                        className={` text-headline-medium ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}
                        style={{textAlign: 'center'}}>
                        Learn a language in 3 minutes a day
                    </Text>
                </View>
                <View className='w-full my-3'>
                    <Pressable style={(pressed) => {
                        return pressed && {opacity: 0.85}
                    }}
                               className='bg-primary mx-4 justify-center items-center py-3 rounded-[12px]'>
                        <Text className='text-title-large text-body-primary-dark '>Start
                            learning</Text>
                    </Pressable>
                </View>
                <View className='flex flex-row gap-2 items-center justify-center'>

                    <Text
                        className={`text-body-medium mt-3 gap-3 font-light ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}>Already,
                        have an account?
                    </Text>
                    <Pressable className='border-b-2  border-primary pt-3'>
                        <Text className=' text-primary '>
                            Log in
                        </Text>
                    </Pressable>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default WelcomeScreen;
