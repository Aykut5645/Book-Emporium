import { Fragment } from 'react';

import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';

import classes from './Header.module.css';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Book Emporium</h1>
                <HeaderCartButton onShowCart={props.onShowCart} />
            </header>
        </Fragment>
    );
};

export default Header;