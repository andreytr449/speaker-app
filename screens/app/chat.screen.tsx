import React, {useState, useRef, useEffect} from 'react';
import {
    SafeAreaView,
    View,
    NativeScrollEvent,
    NativeSyntheticEvent,
    Animated
} from 'react-native';
import useTheme from '@/store/theme';
import AppHeader from '@/components/share/app-header';
import TabChatItem from '@/components/share/tab-chat-item';
import ChatFriendScreen from '@/screens/app/chat/chat-friend.screen';
import ChatExploreScreen from '@/screens/app/chat/chat-explore.screen';

const SCROLL_HIDE_THRESHOLD = 200;
const SCROLL_DELTA = 5;

const AnimatedView = Animated.createAnimatedComponent(View);

const ChatScreen: React.FC = () => {
    const {isDarkMode} = useTheme();
    const [currentChatScreen, setCurrentChatScreen] = useState<'users' | 'friends'>('users');
    const [showTabs, setShowTabs] = useState(true);
    const lastOffsetY = useRef(0);
    const [isTabsHidden, setIsTabsHidden] = useState(false);

    const tabsAnim = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.timing(tabsAnim, {
            toValue: showTabs ? 1 : 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }, [showTabs, tabsAnim]);

    const handleScroll = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
        const offsetY = e.nativeEvent.contentOffset.y;

        if (offsetY < SCROLL_HIDE_THRESHOLD) {
            setShowTabs(true);
        } else {
            if (offsetY > lastOffsetY.current + SCROLL_DELTA) {
                setShowTabs(false);
            } else if (offsetY < lastOffsetY.current - SCROLL_DELTA) {
                setShowTabs(true);
            }
        }

        lastOffsetY.current = offsetY;
    };


    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (showTabs) {
            setIsTabsHidden(false);
        } else {
            timeout = setTimeout(() => {
                setIsTabsHidden(true);
            }, 90);
        }
        return () => clearTimeout(timeout);
    }, [showTabs]);

    return (
        <SafeAreaView
            className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <View className="px-6">
                <AppHeader title="Chat"/>
            </View>

            <View className={isTabsHidden ? 'opacity-0 hidden' : ''}>
                <AnimatedView
                    className={`h-auto border-b-2 px-6 ${isDarkMode ? 'border-border-dark' : 'border-border-light'} flex-row`}
                    style={{
                        opacity: tabsAnim,
                        transform: [
                            {
                                translateY: tabsAnim.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [-10, 0],
                                }),
                            },
                        ],
                    }}
                    pointerEvents={showTabs ? 'auto' : 'none'}
                >
                    <TabChatItem
                        isActive={currentChatScreen === 'users'}
                        title="New Users"
                        onPress={() => setCurrentChatScreen('users')}
                    />
                    <TabChatItem
                        isActive={currentChatScreen === 'friends'}
                        title="Friends"
                        onPress={() => setCurrentChatScreen('friends')}
                    />
                </AnimatedView>
            </View>


            <View className="flex-1 px-6">
                {currentChatScreen === 'friends'
                    ? <ChatFriendScreen onScroll={handleScroll}/>
                    : <ChatExploreScreen onScroll={handleScroll}/>
                }
            </View>
        </SafeAreaView>
    );
};

export default ChatScreen;
