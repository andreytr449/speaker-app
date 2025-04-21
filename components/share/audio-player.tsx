import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';
import Slider from '@react-native-community/slider';
import Entypo from '@expo/vector-icons/Entypo';
import useTheme from '@/store/theme';

interface AudioPlayerProps {
    uri: string;
}

const formatTime = (millis: number) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};

const AudioPlayer: React.FC<AudioPlayerProps> = ({ uri }) => {
    const { isDarkMode } = useTheme();
    const [sound, setSound] = useState<Audio.Sound | null>(null);
    const [status, setStatus] = useState<Audio.PlaybackStatus | null>(null);

    useEffect(() => {
        // Завантажуємо звук
        const loadSound = async () => {
            const { sound: snd, status } = await Audio.Sound.createAsync(
                { uri },
                { shouldPlay: false },
                (status) => setStatus(status)
            );
            setSound(snd);
            setStatus(status);
        };
        loadSound();

        // Вивантажуємо при розмонтуванні
        return () => {
            sound && sound.unloadAsync();
        };
    }, [uri]);

    const togglePlayPause = async () => {
        if (!sound || !status) return;
        if (status.isPlaying) {
            await sound.pauseAsync();
        } else {
            await sound.playAsync();
        }
    };

    const onSliderValueChange = async (value: number) => {
        if (!sound || !status || !status.durationMillis) return;
        const position = value * status.durationMillis;
        await sound.setPositionAsync(position);
    };

    return (
        <View className="flex-row items-center gap-2">
            <TouchableOpacity onPress={togglePlayPause}>
                <Entypo
                    name={status?.isPlaying ? 'controller-paus' : 'controller-play'}
                    size={24}
                    color={isDarkMode ? '#fff' : '#000'}
                />
            </TouchableOpacity>
            <Slider
                style={{ flex: 1 }}
                minimumValue={0}
                maximumValue={1}
                value={status && status.positionMillis && status.durationMillis
                    ? status.positionMillis / status.durationMillis
                    : 0}
                onValueChange={onSliderValueChange}
            />
            <Text className={isDarkMode ? 'text-white' : 'text-black'}>
                {status
                    ? `${formatTime(status.positionMillis)} / ${formatTime(status.durationMillis!)}`
                    : '0:00 / 0:00'}
            </Text>
        </View>
    );
};

export default AudioPlayer;
