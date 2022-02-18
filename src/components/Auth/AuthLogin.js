import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import useForm from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE } from '../../util/validators';

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