import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";

type useThemeType = {
    isDarkMode: boolean;
    toggleTheme: (theme: 'dark' | 'light' | null | undefined) => void;
};

const useTheme = create<useThemeType>((set) => ({
    isDarkMode: false,
    toggleTheme: async (theme) => {
        const isDark = theme === 'dark';
        set({ isDarkMode: isDark });
        try {
            await AsyncStorage.setItem('appTheme', isDark ? 'dark' : 'light');
        } catch (e) {
            console.warn("Error with toogle theme:", e);
        }
    },
}));

export default useTheme;