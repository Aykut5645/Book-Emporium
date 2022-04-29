import { Fragment } from 'react/cjs/react.production.min';

import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import BookItem from '../BookItem/BookItem';

import classes from './AvailableBooks.module.css';

const AvailableBooks = ({ books, loading }) => {
    return (
        <Fragment>
            {loading && <LoadingSpinner className={classes['books-spinner']} />}
            <ul className={classes.books}>
                {books.map(book =>
                    <BookItem key={book.id} book={book} />
                )}
            </ul>
        </Fragment>
    );
};

export default AvailableBooks;