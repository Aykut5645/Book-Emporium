import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";

import AuthRegister from "../components/Auth/AuthRegister";
import { createUserWithEmailAndPassword } from "firebase/auth";
import AuthContext from "../contexts/auth-context/AuthProvider";
import { auth } from "../firebase-config";
import LoadingSpinner from "../components/UI/LoadingSpinner/LoadingSpinner";

const Register = () => {
    let [firebaseErrorMessage, setfirebaseErrorMessage] = useState();
    let [loading, setLoading] = useState(false);
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const registerHandler = async (enteredEmail, enteredPassword) => {
        try {
            setLoading(true);
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
        setLoading(false);
    };

    return (
        <>
            {loading && <LoadingSpinner />}
            {!loading && <AuthRegister onRegister={registerHandler} firebaseErrorMessage={firebaseErrorMessage} />}
        </>
    );
};

export default Register;