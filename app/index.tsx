import {useEffect, useState} from "react";
import {Redirect, router} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, ActivityIndicator} from "react-native";
import {API} from "@/services/api";
import {User} from "@/types/user.types";

export default function Index() {
    const [isAuthUser, setIsAuthUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserToken = async () => {
            const userToken = await AsyncStorage.getItem('token');
            if (userToken) {
                try {
                    const resp: {
                        data: User
                    } = await API.user.getUserData(userToken)
                    if (!resp.data.isVerified) {
                        router.replace('/auth/confirmation-code')
                    } else
                        setIsAuthUser(true);
                } catch (e) {
                    setIsAuthUser(false);
                    await AsyncStorage.removeItem('token');
                }
            } else {
                setIsAuthUser(false);
            }
            setIsLoading(false);
        };
        getUserToken();
    }, []);

    if (isLoading) {
        return (
            <View style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center"
            }}>
                <ActivityIndicator size="large"/>
            </View>
        );
    }

    return isAuthUser
        ? <Redirect href='/(tabs)/book'/>
        : <Redirect href='/onboarding/welcome'/>;
}
