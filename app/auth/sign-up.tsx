import React, {useEffect} from 'react';
import EmailAuthFormScreen from "@/screens/email-auth-form.screen";
import useAuthStore from "@/store/auth";

const SignUp = () => {
    const {setIsLogin} = useAuthStore()
    useEffect(() => {
        setIsLogin(false);
    }, []);
    return (
        <EmailAuthFormScreen />
    );
};

export default SignUp;