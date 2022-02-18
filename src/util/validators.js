const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATOR_TYPE_EMAIL = 'EMAIL';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE, errorMessage: 'EMPTYYYYY' });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATOR_TYPE_EMAIL, errorMessage: 'EMAILLLL' });

export const validator = (value, validators) => {
    let finalResult = {};
    for (const validator of validators) {
        if (validator.type === VALIDATOR_TYPE_REQUIRE && value.trim().length > 0) {
            finalResult = {
                isValid: value.trim().length > 0,
                errorMessage: validator.errorMessage
            };
        }
        // if (validator.type === VALIDATOR_TYPE_EMAIL && value.includes('@')) {
        //     finalResult = {
        //         isValid: true,
        //         errorMessage: validator.errorMessage
        //     };
        // }
    }
    
    return finalResult;
};