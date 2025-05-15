import React, { useEffect, useRef } from 'react';
import { Animated, View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import useTheme from '@/store/theme';

const SkeletonChapterCard = () => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;
    const { isDarkMode } = useTheme();

    useEffect(() => {
        Animated.loop(
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1000,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    const translateX = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-200, 200],
    });

    const bgColor = isDarkMode ? '#333' : '#e0e0e0';

    return (
        <View style={[styles.card, { backgroundColor: bgColor }]}>
            <View style={styles.image} />
            <View style={styles.textBlock}>
                <View style={styles.textLine} />
                <View style={[styles.textLine, { width: '60%' }]} />
            </View>
            <Animated.View
                style={[
                    StyleSheet.absoluteFill,
                    {
                        transform: [{ translateX }],
                    },
                ]}
            >
                <LinearGradient
                    colors={['transparent', 'rgba(255,255,255,0.3)', 'transparent']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                />
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        height: 100,
        borderRadius: 12,
        overflow: 'hidden',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 16,
        marginBottom: 16,
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: '#ccc',
    },
    textBlock: {
        flex: 1,
        marginLeft: 16,
        justifyContent: 'center',
    },
    textLine: {
        height: 12,
        borderRadius: 6,
        backgroundColor: '#bbb',
        marginBottom: 8,
        width: '80%',
    },
});

export default SkeletonChapterCard;
