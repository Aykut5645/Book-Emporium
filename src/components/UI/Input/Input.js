import { useReducer } from 'react';
import { validator } from '../../../util/validators';

import classes from './Input.module.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
            console.log(validator(action.payload, action.validators).isValid);
            return {
                ...state,
                value: action.payload,
                isValid: validator(action.payload, action.validators)
            };
        case 'INPUT_BLUR':
            return {
                ...state,
                isTouched: true
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
        </div>
    );
};

export default Input;