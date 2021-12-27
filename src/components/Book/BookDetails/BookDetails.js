import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../../firebase-config';

import classes from './BookDetails.module.css';

const BookDetails = () => {
    const [book, setBook] = useState();
    const booksCollectionRef = collection(db, 'books');

    useEffect(() => {
        (async () => {
            const data = await getDocs(booksCollectionRef);
            setBook(
                data.docs.map(doc => ({ ...doc.data(), id: doc.id }))
            );
        })();
    }, []);
    
    return (
        <div className={classes.container}>
            <div className={classes['book-img-wrapper']}>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg" alt="" />
            </div>
            <div className={classes['book-content']}>
                <div className={classes['content-info']}>
                    <p><span>Title: {book.title}</span></p>
                    <p>Author: {book.author}</p>
                    <p>Price: {book.price}</p>
                    <p>Condition: good</p>
                    <div className="description">
                        <p>Descripiton: sdlfslakfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssss</p>
                    </div>
                </div>
                <button>Add to Cart</button>
                <button>Delete</button>
                <Link to={`/books/edit/${book.id}`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;