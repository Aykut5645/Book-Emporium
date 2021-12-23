import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + action.price;
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    // if (action.type === 'REMOVE_BOOK') {

    // }

    return defaultCartState;
};

const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        console.log(item);
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatch({
            type: 'REMOVE_BOOK',
            payload: id
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
};

export default CartProvider;