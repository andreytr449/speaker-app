import React from 'react';
import {Image, SafeAreaView, Text, useWindowDimensions, View} from "react-native";

const WelcomeScreen = () => {
    const { height, width } = useWindowDimensions()
    return (
        <SafeAreaView className="flex-1 items-center justify-between bg-neutral-850">
            <Text>Welcome</Text>
            <View className='items-center relative w-full'>
                <View className='absolute z-10 -top-8'>
                    <Image resizeMode='contain'
                           source={require('@/assets/images/logo/Logo 48_48_light.png')}/>
                </View>
                <Image
                    resizeMode="cover"
                    style={{ width: width, height: height * 0.5 }}
                    source={require('@/assets/images/onboarding/Hello_Illustraton.png')}
                />
            </View>
            <Text>Welcome</Text>
        </SafeAreaView>
    );
};

export default WelcomeScreen;