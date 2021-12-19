// import { useContext } from 'react';

import Modal from '../../UI/Modal/Modal';
// import CartContext from '../../store/cart-context';
// import CartItem from './CartItem';

import classes from './Cart.module.css';

const Cart = props => {
    const cartItems = (
        <ul className={classes['cart-items']}>
            {[{ id: 'c1', name: 'sushi', amount: 2, price: 12.99 }].map(
                item => <li>{item.name}</li>
            )}
        </ul>
    );
    // const cartCtx = useContext(CartContext);

    // const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    // const hasItems = cartCtx.items.length > 0;

    // const cartItemRemoveHandler = id => {
    //     cartCtx.removeItem(id);
    // };

    // const cartItemAddHandler = item => {
    //     cartCtx.addItem(item);
    // };

    // const cartItems = (
    //     <ul className={classes['cart-items']}>
    //         {cartCtx.items.map(item =>
    //             <CartItem
    //                 key={item.id}
    //                 name={item.name}
    //                 price={item.price}
    //                 amount={item.amount}
    //                 onAdd={cartItemAddHandler.bind(null, item)}
    //                 onRemove={cartItemRemoveHandler.bind(null, item.id)}
    //             />
    //         )}
    //     </ul>
    // );

    return (
        <Modal onHideCart={props.onHideCart}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>33.33</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes['button--alt']}
                onClick={props.onHideCart}
                // onRemove={cartItemRemoveHandler}
                >
                    Close
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;