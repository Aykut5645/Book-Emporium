import { useState } from 'react';
import { Link } from 'react-router-dom';

import Contacts from '../../Contacts/Contacts';

import classes from './Footer.module.css';

const Footer = () => {
    const [showContacts, setShowContacts] = useState(false);

    const showContactsHandler = () => {
        setShowContacts(true);
    };

    const hideContactsHandler = () => {
        setShowContacts(false);
    };

    return (
        <div className={classes.footer}>
            <div className={classes['footer-info']}>
                <button onClick={showContactsHandler}>Contacts</button>
                <Link to="/about">About Us</Link>
                <Link to="/terms">Terms and Conditions</Link>
            </div>
            <div className={classes['footer-icons']}>
                <a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="http://instagram.com"><i className="fab fa-instagram"></i></a>
                <a href="http://twitter.com"><i className="fab fa-twitter"></i></a>
            </div>
            <p>© This site is made with educational purpose only! No rights reserved!</p>
            {showContacts && <Contacts onHideContacts={hideContactsHandler} />}
        </div>
    );
};

export default Footer;