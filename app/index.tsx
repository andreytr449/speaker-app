import {useEffect, useState} from "react";
import {Redirect} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {
    const [isAuthUser, setIsAuthUser] = useState(false)

    useEffect(() => {
        const getUserToken = async () => {
            const userToken = await AsyncStorage.getItem('token');
            if (!userToken) {
                setIsAuthUser(false)
            } else {
                setIsAuthUser(true)
            }
        }
        getUserToken()
    }, []);

    if (!isAuthUser) {
        return <Redirect href='/onboarding/welcome'/>
    } else return <Redirect href='/(tabs)/book'/>

}
