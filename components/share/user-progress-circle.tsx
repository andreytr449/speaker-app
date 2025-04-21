import React from 'react';
import {Text, View} from "react-native";
import {AnimatedCircularProgress} from "react-native-circular-progress";

const UserProgressCircle = ({isDarkMode} : {isDarkMode:boolean}) => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#111' }}>
            <AnimatedCircularProgress
                size={160}
                width={17}
                fill={50}
                tintColor="#007AFF"
                backgroundColor={isDarkMode ? '#00254D' : '#E6F2FF'}
                duration={1000}
            >
                {fill => <Text className={`${isDarkMode ? 'text-bg-light' : 'text-bg-dark'} font-bold text-headline-medium`}>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>
        </View>
    );
};

export default UserProgressCircle;