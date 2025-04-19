import React from 'react';
import {FlatList, Text, View} from "react-native";
import useTheme from "@/store/theme";
import {dummyTodayTasks} from "@/constans";
import TodayTaskBox from "@/components/share/today-task-box";

const TodayTasks = () => {
    const {isDarkMode} = useTheme()

    return (
        <View className="mb-4 flex-1">
            <Text className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium my-5`}>
                Tasks today
            </Text>
            <FlatList
                data={dummyTodayTasks}
                renderItem={({item}) => (
                    <View className="px-2">
                        <TodayTaskBox title={item.title} count={item.count} type={item.type} />
                    </View>
                )}
                contentContainerClassName={'flex-1 mr-[121px]'}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.type}
            />
        </View>
    );
};

export default TodayTasks;
