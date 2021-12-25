import classes from './AuthLogin.module.css';

const AuthLogin = () => {
    return (
        <section className={classes.auth}>
            <h1>Login</h1>
            <form>
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
                    <button
                        type='button'
                        className={classes.toggle}
                        // onClick={switchAuthModeHandler}
                    >
                        Create new account
                    </button>
                </div>
            </form>
        </section>
    );
};

export default AuthLogin;