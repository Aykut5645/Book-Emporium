import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './CreateAndUpdateBook.module.css';
import Input from '../../UI/Input/Input';
import { VALIDATOR_REQUIRE } from '../../../util/validators';
import useForm from '../../../hooks/form-hook';

const BookCreate = props => {
    const [formState, inputHandler] = useForm({
        title: {
            value: '',
            isValid: false
        },
        author: {
            value: '',
            isValid: false
        },
        imageUrl: {
            value: '',
            isValid: false
        },
        genre: {
            value: '',
            isValid: false
        },
        price: {
            value: '',
            isValid: false
        },
        publisher: {
            value: '',
            isValid: false
        },
        year: {
            value: '',
            isValid: false
        },
        pages: {
            value: '',
            isValid: false
        },
        state: {
            value: '',
            isValid: false
        },
        covers: {
            value: '',
            isValid: false
        },
        contacts: {
            value: '',
            isValid: false
        }
    }, false);

    const submitHandler = event => {
        event.preventDefault();

        let createdData = {};
        for (const input in formState.inputs) {
            createdData[input] = formState.inputs[input].value;
        }
        props.onCreateData(createdData);
    };

    return (
        <Card className={classes.container}>
            <h1>Create Book</h1>
            <form className={classes.form} onSubmit={submitHandler}>
                <div className={classes['book-info']}>
                    <Input
                        id="title"
                        type="text"
                        label="Title"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid title.'}
                        onInput={inputHandler}
                    />
                    <Input
                        id="author"
                        type="text"
                        label="Author"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid Author.'}
                        onInput={inputHandler}
                    />
                    <Input
                        id="imageUrl"
                        type="text"
                        label="ImageUrl"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid imageUrl.'}
                        onInput={inputHandler}
                    />
                    <Input
                        id="genre"
                        type="text"
                        label="Genre"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid genre.'}
                        onInput={inputHandler}
                    />
                    <Input
                        id="price"
                        type="number"
                        label="price"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid price.'}
                        onInput={inputHandler}
                    />
                </div>
                <div className={classes['book-publisher']}>
                    <Input
                        id="publisher"
                        type="text"
                        label="Publisher"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid publisher.'}
                        onInput={inputHandler}
                    />
                    <div className={classes.inline}>
                        <Input
                            id="year"
                            type="number"
                            label="Year"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid year.'}
                            onInput={inputHandler}
                        />
                        <Input
                            id="pages"
                            type="number"
                            label="Pages"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid pages.'}
                            onInput={inputHandler}
                        />
                    </div>
                    <div className={classes.inline}>
                        <Input
                            id="state"
                            label="Condition"
                            element="select"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid state.'}
                            options={
                                <>
                                    <option></option>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Very Good">Very Good</option>
                                    <option value="Good">Good</option>
                                    <option value="Bad">Bad</option>
                                    <option value="Very Bad">Very Bad</option>
                                </>
                            }
                            onInput={inputHandler}
                        />
                        <Input
                            id="covers"
                            label="Covers"
                            element="select"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid covers.'}
                            options={
                                <>
                                    <option></option>
                                    <option value="Soft">Soft</option>
                                    <option value="Hard">Hard</option>
                                </>
                            }
                            onInput={inputHandler}
                        />
                    </div>
                    <Input
                        id="contacts"
                        type="text"
                        label="Contacts"
                        element="input"
                        validators={[VALIDATOR_REQUIRE()]}
                        errorMessage={'Please enter a valid contacts.'}
                        onInput={inputHandler}
                    />
                </div>
                <Button
                    type="submit"
                    disabled={!formState.isValid}
                    className={classes['edit-btn']}
                >
                    Create
                </Button>
            </form>
        </Card >
    );
};

export default BookCreate;