import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { useVideoPlayer, VideoView } from 'expo-video';

const screenWidth = Dimensions.get('window').width;

const LessonVideoPlayer = ({videoSource}:{videoSource:string}) => {
    const player = useVideoPlayer(videoSource, player => {
        player.loop = true;
        player.play();
    });

    return (
        <View className='flex-1 px-5 items-center justify-center'>
            <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
        </View>
    );
}

export default LessonVideoPlayer;

const styles = StyleSheet.create({
    video: {
        width: screenWidth - 40,
        height: 275,
        borderRadius: 15,
    }
});