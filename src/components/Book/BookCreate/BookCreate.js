import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './BookCreate.module.css';

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
            <form onSubmit={submitHandler} className={classes.form}>
                <div className={classes['book-info']}>
                    <div className={classes.control}>
                        <label htmlFor='title'>Title</label>
                        <input type='text' id='title' name='title' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='author'>Author</label>
                        <input type='text' id='author' name='author' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='image-url'>ImageUrl</label>
                        <input type='text' id='image-url' name='image-url' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='genre'>Genre</label>
                        <input type='text' id='genre' name='genre' />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='price'>Price</label>
                        <input type='number' id='price' name='price' />
                    </div>
                </div>
                <div className={classes['book-publisher']}>
                    <div className={classes.control}>
                        <label htmlFor='publisher'>Publisher</label>
                        <input type='text' id='publisher' name='publisher' />
                    </div>
                    <div className={classes.inline}>
                        <div className={classes.control}>
                            <label htmlFor='year'>Year</label>
                            <input type='number' id='year' name='year' />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor='pages'>Pages</label>
                            <input type='number' id='pages' name='pages' />
                        </div>
                    </div>
                    <div className={classes.inline}>
                        <div className={classes.control}>
                            <label>Condition</label>
                            <select name='state'>
                                <option value="Excellent">Excellent</option>
                                <option value="Very Good">Very Good</option>
                                <option value="Good">Good</option>
                                <option value="Bad">Bad</option>
                                <option value="Very Bad">Very Bad</option>
                            </select>
                        </div>
                        <div className={classes.control}>
                            <label>Covers</label>
                            <select name='covers'>
                                <option value="Soft">Soft</option>
                                <option value="Hard">Hard</option>
                            </select>
                        </div>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='pages'>Contacts</label>
                        <input type='text' id='contacts' name='contacts' />
                    </div>
                </div>
                <Button type="submit" className={classes['edit-btn']}>Create</Button>
            </form>
        </Card >
    );
};

export default BookCreate;