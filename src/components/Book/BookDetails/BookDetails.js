import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebase-config';

import classes from './BookDetails.module.css';

const BookDetails = () => {
    const [book, setBook] = useState(null);
    const { bookId } = useParams();

    useEffect(() => {
        (async () => {
            const book = await getDoc(doc(db, 'books', bookId));
            setBook({
                id: book.id,
                ...book.data()
            });
        })();
    }, [bookId]);

    return (
        <Card className={classes.container}>
            <div className={classes['book-content']}>
                <h2>About Book</h2>
                <div className={classes['content-info']}>
                    <p><span>Title: </span>{book?.title}</p>
                    <p><span>Author: </span>{book?.author}</p>
                    <p><span>Genre: </span>{book?.genre}</p>
                    <p><span>Price: </span>{book?.price}</p>
                    <p><span>Contacts: </span>{book?.contacts}</p>
                </div>
            </div>
            <div className={classes['book-img-wrapper']}>
                <img src={book?.imageUrl} alt="" />
            </div>
            <div className={classes['book-content-edition']}>
                <h2>About Edition</h2>
                <div className={classes['content-info']}>
                    <p><span>Publisher: </span>{book?.publisher}</p>
                    <p><span>Condition: </span>{book?.condition}</p>
                    <p><span>Year: </span>{book?.year}</p>
                    <p><span>Pages: </span>{book?.pages}</p>
                    <p><span>Covers: </span>{book?.covers}</p>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button>Add to Cart</Button>
                <Button>Delete</Button>
                <Link to={`/books/${book?.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </div>
        </Card>
    );
};

/*
<Card className={classes.container}>
            <div className={classes['book-content']}>
                <h2>About Book</h2>
                <div className={classes['content-info']}>
                    <p><span>Title: </span>{book?.title}</p>
                    <p><span>Author: </span>{book?.author}</p>
                    <p><span>Genre: </span>{book?.genre}</p>
                    <p><span>Price: </span>{book?.price}</p>
                    <p><span>Contacts: </span>{book?.contacts}</p>
                </div>
                <Button>Add to Cart</Button>
                <Button>Delete</Button>
                <Link to={`/books/${book?.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </div>
            <div className={classes['book-img-wrapper']}>
                <img src={book?.imageUrl} alt="" />
            </div>
            <div className={classes['book-content-edition']}>
                <h2>About Edition</h2>
                <div className={classes['content-info']}>
                    <p><span>Edition: </span>{book?.edition}</p>
                    <p><span>Condition: </span>{book?.condition}</p>
                    <p><span>Year: </span>{book?.year}</p>
                    <p><span>Pages: </span>{book?.pages}</p>
                    <p><span>Covers: </span>{book?.covers}</p>
                </div>
                <Button className={'last-btn'}>Add to Cart</Button>
            </div>
        </Card>
*/

export default BookDetails;