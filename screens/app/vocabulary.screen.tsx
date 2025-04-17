import React from 'react';
import {FlatList, Pressable, SafeAreaView, ScrollView, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {infoCardsDummyData, vocabularyDummyData} from "@/constans";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import SmallButton from "@/components/ui/small-button";
import {DiscountIcon, MarkIcon, SearchIcon} from "@/assets/icons/icons";
import Button from "@/components/ui/button";
import OffersButton from "@/components/share/offers-button";
import VocabularyCard from "@/components/share/vocabulary-card";
import AppHeader from "@/components/share/app-header";

const InfoCard = ({title, icon, count}: {
    title: string,
    icon: React.ReactNode,
    count: number
}) => {
    let bgColor: string
    switch (title) {
        case 'Mistakes':
            bgColor = 'bg-red'
            break
        case 'Average':
            bgColor = 'bg-primary'
            break
        case 'Success':
            bgColor = 'bg-green'
            break
        default:
            bgColor = 'bg-primary'
            break
    }
    return (
        <View
            className={`h-[110px] w-[110px] rounded-[12px] ${bgColor} items-center justify-center`}>
            {icon}
            <Text className='text-label-medium text-bg-light mt-1'>{title}</Text>
            <Text className='text-headline-small text-bg-light'>{count}</Text>
        </View>
    )
}

const VocabularyScreen = () => {
    const {isDarkMode} = useTheme()

    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} justify-between`}>
            <View className='px-6 flex-1'>
                <AppHeader title='Vocabulary' />
                <View className='flex-row justify-between'>
                    {infoCardsDummyData.map(item => (
                        <InfoCard key={item.title} title={item.title} count={item.count}
                                  icon={item.icon}/>
                    ))}
                </View>
                <View className='my-5'>
                    <View
                        className={`flex-row justify-between p-5 w-full ${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'} rounded-[12px]`}>
                        <View className='flex-row gap-2'>
                            <Pressable
                                className={`mr-2 w-12 h-12 border-2 border-primary ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}  rounded-[12px] items-center justify-center`}>
                                <MarkIcon isDark={isDarkMode}/>
                            </Pressable>
                            <Text
                                className={`mt-3 text-body-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                                You saved Vocabulary
                            </Text>
                        </View>
                        <Text
                            className={`mt-3 text-body-large text-primary`}>
                            0
                        </Text>
                    </View>
                </View>

                <OnBoardingTitle>Popular Vocabulary</OnBoardingTitle>


                <FlatList data={vocabularyDummyData}
                          renderItem={({item}) => (<VocabularyCard isActive={item.id === 'vocabCrdId - 1'} title={item.title} imgUri={item.imgUri}/>)}
                          keyExtractor={item => item.id}
                          showsVerticalScrollIndicator={false}
                />
            </View>

            <View className='my-5 gap-5'>
                {/*<Button>Repeat</Button>*/}
                <View className='px-5'>
                    <OffersButton buttonTitle='7 days - Free'
                                  title='Try Premium For Free'
                                  bgIcon={<DiscountIcon/>}
                    />
                </View>
            </View>

        </SafeAreaView>
    );
};

export default VocabularyScreen;
