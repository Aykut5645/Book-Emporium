import React from 'react';
import { Link } from 'react-router-dom';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './BookDetails.module.css';

const BookDetails = props => {
    console.log(props);
    return (
        <Card className={classes.container}>
            <div className={classes['book-content']}>
                <h2>About Book</h2>
                <div className={classes['content-info']}>
                    <p><span>Title: </span>{props.book?.title}</p>
                    <p><span>Author: </span>{props.book?.author}</p>
                    <p><span>Genre: </span>{props.book?.genre}</p>
                    <p><span>Price: </span>{props.book?.price}</p>
                    <p><span>Contacts: </span>{props.book?.contacts}</p>
                </div>
            </div>
            <div className={classes['book-img-wrapper']}>
                <img src={props.book?.imageUrl} alt="" />
            </div>
            <div className={classes['book-content-edition']}>
                <h2>About Edition</h2>
                <div className={classes['content-info']}>
                    <p><span>Publisher: </span>{props.book?.publisher}</p>
                    <p><span>Condition: </span>{props.book?.condition}</p>
                    <p><span>Year: </span>{props.book?.year}</p>
                    <p><span>Pages: </span>{props.book?.pages}</p>
                    <p><span>Covers: </span>{props.book?.covers}</p>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button>Add to Cart</Button>
                <Button>Delete</Button>
                <Link to={`/books/${props.book?.id}/edit`}>
                    <Button>Edit</Button>
                </Link>
            </div>
        </Card>
    );
};

export default BookDetails;