import classes from './AuthRegister.module.css';

const AuthRegister = () => {

    const submitHandler = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const enteredEmail = formData.get('email').trim();
        const enteredPassword = formData.get('password').trim();
        const enteredRepeatPassword = formData.get('repeatPassword').trim();

        try {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDsjXKGZ1q93KkNzDH6DgHfL8yi5OtuLyM', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: enteredEmail,
                    password: enteredPassword,
                    returnSecureToken: true
                })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(
                    errorData.error.message || 'Authentication failed!'
                );
            }
        } catch (error) {
            console.log(error);
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