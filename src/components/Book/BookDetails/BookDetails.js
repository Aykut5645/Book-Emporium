import { Link } from 'react-router-dom';

import classes from './BookDetails.module.css';

const booksDb = {
    id: 'b1',
    title: 'It',
    author: 'Stephen King',
    price: 20,
    imageUrl: 'https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg'
};

const BookDetails = () => {
    return (
        <div className={classes.container}>
            <div className={classes['book-img-wrapper']}>
                <img src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1334416842l/830502.jpg" alt="" />
            </div>
            <div className={classes['book-content']}>
                <div className={classes['content-info']}>
                    <p><span>Title: {booksDb.title}</span></p>
                    <p>Author: {booksDb.author}</p>
                    <p>Price: {booksDb.price}</p>
                    <p>Condition: good</p>
                    <div className="description">
                        <p>Descripiton: sdlfslakfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssskfmlkasdsafasdfasdfsafassssssssssssssssssssssssssssssssss</p>
                    </div>
                </div>
                <button>Add to Cart</button>
                <button>Delete</button>
                <Link to={`/books/edit/${booksDb.id}`}>
                    <button>Edit</button>
                </Link>
            </div>
        </div>
    );
};

export default BookDetails;