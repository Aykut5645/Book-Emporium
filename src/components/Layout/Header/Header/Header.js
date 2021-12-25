import { Fragment } from 'react';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import MainNavigation from '../MainNavigation/MainNavigation';

import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <MainNavigation />
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
        </Fragment>
    );
};

export default Header;