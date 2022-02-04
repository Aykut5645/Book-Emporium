import { useState } from "react";
import { Route, Switch } from 'react-router-dom';

import Cart from './components/Cart/Cart/Cart';
import Layout from "./components/Layout/Layout";

import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Profil from "./pages/Profile";

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
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/profile">
                    <Profil />
                </Route>
                <Route path="/create">
                    <Create />
                </Route>
                <Route path="/books" exact>
                    <Books />
                </Route>
                <Route path="/books/:bookId/details">
                    <Details />
                </Route>
                <Route path="/books/:bookId/edit">
                    <Edit />
                </Route>
            </Switch>
        </Layout>
    );
};

export default App;