import { useState } from 'react';

import { Link } from 'react-router-dom';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import SideDrawer from '../SideDrawer/SideDrawer';
import NavLinks from '../NavLinks/NavLinks';

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
            <Link to='/' style={{ textDecoration: 'none' }}>
                <h1 className={classes["initial-header"]}>
                    Book Emporium
                </h1>
            </Link>
            <nav className={classes['main-nav']}>
                <NavLinks />
            </nav>
            {
                drawerIsOpen && (
                    <>
                        <SideDrawer onClose={closeDrawerHandler}>
                            <nav className={classes['side-nav']}>
                                <NavLinks />
                            </nav>
                        </SideDrawer>
                    </>
                )
            }
            <HeaderCartButton onShowCart={props.onShowCart} />
            <button className={classes['hamburger-btn']} onClick={openDrawerHandler}>
                <i className="fas fa-bars"></i>
            </button>
        </header>
    );
};

export default Header;