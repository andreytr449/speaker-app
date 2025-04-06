import {create} from "zustand";

type useThemeType = {
    isDarkMode: boolean
    toggleTheme: (theme: 'dark' | 'light' | null | undefined) => void
}

const useTheme = create<useThemeType>((set) => ({
    isDarkMode: false,
    toggleTheme: (theme) => {
        console.log('Toggling to theme:', theme);
        if (theme === 'dark') {
            set({isDarkMode: true});
        } else {
            set({isDarkMode: false});
        }
    }
}))

export default useTheme