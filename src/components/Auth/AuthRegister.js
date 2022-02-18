import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { VALIDATOR_REQUIRE } from '../../util/validators';
import useForm from '../../hooks/form-hook';

const AuthRegister = props => {
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

    const submitHandler = event => {
        event.preventDefault();

        props.onRegister(
            formState.inputs.email.value,
            formState.inputs.password.value
        );
    };

    return (
        <Card className={classes.auth}>
            <h1>Register</h1>
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
                    errorMessage={'Please enter a valid password'}
                    onInput={inputHandler}
                />
                <Input
                    id="repeatPassword"
                    type="password"
                    label="Repeat Password"
                    element="input"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorMessage={'Please enter a valid password'}
                    onInput={inputHandler}
                />
                <div className={classes.actions}>
                    <Button
                        type="submit"
                        disabled={!formState.isValid}
                        className={classes["auth-btn"]}
                    >
                        Register
                    </Button>
                </div>
            </form>
        </Card>
    );
};

export default AuthRegister;