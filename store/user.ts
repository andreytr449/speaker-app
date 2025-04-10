import {create} from 'zustand';

type userStore = {
    isLogged: boolean
    seIsLogged: (value:boolean) => void
}

const useUserStore = create<userStore>((set) => ({
    isLogged: false,
    seIsLogged: (value) => {set({isLogged: value});},
}))

export default useUserStore