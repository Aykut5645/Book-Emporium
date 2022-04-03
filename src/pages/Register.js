import { useContext } from "react";
import { useHistory } from "react-router-dom";

import AuthRegister from "../components/Auth/AuthRegister";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../contexts/auth-context'
import { auth } from "../firebase-config";

const Register = () => {
    const history = useHistory();
    const authCtx = useContext(AuthContext);

    const registerHandler = async (enteredEmail, enteredPassword) => {
        console.log(enteredEmail, enteredPassword);

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                enteredEmail,
                enteredPassword
            );
            authCtx.login(user._tokenResponse.idToken);
            history.push('/books');
        } catch (error) {
            console.log('IN ERROR');
            console.log('>>> ', error.message);
        }
    };

    return (
        <AuthRegister onRegister={registerHandler} />
    );
};

export default Register;