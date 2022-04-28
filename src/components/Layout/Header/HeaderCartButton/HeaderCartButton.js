import { useContext } from 'react';

import CartIcon from '../../../Cart/CartIcon';
import CartContext from '../../../../contexts/cart-context/cart-context';

import classes from './HeaderCartButton.module.css';
import PortalContext from '../../../../contexts/portal-context/portal-context';

const HeaderCartButton = props => {
    const cartCtx = useContext(CartContext);
    const portalCtx = useContext(PortalContext);

    const numberOfCartItems = cartCtx.items.length;

    return (
        <button
            className={classes.button}
            onClick={portalCtx.showCart}
        >
            <span className={classes.icon}>
                <CartIcon />
            </span>
            {/* <span>
                Your Cart
            </span> */}
            <span className={classes.badge}>
                {numberOfCartItems}
            </span>
        </button>
    );
};

export default HeaderCartButton;