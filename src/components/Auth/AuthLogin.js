import { useState } from 'react';
import { Link, Prompt } from 'react-router-dom';

import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import useForm from '../../hooks/form-hook';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL } from '../../util/validators';

import classes from './Authenticate.module.css';

const AuthLogin = props => {
    const [isEntering, setIsEntering] = useState(false);
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

    const focusHandler = () => {
        setIsEntering(true);
    };

    return (
        <>
            <Prompt
                when={isEntering}
                message={() => 'Are you sure that you want to leave? All your changes and entered data can be lost!'
                }
            />
            <Card className={classes.auth}>
                <h1>Login</h1>
                <form onSubmit={submitHandler} onFocus={focusHandler}>
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
                    {props.firebaseErrorMessage && <p className="invalid-msg">Such a user does not exist. Please try again.</p>}
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
                <p className={classes.offer}>Don't have an account? <Link to="/register">Sign up now</Link></p>
            </Card >
        </>
    );
};

export default AuthLogin;