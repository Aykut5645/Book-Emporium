import { Fragment } from 'react';
import { Link } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <Fragment>
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1>Book Emporium</h1>
            </Link>
            <header className={classes.header}>
                <nav>
                    <ul>
                        <li>
                            <Link to='/books'>Books</Link>
                        </li>
                        <li>
                            <Link to='/register'>Register</Link>
                        </li>
                        <li>
                            <Link to='/login'>Login</Link>
                        </li>
                        <li>
                            <Link to='/profile'>Profile</Link>
                        </li>
                        <li>
                            <button>Logout</button>
                        </li>
                    </ul>
                </nav>
            </header>
        </Fragment>
    );
};

export default MainNavigation;