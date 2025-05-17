import React, { useEffect, useState } from 'react';
import { BackHandler, FlatList, View } from 'react-native';
import useTheme from '@/store/theme';
import Button from '@/components/ui/button';
import { availableLanguages } from '../constants';
import LanguageCard from '@/components/share/language-card';
import OnBoardingTitle from '@/components/share/on-boarding-title';
import { router } from 'expo-router';

const SelectLanguageScreen = () => {
    const { isDarkMode } = useTheme();
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

    useEffect(() => {
        const onBackPress = () => true;

        const subscription = BackHandler.addEventListener('hardwareBackPress', onBackPress);

        return () => {
            subscription?.remove?.();
        };
    }, []);

    const handlePress = (language: string) => {
        setSelectedLanguage(prev => (prev === language ? null : language));
    };

    const handleConfirmPress = () => {
        if (selectedLanguage === 'English') {
            router.navigate('/auth/language-level');
        }
    };

    const isAvailable = selectedLanguage === 'English';

    return (
        <View className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
            <View className="px-5 w-full flex-1 gap-2">
                <OnBoardingTitle>Choose the language you want to learn</OnBoardingTitle>

                <FlatList
                    data={availableLanguages}
                    renderItem={({ item }) => (
                        <LanguageCard
                            onPress={() => handlePress(item.name)}
                            isSelected={selectedLanguage === item.name}
                            name={item.name}
                            Flag={item.flag}
                        />
                    )}
                    keyExtractor={(item) => item.name}
                />
            </View>

            {selectedLanguage && (
                <View className="w-full px-1 py-2">
                    <Button
                        onPress={handleConfirmPress}
                        className={isAvailable ? '' : 'bg-red'}
                        disabled={!isAvailable}
                    >
                        {isAvailable ? 'Continue' : 'Not Available Yet'}
                    </Button>
                </View>
            )}
        </View>
    );
};

export default SelectLanguageScreen;
