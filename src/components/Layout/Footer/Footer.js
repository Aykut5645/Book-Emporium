import classes from './Footer.module.css';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <article className={classes['footer-info']}>
                <p>Contacts</p>
                <p>Terms and Conditions</p>
                <p>About Us</p>
            </article>
            <article className={classes['footer-icons']}>
                <span><i className="fab fa-facebook-f"></i></span>
                <span><i className="fab fa-instagram"></i></span>
                <span><i className="fab fa-twitter"></i></span>
            </article>
            <p>© This site is made with educational purpose only! No rights reserved!</p>
        </section>
    );
};

export default Footer;