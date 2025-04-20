import React from 'react';
import {
    FlatList,
    NativeScrollEvent,
    NativeSyntheticEvent,
    View,
    Text
} from 'react-native';
import TodayTasks from '@/components/share/today-tasks';
import useTheme from '@/store/theme';

type Props = {
    onScroll: (e: NativeSyntheticEvent<NativeScrollEvent>) => void;
};

const ChatExploreScreen: React.FC<Props> = ({ onScroll }) => {
    const { isDarkMode } = useTheme();
    return (
        <FlatList
            data={[1,2,3,4,1,2,3,4,1,2,3,4]}
            renderItem={({ item }) => (
                <View className="h-96 w-full bg-primary mb-4 p-5">
                    <Text>123123</Text>
                </View>
            )}
            ListHeaderComponent={<TodayTasks />}
            onScroll={onScroll}
            scrollEventThrottle={16}
        />
    );
};

export default ChatExploreScreen;
