import React, {useEffect, useRef} from 'react';
import {Image, View, Animated} from "react-native";
import useTheme from "@/store/theme";

const Loading = ({text}: { text?: string }) => {
    const {isDarkMode} = useTheme();
    const opacity = useRef(new Animated.Value(1)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(opacity, {
                    toValue: 0.3,
                    duration: 700,
                    useNativeDriver: true,
                }),
                Animated.timing(opacity, {
                    toValue: 1,
                    duration: 700,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    }, []);

    return (
        <View
            className={`${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'} flex-1 justify-center items-center gap-5`}>
            <Image source={require('@/assets/images/loading.gif')}
                   className="w-64 h-64"/>

            <Animated.Text
                style={{
                    opacity,
                    fontSize: 26,
                    fontWeight: 500,
                    color: isDarkMode ? '#fff' : '#000',
                    marginTop: 8,
                }}
            >
                {text ? text : 'Loading...'}
            </Animated.Text>
        </View>
    );
};

export default Loading;