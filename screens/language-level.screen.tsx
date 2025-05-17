import React, {useCallback, useMemo, useRef, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import useTheme from '@/store/theme';
import OnBoardingTitle from '@/components/share/on-boarding-title';
import {
    LanguageLevelDark,
    LanguageLevelLight,
} from '@/assets/images/onboarding/hello_img';
import Button from '@/components/ui/button';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {dummyLanguagesLevel} from "../constants";
import LanguageLevelCard from "@/components/share/language-level-card";
import * as WebBrowser from 'expo-web-browser';
import {router} from "expo-router";

const LanguageLevelScreen = () => {
    const {isDarkMode} = useTheme();
    const bottomSheetRef = useRef<BottomSheet>(null);
    const [selectedLanguageLevel, setSelectedLanguageLevel] = useState<string | null>(null);
    const snapPoints = useMemo(() => ['60%'], []);
    const handleSheetChanges = useCallback((index: number) => {
        console.log('handleSheetChanges', index);
    }, []);
    const buttonStyle = 'mx-4 justify-center items-center py-3 rounded-[12px] pressed:opacity-80'
    const handleOpenSheet = () => {
        bottomSheetRef.current?.expand();
    };

    const handleSelectLanguageLevel = (level:string) => {
        if (level === selectedLanguageLevel) {
            setSelectedLanguageLevel(null)
            return
        }
        setSelectedLanguageLevel(level)
    }

    const _handlePressButtonAsync = async () => {
        await WebBrowser.openBrowserAsync('https://expo.dev');
    }

    const handlePress = () => {
        if(selectedLanguageLevel)
            router.push('/auth/select-daily-time')
    }

    return (
        <GestureHandlerRootView className='flex-1'>
            <View
                className={`flex-1 gap-3 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}
            >
                <OnBoardingTitle classname="mx-5">
                    Do you know already your level?
                </OnBoardingTitle>

                {isDarkMode ? <LanguageLevelDark/> : <LanguageLevelLight/>}

                <Button onPress={handleOpenSheet}>Choose your level</Button>

                <View className="flex-row w-full items-center px-5">
                    <View
                        className={`flex-1  h-[2px]`}
                        style={{backgroundColor: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}
                    />

                    <View className="mx-4">
                        <Text
                            className="text-body-medium"
                            style={{color: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}
                        >
                            or
                        </Text>
                    </View>
                    <View
                        className={`flex-1  h-[2px]`}
                        style={{backgroundColor: isDarkMode ? '#4C4C4C' : '#D7D7D7'}}
                    />
                </View>

                <Pressable
                    onPress={_handlePressButtonAsync}
                    className={`${
                        isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'
                    } mx-4 justify-center items-center py-3 rounded-[12px] pressed:opacity-80`}
                >
                    <Text
                        className={`text-title-large ${
                            !isDarkMode ? 'text-surfaces-dark-2' : 'text-surfaces-light-2'
                        }`}
                    >
                        Take a screening test
                    </Text>
                </Pressable>
            </View>

            <BottomSheet
                ref={bottomSheetRef}
                snapPoints={snapPoints}
                enablePanDownToClose
                index={-1}
                handleIndicatorStyle={{
                    backgroundColor: isDarkMode ? '#F8F8F8' : '#131313',
                }}
                onChange={handleSheetChanges}
                backgroundStyle={{
                    backgroundColor: isDarkMode ? '#262626' : '#F8F8F8',
                }}
            >
                <BottomSheetView
                    className={`flex-1 px-4 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} justify-between pb-6`}>

                    <View>

                    <Text
                        className={`${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'} text-title-large`}>Choose
                        your level:</Text>

                    {dummyLanguagesLevel.map(item => (
                        <LanguageLevelCard short={item.short} full={item.full}
                                           key={item.short} isSelected={selectedLanguageLevel === item.short}
                                           onPress={() => handleSelectLanguageLevel(item.short)}
                        />
                    ))}
                    </View>

                    <Button
                        onPress={handlePress}
                        fullCustomClassName={selectedLanguageLevel ? `${buttonStyle} bg-primary` : `${isDarkMode ? 'bg-body-secondary-dark' : 'bg-body-secondary-light'} ${buttonStyle}`}
                        textClassName={selectedLanguageLevel ? '' : `${isDarkMode ? 'text-border-dark' : 'text-border-light'}`}
                    >
                        Continue
                    </Button>


                </BottomSheetView>
            </BottomSheet>


        </GestureHandlerRootView>
    );
};


export default LanguageLevelScreen;
