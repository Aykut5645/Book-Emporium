import { useState } from 'react';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_EMAIL, VALIDATOR_MINLENGTH } from '../../util/validators';
import useForm from '../../hooks/form-hook';

const AuthRegister = props => {
    const [isMatch, setIsMatch] = useState(false);
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
        const formData = new FormData(event.currentTarget);
        let password = formData.get('password').trim();
        let repeatPassword = formData.get('repeatPassword').trim();

        if (password !== '' && repeatPassword !== '' && password === repeatPassword) {
            setIsMatch(false);
            props.onRegister(
                formState.inputs.email.value,
                formState.inputs.password.value
            );
        } else {
            setIsMatch(true);
        }
    };

    return (
        <Card className={classes.auth}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    label="Email"
                    element="input"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    errorMessage={'Please enter a valid email.'}
                    onInput={inputHandler}
                />
                {props.firebaseErrorMessage && <p className="invalid-msg">Such user already exists. Please try with another email.</p>}
                <Input
                    id="password"
                    name="password"
                    type="password"
                    label="Password"
                    element="input"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(6)]}
                    errorMessage={'Password must be at least 6 charachers long.'}
                    onInput={inputHandler}
                />
                <Input
                    id="repeatPassword"
                    type="password"
                    name="repeatPassword"
                    label="Repeat Password"
                    element="input"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorMessage={'Repeat password is required!'}
                    onInput={inputHandler}
                />
                {isMatch && <p className="invalid-msg">Passwords do not match!</p>}
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