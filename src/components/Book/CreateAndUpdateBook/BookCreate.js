import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './CreateAndUpdateBook.module.css';
import Input from '../../UI/Input/Input';

const BookCreate = props => {
    const submitHandler = event => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const finalData = Object.fromEntries(formData);

        // VALIDATION!!!

        props.onInput(finalData);
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
                    />
                    <Input
                        id="author"
                        type="text"
                        label="Author"
                        element="input"
                    />
                    <Input
                        id="imageUrl"
                        type="text"
                        label="ImageUrl"
                        element="input"
                    />
                    <Input
                        id="genre"
                        type="text"
                        label="Genre"
                        element="input"
                    />
                    <Input
                        id="price"
                        type="number"
                        label="price"
                        element="input"
                    />
                </div>
                <div className={classes['book-publisher']}>
                    <Input
                        id="publisher"
                        type="text"
                        label="Publisher"
                        element="input"
                    />
                    <div className={classes.inline}>
                        <Input
                            id="year"
                            type="number"
                            label="Year"
                            element="input"
                        />
                        <Input
                            id="pages"
                            type="number"
                            label="Pages"
                            element="input"
                        />
                    </div>
                    <div className={classes.inline}>
                        <Input
                            id="state"
                            label="Condition"
                            element="select"
                            options={
                                <>
                                    <option value="Excellent">Excellent</option>
                                    <option value="Very Good">Very Good</option>
                                    <option value="Good">Good</option>
                                    <option value="Bad">Bad</option>
                                    <option value="Very Bad">Very Bad</option>
                                </>
                            }
                        />
                        <Input
                            id="covers"
                            label="Covers"
                            element="select"
                            options={
                                <>
                                    <option value="Soft">Soft</option>
                                    <option value="Hard">Hard</option>
                                </>
                            }
                        />
                    </div>
                    <Input
                        id="contacts"
                        type="text"
                        label="Contacts"
                        element="input"
                    />
                </div>
                <Button type="submit" className={classes['edit-btn']}>
                    Create
                </Button>
            </form>
        </Card >
    );
};

export default BookCreate;