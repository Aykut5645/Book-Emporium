import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

import classes from './BookDetails.module.css';

const BookDetails = () => {
    const [book, setBook] = useState(null);

    const { bookId } = useParams();
    const booksCollectionRef = doc(db, 'books', bookId);

    useEffect(() => {
        (async () => {
            const book = await getDoc(booksCollectionRef);
            console.log(book.data());
            setBook(
                book.data()
            );
        })();
    }, []);

    return (
        <div className={classes.container}>
            <div className={classes['book-img-wrapper']}>
                <img src={book?.imageUrl} alt="" />
            </div>
            <div className={classes['book-content']}>
                <div className={classes['content-info']}>
                    <p><span>Title: {book?.title}</span></p>
                    <p>Author: {book?.author}</p>
                    <p>Price: {book?.price}</p>
                    <p>Condition: good</p>
                </div>
                <button>Add to Cart</button>
                <button>Delete</button>
                <Link to={`/books/edit/${book?.id}`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;