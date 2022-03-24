import classes from './CartItem.module.css';

const CartItem = props => {
    const editedPrice = `$${props.price.toFixed(2)}`;

    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.title}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{editedPrice}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={props.onRemove}>Remove</button>
                <button>Details</button>
            </div>
        </li>
    );
};

export default CartItem;