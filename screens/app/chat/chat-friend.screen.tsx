import React from 'react';
import {Alert, ScrollView, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {
    FiendFriendsDark,
    FiendFriendsLight
} from "@/assets/images/onboarding/hello_img";
import Button from "@/components/ui/button";

const ChatFriendScreen = () => {
    const {isDarkMode} = useTheme()
    const handlePress = () => {
        Alert.alert("Oops...", "Sorry, adding friends is not available yet. Stay tuned for updates!")
    }
    return (
        <ScrollView className='pt-6'>
            {isDarkMode ?
                <FiendFriendsDark/>
                :
                <FiendFriendsLight/>
            }
            <View className='mt-5 gap-4'>
                <Text
                    className={`text-headline-small ${isDarkMode ? 'text-bg-light' : 'text-bg-dark '}`}
                    style={{textAlign: 'center'}}>
                    Make friends with a native speaker and improve your English
                </Text>
                <Text
                    className={`text-body-medium ${isDarkMode ? 'text-bg-light' : 'text-bg-dark '} text-center`}>
                    It's kind of quiet here... Add friends! You can check each
                    other's exercises and help in learning the language
                </Text>
                <Button onPress={handlePress}>Find friends</Button>
            </View>
        </ScrollView>
    );
};

export default ChatFriendScreen;