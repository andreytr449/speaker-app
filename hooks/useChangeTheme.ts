import { useCallback } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import useTheme from '@/store/theme';

const useChangeTheme = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    const changeTheme = useCallback(async (theme?: 'light' | 'dark') => {
        const nextTheme = theme ?? (isDarkMode ? 'light' : 'dark');
        await AsyncStorage.setItem('appTheme', nextTheme);
        toggleTheme(nextTheme);
    }, [isDarkMode, toggleTheme]);

    return changeTheme;
};

export default useChangeTheme;
