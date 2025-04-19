import React from 'react';
import {FlatList, Text, View} from "react-native";
import useTheme from "@/store/theme";
import TodayTasks from "@/components/share/today-tasks";

const ChatExploreScreen = () => {
    const {isDarkMode} = useTheme()
    return (
        <FlatList
            data={[1,2,3,4]}
            renderItem={({item}) => <View />}
            ListHeaderComponent={<TodayTasks />}
        />
    );
};

export default ChatExploreScreen;