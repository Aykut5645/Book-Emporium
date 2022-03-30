import { onAuthStateChanged } from 'firebase/auth';
import { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../../../contexts/auth-context';
import { auth } from '../../../../firebase-config';

import classes from './NavLinks.module.css';

import avatar from '../../../../assets/avatar.jpg';

const NavLinks = () => {
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
        <ul className={classes.list}>
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
    );
};

export default NavLinks;