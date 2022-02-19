import { useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
import CartContext from '../../../contexts/cart-context/cart-context';
import CartItem from '../CartItem/CartItem';

import classes from './Cart.module.css';
import { Fragment } from 'react/cjs/react.production.min';

const Cart = props => {
    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    // const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartItems = (
        <Fragment>
            {cartCtx.totalAmount === 0 && <p className={classes.message}>There are no items. Close it and add one.</p>}
            <ul className={classes['cart-items']}>
                {cartCtx.items.map((item, index) =>
                    <CartItem
                        key={index}
                        title={item.title}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, index)}
                    />
                )}
            </ul>
        </Fragment>
    );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                {cartCtx.totalAmount !== 0 && <button className={classes.button}>
                    Order
                </button>}
            </div>
        </Modal>
    );
};

export default Cart;