import { useState } from "react";

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Cart from './components/Cart/Cart/Cart';
import BookSummary from './components/Book/BookSummary/BookSummary';
import AvailableBooks from "./components/Book/AvailableBooks.js/AvailableBooks";
import CartProvider from "./contexts/cart-context/CartProvider";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <CartProvider>
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <BookSummary />
            <main>
            </main>
                <AvailableBooks />
            <Footer />
        </CartProvider>
    );
}

export default App;
