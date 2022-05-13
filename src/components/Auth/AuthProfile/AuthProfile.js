import { useContext } from 'react';
import { updateEmail, updatePassword, updateProfile, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';

import { storage } from '../../../firebase-config';

import avatar from '../../../assets/avatar.jpg';

import Card from '../../UI/Card/Card';
import Button from '../../UI/Button/Button';
import classes from './AuthProfile.module.css';
import { useState, useEffect } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import useAuth from '../../../hooks/user-hook';
import AuthContext from '../../../contexts/auth-context/AuthProvider';
import LoadingSpinner from '../../UI/LoadingSpinner/LoadingSpinner';

const AuthProfile = props => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const [image, setImage] = useState(null);
    const [photoUrl, setPhotoUrl] = useState(null);

    const currentUser = useAuth();
    const { password } = useContext(AuthContext);

    useEffect(() => {
        if (currentUser) {
            setUserEmail(currentUser.email);
            setPhotoUrl(currentUser.photoURL);
        }
    }, [currentUser]);

    const fileHandler = async (event) => {
        if (event.target.files[0]) {
            setImage(event.target.files[0]);
        }
    };

    const uploadHandler = async () => {
        const imageRef = await ref(storage, "wwwimage");
        await uploadBytes(imageRef, image);
        const fileUrl = await getDownloadURL(imageRef);
        setPhotoUrl(fileUrl);
        updateProfile(currentUser, { photoURL: fileUrl });
    };

    const reAuth = async () => {
        let credentials = EmailAuthProvider.credential(
            currentUser.email,
            password
        );
        await reauthenticateWithCredential(currentUser, credentials);
    };

    const changeEmailHandler = (event) => {
        setUserEmail(event.target.value);
    };

    const emailHandler = async () => {
        try {
            reAuth();
            await updateEmail(currentUser, userEmail);
            console.log('email updated!!!');
        } catch (err) {
            console.log('change email => FAILED');
            console.log(err.message);
        }
    };

    const changePasswordHandler = (event) => {
        setUserPassword(event.target.value);
    };

    const passwordHandler = async () => {
        try {
            reAuth();
            await updatePassword(currentUser, userPassword);
            console.log('password updated!!!');
        } catch (err) {
            console.log('change password => FAILED');
            console.log(err);
        }
    };

    return (
        <>
            <Card className={classes.container}>
                <h1 className={classes['user-title']}>Change your credentials</h1>
                <div className={classes["user-img"]}>
                    <div className={classes["user-img-wrapper"]}>
                        <img src={photoUrl || avatar} alt="" />
                    </div>
                    <div className={classes['user-img-file-wrapper']}>
                        <input id="file-upload" type="file" onChange={fileHandler} />
                        <label htmlFor="file-upload">Choose a file...</label>
                        <Button onClick={uploadHandler} className={classes["user-btn"]}>
                            Upload
                        </Button>
                    </div>
                </div>
                <div className={classes["user-info"]}>
                    <div className={classes["user-info-credential"]}>
                        <label htmlFor='title'>New Email</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={userEmail}
                            onChange={changeEmailHandler}
                        />
                        <Button className={classes['user-btn']} onClick={emailHandler}>
                            Change Email
                        </Button>
                    </div>
                    <div className={classes["user-info-credential"]}>
                        <label htmlFor='password'>New Password</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            value={userPassword}
                            onChange={changePasswordHandler}
                        />
                        <Button className={classes['user-btn']} onClick={passwordHandler}>
                            Change Password
                        </Button>
                    </div>
                </div>
            </Card >
            <h1 className={classes.subtitle}>Your Books</h1>
        </>
    );
};

export default AuthProfile;