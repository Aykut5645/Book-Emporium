import { useContext } from 'react';
import { Link } from 'react-router-dom';

import CartContext from '../../../contexts/cart-context/cart-context';
import Button from '../../UI/Button/Button';
import Card from '../../UI/Card/Card';

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
    const editedPrice = '$' + Number(props.book.price).toFixed(2);

    return (
        <Card className={classes.book}>
            <div className={classes['book-content']}>
                <div className={classes['book-img-wrapper']}>
                    <img src={props.book.imageUrl} alt="" />
                </div>
                <div className={classes['book-info']}>
                    <p><span>Title: </span>{props.book.title}</p>
                    <p><span>Author: </span>{props.book.author}</p>
                    <p><span>Price: </span>{editedPrice}</p>
                </div>
            </div>
            <div className={classes.buttons}>
                <Button className={classes['btn-add-cart']} onClick={addToCartHandler}>
                    Add to Cart
                </Button>
                <Link to={`/books/${props.book.id}/details`}>
                    <Button className={classes['btn-detail']}>Details</Button>
                </Link>
            </div>
        </Card>
    );
};

export default BookItem;