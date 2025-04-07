import React from 'react';
import {Text, View} from "react-native";
import useTheme from "@/store/theme";

const EmailAuthFormScreen = ({isLogin}: { isLogin: boolean }) => {
    const {isDarkMode} = useTheme()

    return (
        <View className={`items-center justify-center flex-1 ${isDarkMode ? 'bg-bg-dark' : 'bg-bg-light'}`}>
            <Text>
                {isLogin ?
                    'EmailAuthFormScreen login'
                    :
                    'EmailAuthFormScreen register'}
            </Text>
        </View>
    );
};

export default EmailAuthFormScreen;