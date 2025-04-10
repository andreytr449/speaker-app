import {create} from "zustand";

type useThemeType = {
    isDarkMode: boolean
    toggleTheme: (theme: 'dark' | 'light' | null | undefined) => void
}

const useTheme = create<useThemeType>((set) => ({
    isDarkMode: false,
    toggleTheme: (theme) => {
        if (theme === 'dark') {
            set({isDarkMode: true});
        } else {
            set({isDarkMode: false});
        }
    }
}))

export default useTheme