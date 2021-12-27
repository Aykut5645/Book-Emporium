import { useContext } from 'react/cjs/react.development';
import { auth } from '../../../firebase-config';
import { signInWithEmailAndPassword } from 'firebase/auth';

import { AuthContext } from '../../../contexts/auth-context';

import classes from './AuthLogin.module.css';

const AuthLogin = () => {
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
        <section className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <div className={classes.control}>
                    <label htmlFor='email'>Your Email</label>
                    <input type='email' name="email" id='email' required />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Your Password</label>
                    <input type='password' name="password" id='password' required />
                </div>
                <div className={classes.actions}>
                    <button>Login</button>
                    {/* {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
                    {isLoading && <p>Sending request...</p>} */}
                    {/* <button
                        type='button'
                        className={classes.toggle}
                    >
                        Create new account
                    </button> */}
                </div>
            </form>
        </section>
    );
};

export default AuthLogin;