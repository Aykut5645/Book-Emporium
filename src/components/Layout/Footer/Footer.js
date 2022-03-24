import classes from './Footer.module.css';

const Footer = () => {
    return (
        <section className={classes.footer}>
            <article className={classes['footer_col']}>
                <h3 className={classes['footer_col_title']}>SDFSADF</h3>
                <ul className={classes['footer_col_list']}>
                    <li className={classes['footer_col_item']}><a href="/#">DSAFSADF</a></li>
                    <li className={classes['footer_col_item']}><a href="/#">DSAFSADF</a></li>
                    <li className={classes['footer_col_item']}><a href="/#">DSAFSADF</a></li>
                </ul>
            </article>
            <article  className={classes['footer_col']}>
                <h3 className={classes['footer_col_title']}>DSFSADFASDF</h3>
                <ul className={classes['footer_col_list']}>
                    <li className={classes['footer_col_item']}><a href="/#">ASDFASDFSADF</a></li>
                    <li className={classes['footer_col_item']}><a href="/#">ASDFASDFSADF</a></li>
                </ul>
            </article>
            <article className={classes['footer_col']}>
                <h3 className={classes['footer_col_title']}>ASDFSADFSADF</h3>
                <ul className={classes['footer_col_list']}>
                    <li className={classes['footer_col_item']}><a href="/#">ASDFSADFSADF</a></li>
                    <li className={classes['footer_col_item']}><a href="/#">ASDFSADFSADF</a></li>
                    <li className={classes['footer_col_item']}><a href="/#">ASDFSADFSADF</a></li>
                </ul>
            </article>
            <article className={classes['footer_col']}>
                <h3 className={classes['footer_col_title']}>SDFASDFSADFSAD</h3>
                <span><i className={['fab fa-facebook-f']}></i></span>
                <span><i className={["fab fa-instagram"]}></i></span>
            </article>
        </section>
    );
};

export default Footer;