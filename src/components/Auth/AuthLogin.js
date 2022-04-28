import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import useForm from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../util/validators';

import classes from './Authenticate.module.css';

const AuthLogin = props => {
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

    const submitHandler = async (event) => {
        event.preventDefault();
        props.onLogin(
            formState.inputs.email.value,
            formState.inputs.password.value
        );
    };
    console.log(props.firebaseError);

    return (
        <Card className={classes.auth}>
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    element="input"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
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
                {props.firebaseError && <p>There is no such user.</p>}
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