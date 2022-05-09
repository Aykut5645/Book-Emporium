import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import AuthRegister from "../components/Auth/AuthRegister";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../contexts/auth-context/AuthProvider";
import { auth } from "../firebase-config";

const Register = () => {
    let [firebaseErrorMessage, setfirebaseErrorMessage] = useState();
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const registerHandler = async (enteredEmail, enteredPassword) => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                enteredEmail,
                enteredPassword
            );
            authCtx.login(user._tokenResponse.idToken, enteredPassword);
            history.push('/books');
        } catch (error) {
            console.log('IN ERROR');
            console.log('>>> ', error.message);
            setfirebaseErrorMessage(error.message);
        }
    };

    return (
        <AuthRegister onRegister={registerHandler} firebaseErrorMessage={firebaseErrorMessage}/>
    );
};

export default Register;