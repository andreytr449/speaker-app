import React, {useState} from 'react';
import {SafeAreaView, Text, View} from "react-native";
import useTheme from "@/store/theme";
import AppHeader from "@/components/share/app-header";
import TabChatItem from "@/components/share/tab-chat-item";
import ChatFriendScreen from "@/screens/app/chat/chat-friend.screen";

const ChatScreen = () => {
    const {isDarkMode} = useTheme()
    const [currentChatScreen, setCurrentChatScreen] = useState<'users' | 'friends'>('users')
    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <View className='px-6'>
                <AppHeader title='Chat'/>
            </View>
            <View
                className={`h-auto border-b-2 ${isDarkMode ? 'border-border-dark' : 'border-border-light'} flex-row`}>
                <TabChatItem isActive={currentChatScreen === 'users'} title='New Users'
                             onPress={() => setCurrentChatScreen('users')}/>
                <TabChatItem isActive={currentChatScreen === 'friends'} title='Friends'
                             onPress={() => setCurrentChatScreen('friends')}/>
            </View>

            <View className='px-6'>
                {currentChatScreen === 'friends' ?
                    <ChatFriendScreen/>
                    :
                    null
                }
            </View>

        </SafeAreaView>
    );
};

export default ChatScreen;