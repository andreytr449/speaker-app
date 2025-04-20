import React from 'react';
import { ScrollView, NativeScrollEvent, NativeSyntheticEvent, View, Text, Alert } from 'react-native';
import useTheme from '@/store/theme';
import { FiendFriendsDark, FiendFriendsLight } from '@/assets/images/onboarding/hello_img';
import Button from '@/components/ui/button';

type Props = {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ChatFriendScreen: React.FC<Props> = ({ onScroll }) => {
    const { isDarkMode } = useTheme();

    const handlePress = () => {
        Alert.alert('Oops...', 'Sorry, adding friends is not available yet.');
    };

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}
            onScroll={onScroll}
            scrollEventThrottle={16}
            className='pt-6'>
            {isDarkMode ?
                <FiendFriendsDark/>
                :
                <FiendFriendsLight/>
            }
            <View className='mt-5 gap-4'>
                <Text
                    className={`text-headline-xs ${isDarkMode ? 'text-bg-light' : 'text-bg-dark '}`}
                    style={{textAlign: 'center'}}>
                    Make friends with a native speaker and improve your English
                </Text>
                <Text
                    className={`text-body-small ${isDarkMode ? 'text-bg-light' : 'text-bg-dark '} text-center`}>
                    It's kind of quiet here... Add friends! You can check each
                    other's exercises and help in learning the language
                </Text>
                <Button onPress={handlePress}>Find friends</Button>
            </View>
        </ScrollView>
    );
};

export default ChatFriendScreen;
