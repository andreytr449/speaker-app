import React, {useState} from 'react';
import {SafeAreaView, ScrollView, View, Switch, Text} from "react-native";
import useTheme from "@/store/theme";
import SettingsHeaderComponent from "@/components/share/settings-header";
import SettingsList from "@/components/share/settings-list";
import {settingsListItems} from "@/constans";
import Button from "@/components/ui/button";
import OffersButton from "@/components/share/offers-button";
import {DiscountIcon} from "@/assets/icons/icons";
import SwitcherButton from "@/components/share/switcher-button";


const SettingsScreen = () => {
    const {isDarkMode, toggleTheme} = useTheme();
    const [isSendNotification, setIsSendNotification] = useState(true);
    const toggleSwitch = () => setIsSendNotification(previousState => !previousState);

    return (
        <SafeAreaView className={
            `flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`
        }>
            <SettingsHeaderComponent/>

            <View className='px-5'>
                <View
                    className={`w-full h-[2px] my-3 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SettingsList title='Account' items={settingsListItems}/>
                <Button>Language level test</Button>
                <View className='px-5 gap-5 my-5'>
                    <OffersButton buttonTitle='7 days - Free'
                                  title='Try Premium For Free'
                                  bgIcon={<DiscountIcon/>}
                    />
                </View>

                <SettingsList title='General' items={[
                    {
                        name: 'Notification',
                        type: 'component',
                        value: <SwitcherButton isEnabled={isSendNotification}
                                               toggleSwitch={toggleSwitch}/>
                    },
                    {
                        name: 'Interface Language',
                        type: 'text',
                        value: 'English'
                    },
                    {
                        name: 'Dark Mode',
                        type: 'component',
                        value: <SwitcherButton isEnabled={isDarkMode}
                                               toggleSwitch={() => toggleTheme(isDarkMode ? 'light' : 'dark')}/>
                    },
                    {name: 'Support', type: 'text', value: 'Contact us'},
                ]}/>

                <View className='flex justify-start items-start my-2 px-5'>
                    <Text
                        className={`text-red text-title-small`}>Log out</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SettingsScreen;