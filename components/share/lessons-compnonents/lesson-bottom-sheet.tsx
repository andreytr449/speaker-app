import React, {RefObject} from 'react';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {ScrollView, Text, View} from "react-native";
import {ChapterItemType} from "@/store/selected-chapter";
import {selectedAnswer} from "@/screens/app/lesson/lesson.screen";
import {MistakeIcon, SuccessIcon} from "@/assets/icons/icons";
import Button from "@/components/ui/button";

export interface ChapterCardBottomSheetProps extends ChapterItemType {
    bottomSheetRef: RefObject<BottomSheet>;
    snapPoints: (string | number)[];
    isDarkMode: boolean;
    selectedAnswer: selectedAnswer
    updatePage: () => void;
    description: string
}

const LessonBottomSheet = ({
                               bottomSheetRef,
                               isDarkMode,
                               snapPoints,
                               updatePage,
                               selectedAnswer,
                               description
                           }: ChapterCardBottomSheetProps) => {
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
                    {selectedAnswer?.correct ?
                        <View className='flex-row gap-3 items-center'>
                            <SuccessIcon fill='#38AD49'/>
                            <Text
                                className={`text-green mb-5 text-title-medium mt-5`}>
                                Right
                            </Text>
                        </View>
                        :
                        <View className='flex-row gap-3 items-center'>
                            <MistakeIcon fill='#D53F36'/>
                            <Text
                                className={`text-red mb-5 text-title-medium mt-5`}>
                                Wrong
                            </Text>
                        </View>
                    }
                    <Text
                        className={`${isDarkMode ? 'text-bg-light/60' : 'text-bg-dark/60'} mb-5  text-title-xs`}>
                        Note:
                    </Text>
                    <Text
                        className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}  text-title-medium `}>
                        {description}
                    </Text>
                </ScrollView>
                <View className='mb-7'>
                    <Button fullCustomClassName={`mx-4 justify-center items-center py-3 rounded-[12px] ${selectedAnswer.correct ? 'bg-green' : 'bg-red'}`} onPress={updatePage}>Continue</Button>
                </View>

            </BottomSheetView>
        </BottomSheet>
    );
};

export default LessonBottomSheet;