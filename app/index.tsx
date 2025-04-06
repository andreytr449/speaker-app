import {useState} from "react";
import {Redirect} from "expo-router";
export default function Index() {
    const [isAuthUser, setIsAuthUser] = useState(false)

    if (!isAuthUser)
        return <Redirect href='/onboarding/welcome' />

    return (
        <></>
    );
}
