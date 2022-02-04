import { Fragment, useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';

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
                                    <NavLink activeClassName={classes.active} to='/register'>
                                        Register
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName={classes.active} to='/login'>
                                        Login
                                    </NavLink>
                                </li>
                            </>
                        )}
                        <li>
                            <NavLink activeClassName={classes.active} to='/books'>
                                Books
                            </NavLink>
                        </li>
                        {authCtx.isLoggedIn && (
                            <>
                                <li>
                                    <NavLink activeClassName={classes.active} to='/profile'>
                                        Profile
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName={classes.active} to='/create'>
                                        Create
                                    </NavLink>
                                </li>
                                <li>
                                    <button onClick={logoutHandler}>
                                        Logout
                                    </button>
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