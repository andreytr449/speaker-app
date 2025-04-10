import React, {Dispatch, SetStateAction, useRef} from 'react';
import {
    View,
    Text,
    Animated,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
} from 'react-native';
import useTheme from "@/store/theme";
import * as Haptics from 'expo-haptics';


const {width: SCREEN_WIDTH} = Dimensions.get('window');

export default function DailyTimePicker({DATA, setActiveIndex}: {DATA: number[],setActiveIndex: Dispatch<SetStateAction<number>>}) {
    const scrollX = useRef(new Animated.Value(0)).current;
    const flatListRef = useRef(null);
    const {isDarkMode} = useTheme()

    const ITEM_WIDTH = 70;
    const SPACING = 20;
    const FULL_ITEM_WIDTH = ITEM_WIDTH + SPACING;
    const leftPadding = (SCREEN_WIDTH - FULL_ITEM_WIDTH) / 2;

    const renderItem = ({item, index}) => {
        const inputRange = [
            (index - 2) * FULL_ITEM_WIDTH,
            (index - 1) * FULL_ITEM_WIDTH,
            index * FULL_ITEM_WIDTH,
            (index + 1) * FULL_ITEM_WIDTH,
            (index + 2) * FULL_ITEM_WIDTH,
        ];

        const scale = scrollX.interpolate({
            inputRange,
            outputRange: [0.8, 0.9, 1.2, 0.9, 0.8],
            extrapolate: 'clamp',
        });

        const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 1, 1, 0.5],
            extrapolate: 'clamp',
        });

        const backgroundColor = scrollX.interpolate({
            inputRange,
            outputRange: isDarkMode ?['#262626', '#262626', '#00254D', '#262626', '#262626'] : ['#F8F8F8', '#F8F8F8', '#E6F2FF', '#F8F8F8', '#F8F8F8'],
            extrapolate: 'clamp',
        });

        return (
            <View style={{width: FULL_ITEM_WIDTH, alignItems: 'center', marginTop: 10}}>
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => {
                        setActiveIndex(index);
                        flatListRef.current?.scrollToIndex({
                            index,
                            animated: true,
                            viewOffset: 0.5,
                        });
                        Haptics.selectionAsync()
                        console.log('Active element:', item);
                    }}
                >
                    <Animated.View
                        style={[
                            styles.itemContainer,
                            {
                                transform: [{scale}],
                                opacity,
                                backgroundColor,
                            },
                        ]}
                    >
                        <Text style={{fontSize: 40}} className={`font-semibold ${isDarkMode ? 'text-bg-light' : 'text-bg-dark'}`}>{item}</Text>
                    </Animated.View>
                </TouchableOpacity>
            </View>
        );
    };

    return (
        <View style={{padding: 10, height: 140}}>
            <Animated.FlatList
                ref={flatListRef}
                data={DATA}
                keyExtractor={(item) => item.toString()}
                renderItem={renderItem}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: leftPadding,
                }}
                getItemLayout={(data, index) => ({
                    length: FULL_ITEM_WIDTH,
                    offset: FULL_ITEM_WIDTH * index,
                    index,
                })}
                onScroll={Animated.event(
                    [{nativeEvent: {contentOffset: {x: scrollX}}}],
                    {useNativeDriver: false}
                )}
                scrollEventThrottle={16}
                onMomentumScrollEnd={(e) => {
                    const index = Math.round(e.nativeEvent.contentOffset.x / FULL_ITEM_WIDTH);
                    console.log('Centered element:', DATA[index]);
                }}
            />
            <View className='justify-center items-center pr-16'>
                <Text style={{fontSize: 20, paddingLeft: 20}}
                      className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} font-semibold text-label-small`}>min/day</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        width: 70,
        height: 70,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
