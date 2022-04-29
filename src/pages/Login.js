import { useState } from 'react';
import { useHistory } from "react-router-dom";

import { useContext } from "react";
import AuthLogin from "../components/Auth/AuthLogin";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase-config";
import AuthContext from '../contexts/auth-context/AuthProvider';

const Login = () => {
    const [firebaseErrorMessage, setfirebaseErrorMessage] = useState();
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const loginHandler = async (enteredEmail, enteredPassword) => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                enteredEmail,
                enteredPassword
            );
            authCtx.login(user._tokenResponse.idToken);
            history.push('/books');
            console.log('LOGGED IN');
        } catch (error) {
            console.log('IN ERROR');
            console.log(error.message);
            setfirebaseErrorMessage(error.message);
        }
    };

    return (
        <AuthLogin onLogin={loginHandler} firebaseErrorMessage={firebaseErrorMessage} />
    );
};

export default Login;