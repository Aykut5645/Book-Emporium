import { useState, useContext } from 'react';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../contexts/auth-context';
import { auth } from '../../firebase-config';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';

const AuthRegister = () => {
    const [enteredEmail, setEnteredEmail] = useState('');
    const [touchedEmail, setTouchedEmail] = useState(false);
    const authCtx = useContext(AuthContext);

    const emailChangeHandler = event => {
        console.log(event.target.value);
    };
    const emailBlurHandler = event => {
    };
    // const passwordInputHandler = event => {

    // };
    // const repeatPasswordInputHandler = event => {

    // };

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
        <section className={classes.auth}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <Input 
                    id="email"
                    type="email"
                    name="email"
                    label="Email"
                />
                {/* <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input
                        type='email'
                        name="email"
                        id='email'
                        onChange={emailChangeHandler}
                        onBlur={emailBlurHandler}
                    />
                    <p className={'error-text'}>Something went wrong!</p>
                </div> */}
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input
                        type='password'
                        name="password"
                        id='password'
                    // onChange={passwordInputHandler}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Repeat Password</label>
                    <input
                        type='password'
                        name="repeatPassword"
                        id='repeatPassword'
                    // onChange={repeatPasswordInputHandler}
                    />
                </div>
                <div className={classes.actions}>
                    <button>Register</button>
                    {/* {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request...</p>} */}
                    {/* <button
                        type='button'
                        className={classes.toggle}
                    // onClick={switchAuthModeHandler}
                    >
                        Log in to existing account
                    </button> */}
                </div>
            </form>
        </section>
    );
};

export default AuthRegister;