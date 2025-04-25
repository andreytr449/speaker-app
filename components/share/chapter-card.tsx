import React from 'react';
import {View, Text, Image, Pressable} from "react-native";
import useTheme from "@/store/theme";
import {LockIcon, MarkIcon} from "@/assets/icons/icons";
import {LinearGradient} from 'expo-linear-gradient';
import useCurrentChapterItem from "@/store/selected-chapter";


const ChapterCard = ({title, imgUri, isActive, isLast, isLock, onPress}: {
    title: string,
    imgUri: string,
    isActive: boolean,
    isLast: boolean,
    isLock?: boolean
    onPress: () => void,
}) => {
    const {isDarkMode} = useTheme()
    const {setChapterItem} = useCurrentChapterItem()
    const startColor = isDarkMode ? '#393939' : '#F2F2F2';
    const endColor = '#007AFF';
    const addToFavorite = () => {
        console.log('favourite!')
    }
    const handlePress = () => {
        console.log('PRESS!!!')
        setChapterItem({
            title: title,
            imgUri: imgUri,
            progress: 45,
            isLock: false,
            description: 'Talk about hotel situations with this lesson! Students practise hotel-related vocabulary, watch a short video on a hotel stay and share their own experiences. They also work in pairs and role-play hotel scenarios.'
        })
        onPress()
    }
    return (
        <View
            className={`w-full flex-row rounded-[12px] justify-between items-center p-2 ${isActive ? `${isDarkMode ? 'bg-surfaces-dark-2' : 'bg-surfaces-light-2'}` : ''} relative`}>
            <Pressable onPress={handlePress} className='flex-row gap-2 '>
                <View
                    className={`z-10 h-[90px] w-[90px] justify-center items-center border-4 overflow-hidden ${isActive ? 'border-primary' : `${isDarkMode ? 'border-border-dark' : 'border-border-light'}`}  rounded-full`}>
                    {isLock &&
											<View className='absolute z-20'>
												<LockIcon isDark={isActive ? true : isDarkMode}/>
											</View>
                    }
                    <Image source={{uri: imgUri}}
                           className={`w-16 h-16 rounded-full ${isLock ? 'opacity-35' : ''}`}/>
                    {isLock && isActive && (
                        <View
                            className='absolute bg-primary w-16 h-16 rounded-full z-10 opacity-45'/>
                    )}
                </View>
                <View className='w-auto max-w-56'>
                    <Text
                        className={`mt-3 text-body-large ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'}`}>
                        {title}
                    </Text>
                </View>
            </Pressable>

            <Pressable onPress={addToFavorite}
                       className={`mr-2 w-12 h-12 ${isActive ? 'border-2 border-primary' : `${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}  rounded-[12px] items-center justify-center`}>
                <MarkIcon isDark={isDarkMode}/>
            </Pressable>

            {isLast ?
                <View
                    style={{position: 'absolute', bottom: '-28%', left: '14%'}}>
                    <LinearGradient
                        colors={[startColor, endColor]}
                        style={{height: 35, width: 3}}
                        start={{x: 0, y: 0}}
                        end={{x: 0, y: 1}}
                    />
                </View>
                :
                <View
                    className={`absolute h-[35px] w-[3px] ${isDarkMode ? 'bg-border-dark' : 'bg-border-light'} bottom-[-28%] left-[14%] `}/>
            }
        </View>
    );
};

export default ChapterCard;