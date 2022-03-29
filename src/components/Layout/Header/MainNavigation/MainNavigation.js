import { onAuthStateChanged } from 'firebase/auth';
import { Fragment, useContext, useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/auth-context';
import { auth } from '../../../../firebase-config';

import classes from './MainNavigation.module.css';

import avatar from '../../../../assets/avatar.jpg';
const MainNavigation = () => {
    const [photoUrl, setPhotoUrl] = useState();
    const authCtx = useContext(AuthContext);
    const logoutHandler = () => {
        authCtx.logout();
    };
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setPhotoUrl(user.photoURL);
            }
        });
    }, []);
    return (
        <Fragment>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className={classes["logo-header"]}>
                    Book Emporium
                </h1>
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
                                    <NavLink activeClassName={classes.active} to='/create'>
                                        Create
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName={classes.active} to='/profile'>
                                        <div className={classes["image-wrapper"]}>
                                            {photoUrl && <img src={photoUrl} alt="" />}
                                            {!photoUrl && <img src={avatar} alt="" />}
                                        </div>
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