import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';

import classes from './BookDetails.module.css';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';
import CartContext from '../../../contexts/cart-context/cart-context';
import useAuth from '../../../hooks/user-hook';

const BookDetails = props => {
    const currentUser = useAuth();
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.book?.id,
            title: props.book?.title,
            price: props.book?.price
        });
    };
    
    let isOwner = currentUser?.uid === props.book?.credentials.id;

    return (
        <>
            {props.loading && <LoadingSpinner className={classes['book-details-spinner']} />}
            {!props.loading && (
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
                        <Button onClick={addToCartHandler}>Add to Cart</Button>
                        {isOwner && (
                            <>
                                <Button>Delete</Button>
                                <Link to={`/books/${props.book?.id}/edit`}>
                                    <Button>Edit</Button>
                                </Link>
                            </>
                        )}
                    </div>
                </Card>
            )}
        </>
    );
};

export default BookDetails;