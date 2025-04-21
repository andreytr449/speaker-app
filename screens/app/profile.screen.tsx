import React, {useRef} from 'react';
import {
    Animated,
    SafeAreaView,
    Dimensions,
    View,
    Text,
    Image
} from 'react-native';
import useTheme from '@/store/theme';
import ProfileHeader from '@/components/share/profile-header';
import {AnimatedCircularProgress} from 'react-native-circular-progress';
import UserProgressCircle from "@/components/share/user-progress-circle";
import OnBoardingTitle from "@/components/share/on-boarding-title";


const ProfileScreen = () => {
    const {isDarkMode} = useTheme();
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
        <SafeAreaView
            className={
                `flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`
            }
        >
            <Animated.ScrollView
                contentContainerStyle={{paddingTop: 100, paddingHorizontal: 24}}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
            >

                <View className='flex-row justify-between items-start'>
                    <View className='flex-row gap-3'>
                        <Image
                            className='rounded-full w-[65px] h-[65px]'
                            source={{uri: 'https://i.pinimg.com/736x/fd/30/ef/fd30ef808f9e58031f40c98581418e1d.jpg'}}
                        />
                        <View className='pt-2'>
                            <Text
                                className={`text-title-xs ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>Andrew
                                Boyko</Text>
                            <Text
                                className={`text-body-small ${isDarkMode ? 'text-body-secondary-dark' : 'text-body-secondary-light'}`}>Learn
                                and become better!</Text>
                        </View>
                    </View>
                    <View
                        className={`px-3 items-start rounded-[12px] ${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}`}><Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-label-small`}>Intermediate</Text></View>
                </View>
                <View
                    className={`w-full h-[2px] my-6 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>

                <View className='flex-row justify-between items-center'>
                    <OnBoardingTitle>Friends</OnBoardingTitle>
                    <Text
                        className={`mt-3 text-body-large text-primary`}>
                        0
                    </Text>
                </View>
                <UserProgressCircle isDarkMode={isDarkMode}/>

                <View className='h-96 py-36'><Text>123123</Text></View>
            </Animated.ScrollView>
            <ProfileHeader scrollY={scrollY} isDarkMode={isDarkMode}/>

        </SafeAreaView>
    );
};

export default ProfileScreen;