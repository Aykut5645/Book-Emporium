import { Link } from 'react-router-dom';
import { useState } from 'react';

import Contacts from '../../Contacts/Contacts';

import classes from './Footer.module.css';

const Footer = () => {
    const [show, setShow] = useState(false);

    const showModalHandler = () => {
        // setShow(true);
    };
    return (
        <div className={classes.footer}>
            <div className={classes['footer-info']}>
                <button onClick={showModalHandler}>Contacts</button>
                <Link to="/terms">Terms and Conditions</Link>
                <Link to="/about">About Us</Link>
            </div>
            <div className={classes['footer-icons']}>
                <a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="http://instagram.com"><i className="fab fa-instagram"></i></a>
                <a href="http://twitter.com"><i className="fab fa-twitter"></i></a>
            </div>
            <p>© This site is made with educational purpose only! No rights reserved!</p>
            {show && <Contacts />}
        </div>
    );
};

export default Footer;