import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../../contexts/cart-context/cart-context';

import classes from './BookItem.module.css';

const BookItem = (props) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.book.id,
            title: props.book.title,
            price: props.book.price
        });
    };
    //TODO: const isDisabled = Boolean(cartCtx.items.find(item => item.id === props.book.id));
    const editedPrice = Number(props.book.price).toFixed(2);

    return (
        <li className={classes['book']}>
            <div className={classes['book-img-wrapper']}>
                <img src={props.book.imageUrl} alt="" />
            </div>
            <div className={classes['book-content']}>
                <div className={classes['content-info']}>
                    <p><span>Title: {props.book.title}</span></p>
                    <p>Author: {props.book.author}</p>
                    <p>Price: {editedPrice}</p>
                    
                </div>
                <button onClick={addToCartHandler}>Add to Cart</button>
                <Link to={`/books/details/${props.book.id}`}>
                    <button>See more...</button>
                </Link>
            </div>
        </li>
    );
};

export default BookItem;