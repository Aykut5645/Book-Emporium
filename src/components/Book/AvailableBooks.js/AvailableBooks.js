import { Fragment } from 'react';

import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import BookItem from '../BookItem/BookItem';

import classes from './AvailableBooks.module.css';

const AvailableBooks = ({ books, loading }) => {
    return (
        <Fragment>
            {loading && <LoadingSpinner className={classes['books-spinner']} />}
            {books.length === 0 && !loading && <h1 className={classes.message}>There are no books in database.</h1>}
            <ul className={classes.books}>
                {books.map(book =>
                    <BookItem key={book.id} book={book} />
                )}
            </ul>
        </Fragment>
    );
};

export default AvailableBooks;