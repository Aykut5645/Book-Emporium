import { Link } from 'react-router-dom';

import classes from './AuthProfil.module.css';

const AuthProfil = () => {
    return (
        <Link to="/books/create">
            <button className={classes.button}>Create</button>
        </Link>
    );
};

export default AuthProfil;