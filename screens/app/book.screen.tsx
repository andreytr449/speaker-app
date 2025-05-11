import React, {useMemo, useRef} from 'react';
import useTheme from "@/store/theme";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from "react-native";
import BookHeader from "@/components/share/book-header";
import OnBoardingTitle from "@/components/share/on-boarding-title";
import UserProgress from "@/components/share/user-progress";
import {DiscountIcon, MarkIcon} from "@/assets/icons/icons";
import Chapter from "@/components/share/chapter";
import OffersButton from "@/components/share/offers-button";
import BottomSheet from "@gorhom/bottom-sheet";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import ChapterCardBottomSheet
    from "@/components/share/chapter-card-bottom-sheet";
import useCurrentChapterItem from "@/store/selected-chapter";
import ShimmerButton from "@/components/share/shimmer-button";
import InstaStories from "@/components/share/insta-stories";
import AiMessageBottomSheet from "@/components/share/ai-message-bottom-sheet";

const BookScreen = () => {
    const {isDarkMode} = useTheme()
    const bottomSheetRef = useRef<BottomSheet>(null);
    const aiBottomSheetRef = useRef<BottomSheet>(null);
    const snapPoints = useMemo(() => ['50%'], []);
    const {
        title,
        progress,
        isLock,
        description,
        imgUri,
        id
    } = useCurrentChapterItem()
    const handleOpenSheet = () => {
        if (
            title !== undefined &&
            imgUri !== undefined &&
            id !== undefined &&
            description !== undefined &&
            progress !== undefined
        ) bottomSheetRef.current?.expand();
    };

    const handleOpenAISheet = () => {
        aiBottomSheetRef.current?.expand();
    };

    return (
        <GestureHandlerRootView className='flex-1'>
            <SafeAreaView
                className={`flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} `}>
                <ScrollView showsVerticalScrollIndicator={false}
                            className='px-5 mt-5'>
                    <BookHeader/>
                    <View className='my-5 flex-row justify-between'>
                        <OnBoardingTitle>Intermediate - B1</OnBoardingTitle>
                        <Pressable
                            className={`w-12 h-12 ${isDarkMode ? 'bg-surfaces-dark-1' : 'bg-surfaces-light-1'} rounded-[12px] items-center justify-center`}>
                            <MarkIcon isDark={isDarkMode}/>
                        </Pressable>
                    </View>
                    <UserProgress/>

                    <View className='mt-8 gap-3'>
                        <ShimmerButton
                            isDarkTheme={isDarkMode}
                            title="Learn English with AI"
                            onPress={handleOpenAISheet}
                        />
                        <OffersButton buttonTitle='7 days - Free'
                                      title='Try Premium For Free'
                                      bgIcon={<DiscountIcon/>}
                        />
                    </View>

                    <View className='mt-7 gap-4'>
                        <Text
                            className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} text-title-medium`}>Your Stories ❤️</Text>
                        <InstaStories isDarkMode={isDarkMode}/>
                    </View>

                    <Chapter chapterTitle='Chapter - 1' chapterName='Traveling'
                             onCardPress={handleOpenSheet}/>
                    <Chapter chapterTitle='Chapter - 2' chapterName='Friendship'
                             onCardPress={handleOpenSheet}
                             isLock={true}/>

                </ScrollView>

                <ChapterCardBottomSheet bottomSheetRef={bottomSheetRef}
                                        snapPoints={snapPoints}
                                        isDarkMode={isDarkMode}
                                        title={title}
                                        id={id}
                                        description={description}
                                        imgUri={imgUri}
                                        isLock={isLock}
                                        progress={progress}
                />

                <AiMessageBottomSheet
                    bottomSheetRef={aiBottomSheetRef}
                    snapPoints={snapPoints}
                    isDarkMode={isDarkMode}
                />

            </SafeAreaView>
        </GestureHandlerRootView>
    );
};

export default BookScreen;