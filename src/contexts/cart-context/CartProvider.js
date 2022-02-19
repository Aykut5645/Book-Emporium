import { useReducer } from "react";

import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const updatedItems = state.items.concat(action.payload);
        const updatedTotalAmount = state.totalAmount + action.payload.price;
        
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }
    if (action.type === 'REMOVE_ITEM') {
        const currentItem = state.items[action.payload];
        const updatedTotalAmount = state.totalAmount - currentItem.price;

        const updatedItems = [...state.items];
        updatedItems.splice(action.payload, 1);

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    return state;
};

const CartProvider = (props) => {
    const [cartState, dispatch] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: item
        });
    };

    const removeItemFromCartHandler = index => {
        dispatch({
            type: 'REMOVE_ITEM',
            payload: index
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