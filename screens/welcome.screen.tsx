import React from 'react';
import {
    Pressable,
    SafeAreaView,
    Text,
    View
} from "react-native";
import useTheme from "@/store/theme";
import Button from "@/components/ui/button";
import {router} from "expo-router";
import ChangeThemeButton from "@/components/share/change-theme-button";
import {LogoTextDarkOnBoard, LogoTextLightOnBoard} from "@/assets/images/logo/logo";
import {HelloImgDark, HelloImgLight} from "@/assets/images/onboarding/hello_img";

const WelcomeScreen = () => {
    const {isDarkMode} = useTheme()

    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} `}
        >
            <View className="flex-row justify-end mr-5 mt-5">
                <ChangeThemeButton />
            </View>

            <View className='items-center justify-center flex-1'>
                <View className='items-center relative w-full'>
                    <View className='absolute z-10 -top-8'>
                        {isDarkMode ?
                            <LogoTextLightOnBoard />
                            :
                            <LogoTextDarkOnBoard />
                        }
                    </View>
                    {isDarkMode ?
                        <HelloImgDark />
                        :
                        <HelloImgLight />
                    }
                </View>
                <View className='mt-5 max-w-[270px]'>
                    <Text
                        className={`text-headline-medium ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}
                        style={{textAlign: 'center'}}>
                        Learn a language in 3 minutes a day
                    </Text>
                </View>
                <View className='w-full my-3'>
                    <Button onPress={() => router.push('/auth/sign-up')}>Start learning</Button>
                </View>
                <View className='flex flex-row gap-2 items-center justify-center'>
                    <Text
                        className={`text-body-medium mt-3 gap-3 font-light ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light '}`}>Already,
                        have an account?
                    </Text>
                    <Pressable onPress={() => router.push('/auth/sign-in')} className='border-b-2  border-primary pt-3'>
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
