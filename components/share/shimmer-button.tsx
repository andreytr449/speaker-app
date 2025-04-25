import React, { useRef, useEffect, useState } from 'react';
import {
    TouchableOpacity,
    Text,
    Animated,
    StyleSheet,
    ViewStyle,
    TextStyle,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

type ShimmerButtonProps = {
    title: string;
    onPress?: () => void;
    isDarkTheme: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
};

const ShimmerButton: React.FC<ShimmerButtonProps> = ({
                                                         title,
                                                         onPress,
                                                         isDarkTheme,
                                                         style,
                                                         textStyle,
                                                     }) => {
    const shimmerAnim = useRef(new Animated.Value(0)).current;
    const [width, setWidth] = useState(0);

    // Theme-based colors
    const bgColor = isDarkTheme ? '#111' : '#EEE';
    const textColor = isDarkTheme ? '#FFF' : '#111';
    const shimmerColors = isDarkTheme
        ? ['transparent', 'rgba(255,255,255,0.3)', 'transparent']
        : ['transparent', 'rgba(0,0,0,0.2)', 'transparent'];



    useEffect(() => {
        // Function to run shimmer animation in loop
        const animate = () => {
            shimmerAnim.setValue(0);
            Animated.timing(shimmerAnim, {
                toValue: 1,
                duration: 1500,
                useNativeDriver: true,
            }).start(({ finished }) => {
                if (finished) animate();
            });
        };

        animate();
    }, [shimmerAnim]);

    // Interpolate translation from -width to +width
    const translateX = shimmerAnim.interpolate({
        inputRange: [0, 1],
        outputRange: [-width, width],
    });



    const styles = StyleSheet.create({
        button: {
            borderRadius: 8,
            paddingVertical: 18,
            paddingHorizontal: 24,
            overflow: 'hidden',
            borderWidth: 1,
            borderColor: isDarkTheme ? '#393939' : '#F2F2F2'
        },
        text: {
            fontSize: 18,
            textAlign: 'center',
        },
        shimmer: {
            position: 'absolute',
            top: 0,
            left: 0,
            bottom: 0,
        },
    });

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={onPress}
            onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
            style={[styles.button, { backgroundColor: bgColor }, style]}
        >
            <Text style={[styles.text, { color: textColor }, textStyle]}>
                {title}
            </Text>

            {width > 0 && (
                <Animated.View
                    style={[
                        styles.shimmer,
                        {
                            width,
                            transform: [{ translateX }],
                        },
                    ]}
                >
                    <LinearGradient
                        colors={shimmerColors}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={StyleSheet.absoluteFill}
                    />
                </Animated.View>
            )}
        </TouchableOpacity>
    );
};

export default ShimmerButton;