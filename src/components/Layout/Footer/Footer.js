import { Link } from 'react-router-dom';

import classes from './Footer.module.css';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <article className={classes['footer-info']}>
                <Link to="/conctacts">Contacts</Link>
                <Link to="/terms">Terms and Conditions</Link>
                <Link to="/about">About Us</Link>
            </article>
            <article className={classes['footer-icons']}>
                <a href="http://facebook.com"><i className="fab fa-facebook-f"></i></a>
                <a href="http://instagram.com"><i className="fab fa-instagram"></i></a>
                <a href="http://twitter.com"><i className="fab fa-twitter"></i></a>
            </article>
            <p>© This site is made with educational purpose only! No rights reserved!</p>
        </section>
    );
};

export default Footer;