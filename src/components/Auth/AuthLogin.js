// import { useState, useContext } from 'react';
import { useCallback, useState, useReducer } from 'react';

// import { auth } from '../../firebase-config';
// import { signInWithEmailAndPassword } from 'firebase/auth';

// import { AuthContext } from '../../contexts/auth-context';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { VALIDATOR_REQUIRE } from '../../util/validators';
import useForm from '../../hooks/form-hook';

const AuthLogin = () => {
    const [formState, inputHandler] = useForm({
        email: {
            value: '',
            isValid: false
        },
        password: {
            value: '',
            isValid: false
        }
    }, false);
    // const = useState('');
    // const authCtx = useContext(AuthContext);
    const submitHandler = async (event) => {
        event.preventDefault();

        // try {
        //     const user = await signInWithEmailAndPassword(
        //         auth,
        //         enteredEmail,
        //         enteredPassword
        //     );
        //     authCtx.login(user._tokenResponse.idToken);
        // } catch (error) {
        //     console.log('IN ERROR');
        //     console.log(error.message);
        // }
    };

    return (
        <Card className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    element="input"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorMessage={'Please enter a valid email.'}
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    element="input"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorMessage={'Please enter a valid password.'}
                    onInput={inputHandler}
                />
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        className={classes["auth-btn"]}
                        disabled={!formState.isValid}
                    >
                        Login
                    </Button>
                </div>
            </form>
        </Card >
    );
};

export default AuthLogin;