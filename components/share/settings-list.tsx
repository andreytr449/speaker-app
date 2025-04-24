import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";

export interface itemType {
    name: string;
    value: React.ReactNode;
    type: 'text' | 'component'
}

interface settingListProps {
    title: string;
    items: itemType[]
}

const SettingsList = ({items, title}: settingListProps) => {
    const {isDarkMode} = useTheme()
    return (
        <View className='px-5 gap-3'>
            <View className='flex justify-start items-start my-2'>
                <Text
                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-small`}>{title}</Text>
            </View>
            <View className='gap-2 pr-1'>
                {items.map((item, index) => (
                    <>
                        <View key={index + item.name}
                              className='flex-row justify-between items-center'>
                            <Text
                                className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-small`}>{item.name}</Text>


                            {item.type === 'text' ?
                                <Text
                                    className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-body-medium`}>{item.value}</Text>
                                :
                                item.value
                            }
                        </View>
                        <View
                            className={`w-full h-[2px] my-3 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}/>

                    </>
                ))}
            </View>
        </View>
    );
};

export default SettingsList;