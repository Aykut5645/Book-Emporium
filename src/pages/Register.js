import { useContext } from "react";


import AuthRegister from "../components/Auth/AuthRegister";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from '../contexts/auth-context'
import { auth } from "../firebase-config";

const Register = () => {
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