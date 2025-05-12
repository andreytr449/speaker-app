import {useEffect, useState} from "react";
import {Redirect} from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {View, ActivityIndicator} from "react-native";

export default function Index() {
    const [isAuthUser, setIsAuthUser] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getUserToken = async () => {
            const userToken = await AsyncStorage.getItem('token');
            if (userToken) {
                setIsAuthUser(true);
            }else{
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
