import classes from './NotFound.module.css';

const NotFound = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.error}>404</h1>
            <h2 className={classes.info}>Page Not Found.</h2>
        </div>
    );
};

export default NotFound;