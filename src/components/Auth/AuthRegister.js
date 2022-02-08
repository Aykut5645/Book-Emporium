import { useState, useContext } from 'react';

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { AuthContext } from '../../contexts/auth-context';
// import { auth } from '../../firebase-config';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../util/validators';

const AuthRegister = () => {
    // const authCtx = useContext(AuthContext);

    // const emailChangeHandler = event => {
    //     console.log(event.target.value);
    // };
    // const emailBlurHandler = event => {
    // };
    // // const passwordInputHandler = event => {

    // // };
    // // const repeatPasswordInputHandler = event => {

    // // };

    const submitHandler = async (event) => {
        event.preventDefault();

        // try {
        //     // if (enteredPassword !== enteredRepeatPassword) {
        //     //     throw new Error('Passwords don\'t match!');
        //     // }

        //     const user = await createUserWithEmailAndPassword(
        //         auth,
        //         enteredEmail,
        //         enteredPassword
        //     );
        //     authCtx.login(user._tokenResponse.idToken);
        // } catch (error) {
        //     console.log('IN ERROR');
        //     console.log('>>> ', error.message);
        //     if (!error.message) {
        //         console.log('Passwords don\'t match!');
        //     }
        // }
    };

    return (
        <Card className={classes.auth}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_REQUIRE()]}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                />
                <Input
                    id="RepeatPassword"
                    type="password"
                    label="Repeat Password"
                />
                <div className={classes.actions}>
                    <Button type="submit" className={classes["auth-btn"]}>
                        Register
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default AuthRegister;