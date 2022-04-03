import classes from './Footer.module.css';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <article className={classes['footer_col']}>
                <h3 className={classes['footer_col_title']}>SDFASDFSADFSAD</h3>
                <span><i className={['fab fa-facebook-f']}></i></span>
                <span><i className={["fab fa-instagram"]}></i></span>
            </article>
        </section>
    );
};

export default Footer;