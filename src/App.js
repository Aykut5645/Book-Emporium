import { Fragment, useState } from "react";

import Header from './components/Layout/Header/Header';
import Footer from './components/Layout/Footer/Footer';
import Cart from './components/Cart/Cart/Cart';
import BookSummary from './components/Book/BookSummary/BookSummary';

function App() {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Fragment>
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <BookSummary />
            <main>
            </main>
            <Footer />
        </Fragment>
    );
}

export default App;
