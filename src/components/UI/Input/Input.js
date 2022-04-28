import { useEffect, useReducer } from 'react';

import { validator } from '../../../util/validators';
import classes from './Input.module.css';

const inputReducer = (state, action) => {
    switch (action.type) {
        case 'INPUT_CHANGE':
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
        value: props.value || '',
        isValid: props.isValid || false,
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

    const { onInput, id } = props;
    const { value, isValid } = inputState;

    useEffect(() => {
        onInput(id, value, isValid);
    }, [id, value, isValid, onInput]);

    let element;

    if (props.element === 'input') {
        element = (
            <input
                id={props.id}
                name={props.id}
                type={props.type}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                value={inputState.value}
            />
        );
    } else if (props.element === 'select') {
        element = (
            <select
                name={props.id}
                onChange={inputChangeHandler}
                onBlur={inputBlurHandler}
                value={inputState.value}
            >
                {props.options}
            </select>
        );
    }

    return (
        <div className={`
            ${classes['form-control']} 
            ${props.className}
            ${!inputState.isValid && inputState.isTouched && classes.invalid}`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            {element}
            {!inputState.isValid && inputState.isTouched &&
                <p className={'invalid-msg'}>
                    {props.errorMessage}
                </p>
            }
        </div>
    );
};

export default Input;