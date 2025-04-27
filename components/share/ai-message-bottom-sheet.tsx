import React, {RefObject} from 'react';
import BottomSheet, {BottomSheetView} from "@gorhom/bottom-sheet";
import {ScrollView, Text, View} from "react-native";
import {AIRobot} from "@/assets/images/onboarding/hello_img";
import ShimmerButton from "@/components/share/shimmer-button";


const AiMessageBottomSheet = ({bottomSheetRef, isDarkMode, snapPoints}: {
    bottomSheetRef: RefObject<BottomSheet>;
    snapPoints: (string | number)[];
    isDarkMode: boolean;
}) => {
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
                backgroundColor: isDarkMode ? '#131313' : '#F8F8F8',
            }}
        >
            <BottomSheetView
                className={`flex-1 px-4 ${isDarkMode ? 'bg-bg-dark' : 'bg-surfaces-light-1'} justify-between pb-6`}>

                <ScrollView className="flex-1 pb-4">


                    <View className='justify-center items-center my-5'>
                        <AIRobot isDarkMode={isDarkMode}/>
                    </View>
                    <Text
                        className={`text-center mb-3 justify-center ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'} text-title-large`}>
                        Complete the lesson to get the best results.
                    </Text>
                    <Text
                        className={`text-center justify-center ${isDarkMode ? 'text-body-primary-dark' : 'text-body-primary-light'} text-title-medium`}>
                        Use the power of AI to learn faster!
                    </Text>


                </ScrollView>
                <View className='py-2 gap-2'>
                    <ShimmerButton title={'Start the lesson 🚀'}
                                   isDarkTheme={isDarkMode}/>
                    <Text style={{color: '#BDBDBD'}}
                          className={`text-center justify-center text-neutral text-title-xs font-extralight`}>
                        Test data will not be saved if you exit early.
                    </Text>
                </View>

            </BottomSheetView>
        </BottomSheet>
    );
};

export default AiMessageBottomSheet;