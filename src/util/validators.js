const VALIDATOR_TYPE_REQUIRE = 'REQUIRE';
const VALIDATION_TYPE_EMAIL = 'EMAIL';

export const VALIDATOR_REQUIRE = () => ({ type: VALIDATOR_TYPE_REQUIRE, errorMessage: 'EMPTYYYYY' });
export const VALIDATOR_EMAIL = () => ({ type: VALIDATION_TYPE_EMAIL });

export const validator = (value, validators) => {
    validators.forEach(validator => {
        if (validator.type === VALIDATOR_TYPE_REQUIRE) {
            return {
                isValid: value.trim().length > 0,
                errorMessage: validator.errorMessage
            };
        }
    });
};