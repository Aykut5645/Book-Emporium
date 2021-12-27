import { useContext } from 'react/cjs/react.development';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { AuthContext } from '../../../contexts/auth-context';
import { auth } from '../../../firebase-config';

import classes from './AuthRegister.module.css';

const AuthRegister = () => {
    const authCtx = useContext(AuthContext);
    
    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const enteredEmail = formData.get('email').trim();
        const enteredPassword = formData.get('password').trim();
        const enteredRepeatPassword = formData.get('repeatPassword').trim();

        try {
            if (enteredPassword !== enteredRepeatPassword) {
                throw new Error('Passwords don\'t match!');
            }

            const user = await createUserWithEmailAndPassword(
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
        <section className={classes.auth}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' name="email" id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' name="password" id='password' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Repeat Password</label>
                    <input type='password' name="repeatPassword" id='repeatPassword' required />
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