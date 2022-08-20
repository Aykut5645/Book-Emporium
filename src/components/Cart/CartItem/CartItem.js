import { useContext } from 'react';
import { Link } from 'react-router-dom';

import PortalContext from '../../../contexts/portal-context/portal-context';

import classes from './CartItem.module.css';

const CartItem = props => {
    const editedPrice = `$${Number(props.price).toFixed(2)}`;
    const portalCtx = useContext(PortalContext);

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
                <Link to={`/books/${props.id}/details`}>
                    <button onClick={portalCtx.hideCart}>Details</button>
                </Link>
            </div>
        </li>
    );
};

export default CartItem;