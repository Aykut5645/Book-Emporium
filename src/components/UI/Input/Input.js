import { useReducer } from 'react';
import { validator } from '../../../util/validators';

import classes from './Input.module.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            return {
                ...state,
                value: action.payload,
                isValid: validator(action.payload, action.validators).isValid
            };
        case 'INPUT_BLUR':
            return {
                ...state,
                isTouched: true,
            };
        default:
            return state;
    }
};

const Input = props => {
    const [inputState, dispatch] = useReducer(inputReducer, {
        value: '',
        isValid: false,
        isTouched: false
    });

    const inputChangeHandler = event => {
        dispatch({
            type: 'INPUT_CHANGE',
            payload: event.target.value,
            validators: props.validators
        });
    };

    const inputBlurHandler = () => {
        dispatch({ type: 'INPUT_BLUR' });
    };
    console.log(inputState);
    return (
        <div className={`
            ${classes['form-control']} 
            ${!inputState.isValid && inputState.isTouched && classes.invalid}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                id={props.id}
                name={props.id}
                type={props.type}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
            />
            {!inputState.isValid && inputState.isTouched &&
                <p className={classes.invalid}>
                    {props.errorMessage}
                </p>
            }
        </div>
    );
};

export default Input;