import { useState } from "react";
import { Route } from 'react-router-dom';

import Cart from './components/Cart/Cart/Cart';
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register";

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
            {cartIsShown && <Cart onHideCart={hideCartHandler} />}
            <Route path="/" exact>
                <Home />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/register" exact>
                <Register />
            </Route>
            <Route path="/books">
                <Books />
            </Route>
        </Layout>
    );
}

export default App;

// <CartProvider>
        //     {cartIsShown && <Cart onHideCart={hideCartHandler} />}
        //     <Header onShowCart={showCartHandler} />
        //     <BookSummary />
        //     <main>
        //     </main>
        //     <AvailableBooks />
        //     <Footer />
        // </CartProvider>