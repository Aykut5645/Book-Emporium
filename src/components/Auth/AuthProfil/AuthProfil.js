import Card from '../../UI/Card/Card';

import classes from './AuthProfil.module.css';
import image from '../../../assets/avatar.jpg';

const AuthProfil = () => {
    return (
        <Card className={classes.container}>
            <div className={classes["user-img-wrapper"]}>
                <img src={image} alt="" />
            </div>
            <div className={classes["user-info"]}>
                <div className={classes.control}>
                    <label htmlFor='title'>Email</label>
                    <input type='email' id='email' name='email' />
                </div>
                <div className={classes.control}>
                    <label htmlFor='password'>Password</label>
                    <input type='password' id='password' name='password' />
                </div>
            </div>
        </Card>
    );
};

export default AuthProfil;