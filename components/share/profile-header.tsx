import React from 'react';
import {
    Animated,
    View,
} from 'react-native';
import OnBoardingTitle from '@/components/share/on-boarding-title';
import {AddFriendIcon, SettingsIcon} from '@/assets/icons/icons';

const THRESHOLD = 200;

const ProfileHeader = ({scrollY, isDarkMode}:{scrollY: any, isDarkMode:boolean}) => {
    const iconsOpacity = scrollY.interpolate({
        inputRange: [0, THRESHOLD],
        outputRange: [1, 0],
        extrapolate: 'clamp',
    });

    const titleLeftOpacity = iconsOpacity;
    const titleCenterOpacity = scrollY.interpolate({
        inputRange: [0, THRESHOLD],
        outputRange: [0, 1],
        extrapolate: 'clamp',
    });

    return (
        <View
            className={`absolute top-5 left-0 right-0 h-[120px] px-[24px] pt-4 items-center justify-center ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <Animated.View style={{
                position: 'absolute',
                left: 24,
                opacity: titleLeftOpacity,
            }}>
                <OnBoardingTitle>Profile</OnBoardingTitle>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                left: 0,
                right: 0,
                alignItems: 'center',
                opacity: titleCenterOpacity,
            }}>
                <OnBoardingTitle>Profile</OnBoardingTitle>
            </Animated.View>

            <Animated.View style={{
                position: 'absolute',
                right: 24,
                flexDirection: 'row',
                alignItems: 'center',
                opacity: iconsOpacity,
            }}>
                <View className='gap-7 flex-row'>
                    <AddFriendIcon isDark={isDarkMode}/>
                    <SettingsIcon isDark={isDarkMode}/>
                </View>
            </Animated.View>
        </View>
    );
};

export default ProfileHeader;