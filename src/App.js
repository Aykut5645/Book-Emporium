import { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContext from './contexts/auth-context/AuthProvider';

import Layout from "./components/Layout/Layout";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import Edit from "./pages/Edit";
import Create from "./pages/Create";
import Profile from "./pages/Profile";
import About from "./pages/About/About";
import Terms from "./pages/Terms/Terms";
import NotFound from './pages/NotFound/NotFound';

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/terms">
                    <Terms />
                </Route>
                <Route path="/books" exact>
                    <Books />
                </Route>
                <Route path="/books/:bookId/details">
                    <Details />
                </Route>
                <Route path="/login">
                    {!authCtx.isLoggedIn ? <Login /> : <Home />}
                </Route>
                <Route path="/register">
                    {!authCtx.isLoggedIn ? <Register /> : <Home />}
                </Route>
                <Route path="/profile">
                    {authCtx.isLoggedIn ? <Profile /> : <Login />}
                </Route>
                <Route path="/create">
                    {authCtx.isLoggedIn ? <Create /> : <Login />}
                </Route>
                <Route path="/books/:bookId/edit">
                    {authCtx.isLoggedIn ? <Edit /> : <Login />}
                </Route>
                <Route path="*">
                    <NotFound />
                </Route>
            </Switch>
        </Layout >
    );
};

export default App;