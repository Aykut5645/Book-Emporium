import BookItem from '../BookItem/BookItem';

import classes from './AvailableBooks.module.css';

const AvailableBooks = ({ books }) => {
    return (
        <ul className={classes.books}>
            {books.map(book =>
                <BookItem key={book.id} book={book} />
            )}
        </ul>
    );
};

export default AvailableBooks;