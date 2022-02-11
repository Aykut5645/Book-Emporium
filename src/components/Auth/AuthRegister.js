import { useCallback, useReducer } from 'react';

// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { AuthContext } from '../../contexts/auth-context';
// import { auth } from '../../firebase-config';

import classes from './Authenticate.module.css';
import Input from '../UI/Input/Input';
import Card from '../UI/Card/Card';
import Button from '../UI/Button/Button';
import { VALIDATOR_EMAIL, VALIDATOR_REQUIRE } from '../../util/validators';

const formReducer = (state, action) => {
    let formIsValid;
    switch (action.type) {
        case 'INPUT_CHANGE':
            for (const inputId in state.inputs) {
                if (inputId === action.inputs) {
                    formIsValid = action.isValid;
                } else {
                    formIsValid = state.inputs[inputId].isValid;
                }
            }
            return {
                ...state,
                inputs: {
                    ...state.inputs,
                    [action.inputId]: { value: action.value, isValid: action.isValid }
                },
                isValid: formIsValid
            };
        default:
            return state;
    }
};

const AuthRegister = () => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: {
            email: {
                value: '',
                isValid: false
            },
            password: {
                value: '',
                isValid: false
            }
        },
        formIsValid: false
    });
    // const authCtx = useContext(AuthContext);

    // const emailChangeHandler = event => {
    //     console.log(event.target.value);
    // };
    // const emailBlurHandler = event => {
    // };
    // // const passwordInputHandler = event => {

    // // };
    // // const repeatPasswordInputHandler = event => {

    // // };

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            inputId: id,
            value: value,
            isValid: isValid
        });
    }, []);

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log('SUBMITED'); // send this to backend!!!
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
        <Card className={classes.auth}>
            <h1>Register</h1>
            <form onSubmit={submitHandler}>
                <Input
                    id="email"
                    type="email"
                    label="Email"
                    validators={[VALIDATOR_REQUIRE(), VALIDATOR_EMAIL()]}
                    errorMessage={'Please enter a valid email.'}
                    onInput={inputHandler}
                />
                <Input
                    id="password"
                    type="password"
                    label="Password"
                    validators={[VALIDATOR_REQUIRE()]}
                    errorMessage={'Please enter a valid password'}
                    onInput={inputHandler}
                />
                <Input
                    id="repeatPassword"
                    type="password"
                    label="Repeat Password"
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