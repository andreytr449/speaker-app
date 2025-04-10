import {create} from 'zustand';

type AuthState = {
    isLogin?: boolean;
    username: string;
    email: string;
    password: string;
    setIsLogin: (value: boolean) => void;
    setUsername: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
};

const useAuthStore = create<AuthState>((set) => ({
    isLogin: undefined,
    username: '',
    email: '',
    password: '',
    setIsLogin: (isLogin) => set({ isLogin }),
    setUsername: (username) => set({ username }),
    setEmail: (email) => set({ email }),
    setPassword: (password) => set({ password }),
}))

export default useAuthStore;