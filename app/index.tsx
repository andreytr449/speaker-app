import {useState} from "react";
import {Redirect} from "expo-router";

export default function Index() {
    const [isAuthUser, setIsAuthUser] = useState(true)

    if (!isAuthUser)
        return <Redirect href='/onboarding/welcome' />
    if(isAuthUser)
        return <Redirect href='/(tabs)/book' />

    return (
        <></>
    );
}
