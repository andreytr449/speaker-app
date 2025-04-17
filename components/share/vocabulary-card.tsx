import React, {useState} from 'react';
import {Image, View, Text, Pressable} from 'react-native';
import useTheme from '@/store/theme';
import {
    ArrowDown,
    ProgressChartActiveIcon,
    ProgressChartIcon
} from '@/assets/icons/icons';
import Button from "@/components/ui/button";


const VocabularyCard = ({
                            title,
                            imgUri,
                            isActive = false,
                        }: {
    title: string;
    imgUri: string;
    isActive?: boolean;
}) => {
    const {isDarkMode} = useTheme();
    const [expanded, setExpanded] = useState(false);

    let bgColor = isDarkMode ? 'bg-surfaces-dark-1 border-border-dark' : 'bg-surfaces-light-1 border-border-light';
    if (isActive) {
        bgColor = isDarkMode ? 'bg-surfaces-dark-2 border-border-dark' : 'bg-surfaces-light-2 border-border-light';
    }

    const toggleExpand = () => {
        setExpanded(prev => !prev);
    };

    return (
        <View className="mt-5">
            <Pressable onPress={toggleExpand}
                       className={`${bgColor} rounded-[12px] border`}>
                <View className="flex-row justify-between items-center px-5 py-3">
                    <View className="flex-row gap-4 items-center">
                        {isActive ? (
                            <View className="p-1 rounded-full border-2 border-primary">
                                <Image source={{uri: imgUri}}
                                       className="w-16 h-16 rounded-full"/>
                            </View>
                        ) : (
                            <Image source={{uri: imgUri}}
                                   className="w-16 h-16 rounded-full"/>
                        )}
                        <View className="max-w-[70%]">
                            <Text
                                className={`text-body-medium ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                                {title}
                            </Text>
                        </View>
                    </View>

                    <View className="justify-center items-center gap-3 transform">
                        {isActive ? (
                            <ProgressChartActiveIcon isDark={isDarkMode}/>
                        ) : (
                            <ProgressChartIcon isDark={isDarkMode}/>
                        )}
                        <View
                            style={{transform: [{rotate: expanded ? '180deg' : '0deg'}]}}>
                            <ArrowDown isDark={isDarkMode}/>
                        </View>
                    </View>
                </View>

                {expanded && (
                    <View
                        className="px-5 pb-4 flex-row items-center justify-center gap-1">
                        <View className='flex-1'>

                            <Button className='px-1 py-2 mx-1'
                                    fullCustomTextClassName='text-label-small text-body-primary-dark'>
                                {isActive ?
                                    'Continue Learning'
                                    :
                                    'Start Learning'
                                }
                            </Button>
                        </View>
                        {isActive &&
													<View className='flex-1'>
														<Button className='bg-red px-1 py-2 mx-1'
														        fullCustomTextClassName='text-label-small text-body-primary-dark'>Delete
															From Favourite</Button>
													</View>
                        }
                    </View>
                )}
            </Pressable>
        </View>
    );
};

export default VocabularyCard;
