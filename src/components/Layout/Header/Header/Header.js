import { useState } from 'react';

import { Link } from 'react-router-dom';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import MainNavigation from '../MainNavigation/MainNavigation';
import SideDrawer from '../SideDrawer/SideDrawer';

import classes from './Header.module.css';

const Header = props => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(null);

    const openDrawerHandler = () => {
        setDrawerIsOpen(true);
    };

    const closeDrawerHandler = () => {
        setDrawerIsOpen(false);
    };

    return (
        <header className={classes.header}>
            <h1>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    Book Emporium
                </Link>
            </h1>
            {drawerIsOpen && <Backdrop onClick={closeDrawerHandler} />}
            <SideDrawer><MainNavigation /></SideDrawer>
            <HeaderCartButton onShowCart={props.onShowCart} />
            <button className={classes['hamburger-btn']}>
                <i className="fas fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;