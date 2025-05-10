import React, {RefObject} from 'react';
import BottomSheet, {BottomSheetView} from '@gorhom/bottom-sheet';
import {Image, Pressable, ScrollView, Text, View} from 'react-native';
import {ChapterItemType} from "@/store/selected-chapter";
import Button from "@/components/ui/button";
import UserProgress from "@/components/share/user-progress";
import {MarkIcon} from "@/assets/icons/icons";
import {useRouter} from "expo-router";

export interface ChapterCardBottomSheetProps extends ChapterItemType {
    bottomSheetRef: RefObject<BottomSheet>;
    snapPoints: (string | number)[];
    isDarkMode: boolean;
}

const ChapterCardBottomSheet = ({
                                    bottomSheetRef,
                                    isDarkMode,
                                    snapPoints,
                                    isLock,
                                    id,
                                    progress,
                                    description,
                                    imgUri,
                                    title
                                }: ChapterCardBottomSheetProps) => {
    const isActive = false
    const router = useRouter();
    const handlePress = () => {
        router.push({
            pathname: '/lesson/lesson',
            params: {
                id: id
            },
        });
    }
    return (
        <BottomSheet
            ref={bottomSheetRef}
            snapPoints={snapPoints}
            enablePanDownToClose
            index={-1}
            handleIndicatorStyle={{
                backgroundColor: isDarkMode ? '#F8F8F8' : '#131313',
            }}
            backgroundStyle={{
                backgroundColor: isDarkMode ? '#262626' : '#F8F8F8',
            }}
        >
            <BottomSheetView className='flex-1'>
                <ScrollView className='px-6 gap-3'>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} mb-3 text-center text-title-large`}>
                        {title}
                    </Text>
                    <View
                        className='flex-row justify-between items-center mb-4 '>
                        <Text
                            className={`${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'} text-title-small`}>
                            - Chapter 1:Travelling
                        </Text>
                        <Pressable
                            className={`mr-2 w-12 h-12 ${isActive ? 'border-2 border-primary' : `${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'}`}  rounded-[12px] items-center justify-center`}>
                            <MarkIcon isDark={isDarkMode}/>
                        </Pressable>
                    </View>
                    <Image
                        source={{uri: imgUri}}
                        style={{width: '100%', height: 200, borderRadius: 12}}
                    />
                    <View className='my-4'>
                        <Text
                            className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}  mb-3 text-left text-title-medium`}>
                            Completed:
                        </Text>
                        <UserProgress/>
                    </View>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'} mb-3 text-title-small`}>
                        🈯 Level: Intermediate - B1
                    </Text>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'} mb-3 text-title-small`}>
                        ⌛ Duration ~ 10 minutes
                    </Text>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}  my-3 text-left text-title-medium`}>
                        Description
                    </Text>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'} mb-5  text-title-xs`}>
                        {description}
                    </Text>

                </ScrollView>
                <View className='mb-2'>
                    <Button onPress={handlePress}
                            className={isLock ? 'bg-netural' : ''}>🚀 Start
                        lesson</Button>
                </View>
            </BottomSheetView>
        </BottomSheet>
    );
};

export default ChapterCardBottomSheet;