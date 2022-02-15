import { useCallback, useReducer } from 'react';

const formReducer = (state, action) => {
    let formIsValid;
    switch (action.type) {
        case 'INPUT_CHANGE':
            for (const inputId in state.inputs) {
                if (inputId === action.inputId) {
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

const useForm = (initialInputs, initialFormValidity) => {
    const [formState, dispatch] = useReducer(formReducer, {
        inputs: initialInputs,
        formIsValid: initialFormValidity
    });

    const inputHandler = useCallback((id, value, isValid) => {
        dispatch({
            type: 'INPUT_CHANGE',
            inputId: id,
            value: value,
            isValid: isValid
        });
    }, []);

    return [formState, inputHandler];
};

export default useForm;