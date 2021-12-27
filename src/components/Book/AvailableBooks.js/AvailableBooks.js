import { useState, useEffect } from 'react';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config';

import BookItem from '../BookItem/BookItem';

import classes from './AvailableBooks.module.css';

const AvailableBooks = () => {
    const [books, setBooks] = useState([]);
    const booksCollectionRef = collection(db, 'books');

    useEffect(() => {
        (async () => {
            const data = await getDocs(booksCollectionRef);
            setBooks(
                data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            );
        })();
    }, []);

    return (
        <ul className={classes.books}>
            {books.map(book =>
                <BookItem key={book.id} book={book} />
            )}
        </ul>
    );
};

export default AvailableBooks;