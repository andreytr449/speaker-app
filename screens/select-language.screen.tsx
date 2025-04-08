import React, {useEffect, useState} from 'react';
import {BackHandler, FlatList, Text, View} from "react-native";
import useTheme from "@/store/theme";
import Button from "@/components/ui/button";
import {availableLanguages} from "@/constans";
import LanguageCard from "@/components/share/language-card";

const SelectLanguageScreen = () => {
    const {isDarkMode} = useTheme()
    const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);


    useEffect(() => {
        const onBackPress = () => {
            return true;
        };
        BackHandler.addEventListener('hardwareBackPress', onBackPress);
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', onBackPress);
        };
    }, []);

    const handlePress = (language: string) => {
        if (language === selectedLanguage) {
            setSelectedLanguage(null)
            return
        }
        setSelectedLanguage(language)
    }

    const handleConfirmPress = () => {
        // TODO: navigate to 'learning goal' screen
    }

    return (
        <View
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}
        >
            <View className='px-5 w-full'>
                <Text
                    className={`mt-3 text-title-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                    Choose the language you want to learn
                </Text>
                <FlatList data={availableLanguages}
                          renderItem={({item}) => <LanguageCard
                              onPress={() => handlePress(item.name)}
                              isSelected={selectedLanguage === item.name}
                              name={item.name} Flag={item.flag}/>}
                          keyExtractor={(item) => item.name}
                />
            </View>
            {
                selectedLanguage &&
							<View className='w-full px-1 py-2'>
                  {selectedLanguage === 'English' ?
                      <Button onPress={handleConfirmPress}>Continue</Button>
                      :
                      <Button className='bg-red'>Not available</Button>
                  }
							</View>
            }
        </View>
    );
};

export default SelectLanguageScreen;