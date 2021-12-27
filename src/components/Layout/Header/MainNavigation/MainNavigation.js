import { Fragment, useContext } from 'react';
import { Link } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/auth-context';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    const authCtx = useContext(AuthContext);

    const logoutHandler = () => {
        authCtx.logout();
    };

    return (
        <Fragment>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1>Book Emporium</h1>
            </Link>
            <header className={classes.header}>
                <nav>
                    <ul>
                        {!authCtx.isLoggedIn && (
                            <>
                                <li>
                                    <Link to='/register'>Register</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                            </>
                        )}
                        <li>
                            <Link to='/books'>Books</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        {authCtx.isLoggedIn && (
                            <>
                                <li>
                                    <button onClick={logoutHandler}>Logout</button>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default MainNavigation;