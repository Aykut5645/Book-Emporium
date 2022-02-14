import { useState, useContext } from 'react';

import { auth } from '../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { AuthContext } from '../../contexts/auth-context';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';

const AuthLogin = () => {
    // const = useState('');

    const authCtx = useContext(AuthContext);

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const enteredEmail = formData.get('email').trim();
        const enteredPassword = formData.get('password').trim();

        try {
            const user = await signInWithEmailAndPassword(
                auth,
                enteredEmail,
                enteredPassword
            );
            authCtx.login(user._tokenResponse.idToken);
        } catch (error) {
            console.log('IN ERROR');
            console.log(error.message);
        }
    };

    return (
        <Card className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                {/* <Input
                    id="email"
                    type="email"
                    label="Email"
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                /> */}
                <div className={classes.actions}>
                    <Button type="submit" className={classes["auth-btn"]}>
                        Login
                    </Button>
                </div>
            </form>
        </Card >
    );
};

export default AuthLogin;