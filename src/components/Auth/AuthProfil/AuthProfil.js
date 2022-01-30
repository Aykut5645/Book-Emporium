import Card from '../../UI/Card/Card';

import Button from '../../UI/Button/Button';

import classes from './AuthProfil.module.css';
import image from '../../../assets/avatar.jpg';

const AuthProfil = () => {
    const choseFileHandler = () => {
    };

    return (
        <Card className={classes.container}>
            <div className={classes["user-img-wrapper"]}>
                <img src={image} alt="" />
            </div>
            <div className={classes['file-wrapper']}>
                <input type="file" hidden />
                <label className={classes['file-label']}>Choose File</label>
                <Button className={classes["user-btn"]}>Upload</Button>
            </div>
            <div className={classes["user-info"]}>
                <h2>Change your credentials</h2>
                <div className={classes["user-credentials"]}>
                    <label htmlFor='title'>New Email</label>
                    <input type='email' id='email' name='email' />
                    <Button className={classes['user-btn']}>Change Email</Button>
                </div>
                <div className={classes["user-credentials"]}>
                    <label htmlFor='password'>New Password</label>
                    <input type='password' id='password' name='password' />
                    <Button className={classes['user-btn']}>Change Password</Button>
                </div>
            </div>
        </Card>
    );
};

export default AuthProfil;