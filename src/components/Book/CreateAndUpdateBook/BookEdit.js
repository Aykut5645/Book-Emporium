import { useState, useEffect } from 'react';

import { useParams } from 'react-router-dom';

import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

import classes from './CreateAndUpdateBook.module.css';
import Input from '../../UI/Input/Input';
import { VALIDATOR_REQUIRE } from '../../../util/validators';
import useForm from '../../../hooks/form-hook';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../../../firebase-config';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const BookEdit = () => {
    const [book, setBook] = useState(null);
    const bookId = useParams().bookId;

    const booksCollectionRef = doc(db, 'books', bookId);

    useEffect(() => {
        (async () => {
            const book = await getDoc(booksCollectionRef);
            setBook({
                id: book.id,
                ...book.data()
            });
        })();
    }, []);

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

    console.log(book?.title);

    const submitHandler = async (event) => {
        event.preventDefault();
        // try {
        //     await updateDoc(currentBookRef, { covers: 'pepe' });
        // } catch (err) {
        //     console.error(err);
        // }
        console.log(formState);
    };

    return (
        <Card className={classes.container}>
            {!book && <LoadingSpinner />}
            <h1>Edit Book Info</h1>
            {book &&
                <form className={classes.form} onSubmit={submitHandler}>
                    <div className={classes['book-info']}>
                        <Input
                            id="title"
                            type="text"
                            label="Title"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid title.'}
                            onInput={inputHandler}
                            element="input"
                            value={book.title}
                            isValid={true}
                        />
                        <Input
                            id="author"
                            type="text"
                            label="Author"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid Author.'}
                            onInput={inputHandler}
                            value={book.author}
                        />
                        <Input
                            id="imageUrl"
                            type="text"
                            label="ImageUrl"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid imageUrl.'}
                            onInput={inputHandler}
                            value={book.imageUrl}
                        />
                        <Input
                            id="genre"
                            type="text"
                            label="Genre"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid genre.'}
                            onInput={inputHandler}
                            value={book.genre}
                        />
                        <Input
                            id="price"
                            type="number"
                            label="price"
                            element="input"
                            validators={[VALIDATOR_REQUIRE()]}
                            errorMessage={'Please enter a valid price.'}
                            onInput={inputHandler}
                            value={book.price}
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
                            value={book.publisher}
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
                                value={book.year}
                            />
                            <Input
                                id="pages"
                                type="number"
                                label="Pages"
                                element="input"
                                validators={[VALIDATOR_REQUIRE()]}
                                errorMessage={'Please enter a valid pages.'}
                                onInput={inputHandler}
                                value={book.pages}
                                isValid={true}
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
                                value={book.state}
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
                                value={book.covers}
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
                            value={book.contacts}
                        />
                    </div>
                    <Button
                        type="submit"
                        // disabled={formState.isValid}
                        className={classes['edit-btn']}
                    >
                        Edit
                    </Button>
                </form>
            }
        </Card >
    );
};

export default BookEdit;