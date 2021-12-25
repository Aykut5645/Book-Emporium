import { useState } from "react";
import { Route } from 'react-router-dom';

import Home from "./pages/Home";

// import Header from './components/Layout/Header/Header';
// import Footer from './components/Layout/Footer/Footer';
import Cart from './components/Cart/Cart/Cart';
import BookSummary from './components/Book/BookSummary/BookSummary';
import CartProvider from './contexts/cart-context/CartProvider';
import Layout from "./components/Layout/Layout";
import { useContext } from "react/cjs/react.development";
import Books from "./pages/Books";

const App = () => {
    const [cartIsShown, setCartIsShown] = useState(false); //TODO: try to refactoring it using context!!!

    const showCartHandler = () => {
        setCartIsShown(true);
    };

    const hideCartHandler = () => {
        setCartIsShown(false);
    };

    return (
        <Layout onShowCart={showCartHandler}>
            {cartIsShown && <Cart onHideCart={hideCartHandler}/>}
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/books">
                <Books />
            </Route>
        </Layout>
        // <CartProvider>
        //     {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        //     <Header onShowCart={showCartHandler} />
        //     <BookSummary />
        //     <main>
        //     </main>
        //     <AvailableBooks />
        //     <Footer />
        // </CartProvider>
    );
}

export default App;
