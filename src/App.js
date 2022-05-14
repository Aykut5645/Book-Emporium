import { useContext, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';

import AuthContext from './contexts/auth-context/AuthProvider';

import Layout from "./components/Layout/Layout";
import LoadingSpinner from './components/UI/LoadingSpinner/LoadingSpinner';

const App = () => {
    const authCtx = useContext(AuthContext);

    const Home = lazy(() => import('./pages/Home'));
    const About = lazy(() => import('./pages/About/About'));
    const Terms = lazy(() => import('./pages/Terms/Terms'));
    const Books = lazy(() => import('./pages/Books'));
    const Details = lazy(() => import('./pages/Details'));
    const Login = lazy(() => import('./pages/Login'));
    const Register = lazy(() => import('./pages/Register'));
    const Profile = lazy(() => import('./pages/Profile'));
    const Create = lazy(() => import('./pages/Create'));
    const Edit = lazy(() => import('./pages/Edit'));
    const NotFound = lazy(() => import('./pages/NotFound/NotFound'));

    return (
        <Layout>
            <Suspense fallback={
                <div className="centered">
                    <LoadingSpinner />
                </div>
            }
            >
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
            </Suspense>
        </Layout >
    );
};

export default App;