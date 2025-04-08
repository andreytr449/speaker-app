import React, {useEffect} from 'react';
import EmailAuthFormScreen from "@/screens/email-auth-form.screen";
import useAuthStore from "@/store/auth";

const SignIn = () => {
    const {setIsLogin} = useAuthStore()
    useEffect(() => {
        setIsLogin(true);
    }, []);
    return (
        <EmailAuthFormScreen/>
    );
};

export default SignIn;