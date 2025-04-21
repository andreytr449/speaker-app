import React, {useRef} from 'react';
import {
    Animated,
    SafeAreaView,
    View,
    Text,
    Image
} from 'react-native';
import useTheme from '@/store/theme';
import ProfileHeader from '@/components/share/profile-header';
import ProfileScreenBody from "@/components/share/profile-screen-body";


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
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingTop: 100}}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {y: scrollY}}}],
                    {useNativeDriver: true}
                )}
                scrollEventThrottle={16}
            >

                <View className='flex-row justify-between items-start px-5'>
                    <View className='flex-row gap-3'>
                        <Image
                            className='rounded-full w-[65px] h-[65px]'
                            source={{uri: 'https://i.pinimg.com/736x/fd/30/ef/fd30ef808f9e58031f40c98581418e1d.jpg'}}
                        />
                        <View className='pt-2'>
                            <Text
                                className={`text-title-xs ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>Andrew
                                Boyko 🧑‍💻</Text>
                            <Text
                                className={`text-body-small ${isDarkMode ? 'text-body-secondary-dark' : 'text-body-secondary-light'}`}>Learn
                                and become better!</Text>
                        </View>
                    </View>
                    <View
                        className={`px-3  items-start rounded-[12px] ${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}`}><Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-label-small`}>Intermediate</Text></View>
                </View>
                <View className='px-5'>
                    <View
                        className={`w-full h-[2px] my-6 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>
                </View>
                <ProfileScreenBody isDarkMode={isDarkMode}/>
            </Animated.ScrollView>
            <ProfileHeader scrollY={scrollY} isDarkMode={isDarkMode}/>
        </SafeAreaView>
    );
};

export default ProfileScreen;